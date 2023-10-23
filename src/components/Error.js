import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!!! Something Went Wrong😱</h1>
      <h2>{error.data}</h2>
      <h3>
        {error.status} : {error.statusText}
      </h3>
    </div>
  );
};

export default Error;
