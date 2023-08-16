const ButtonSmall = (props) => {
  const { text, background } = props;
  return(
    <button style={{
      color: "white",
      backgroundColor: `${background}`,
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer"
    }}>{text}</button>);
};
export default ButtonSmall;