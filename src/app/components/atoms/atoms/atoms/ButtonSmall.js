const ButtonSmall = (props) => {

  
  return(
    <button className="button-small" onClick={props.handler} style={{width: props.width}}> {props.texto}</button>);
};
export default ButtonSmall;