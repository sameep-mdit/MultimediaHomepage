import { Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

type SeeMoreProps = {
  link: string;
  label?: string;
  dark?: boolean;
};
const SeeMoreCard = ({ link, label, dark }: SeeMoreProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={`rounded cursor-pointer flex justify-center items-center h-full w-full ${
        dark ? "bg-zinc-900 hover:bg-zinc-700" : "bg-zinc-100 hover:bg-zinc-200"
      } `}
      onClick={() => navigate(link)}
    >
      <Text
        size="lg"
        className={`font-semibold ${dark ? "text-zinc-100" : "text-zinc-900"}`}
      >
        {label ?? "See More"}
      </Text>
    </div>
  );
};

export default SeeMoreCard;
