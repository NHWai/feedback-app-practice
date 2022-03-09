import spinner from "../asset/spinner.gif";

function Spinner() {
  const style = {
    width: "100px",
    height: "100px",
    color: "white",
    margin: "auto",
    display: "block",
  };

  return <img src={spinner} alt="spinner wheel" style={style} />;
}

export default Spinner;
