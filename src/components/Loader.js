import Spinner from "../assets/Spinner.gif";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center w-100"
      >
      <img src={Spinner} alt="Loading" />
    </div>
  );
};

export default Loader;
