const ButtonSmall = (props) => {
  const { text } = props;
  return(
    <button style={{
      color: "white",
      backgroundColor: "darkgreen",
      padding: "10px 20px",
      borderRadius: "5px",
      fontSize: "1.5rem",
      cursor: "pointer"
    }}>{text}</button>);
};
export default ButtonSmall;