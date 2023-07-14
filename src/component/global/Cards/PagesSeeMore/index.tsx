import { Text } from "@mantine/core";

type SeeMoreProps = {
  onClick?: () => void;
  label?: string;
  dark?: boolean;
};
const PagesSeeMoreCard = ({ onClick, label, dark }: SeeMoreProps) => {
  return (
    <div
      className={`rounded cursor-pointer flex justify-center items-center h-full w-full ${
        dark ? "bg-zinc-900 hover:bg-zinc-700" : "bg-zinc-100 hover:bg-zinc-200"
      } `}
      onClick={onClick}
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

export default PagesSeeMoreCard;
