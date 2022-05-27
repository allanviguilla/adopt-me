import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return <h2>Whattup {id}</h2>;
};

export default Details;
