import { useParams } from "react-router-dom";

const Mustwatch = () => {
  const params = useParams();
  const value = params.name;

  return <div>{value}</div>;
};

export default Mustwatch;
