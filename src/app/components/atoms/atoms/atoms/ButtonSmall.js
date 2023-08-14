const ButtonSmall = (props) => {
  const { text } = props;
  return(
    <button style={{
      color: "white",
      backgroundColor: "#ab0433",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer"
    }}>{text}</button>);
};
export default ButtonSmall;