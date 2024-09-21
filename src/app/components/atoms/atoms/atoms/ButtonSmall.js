const ButtonSmall = (props) => {

  
  return(
    <button className="button-small" onClick={props.handler} style={{width: props.width, backgroundColor: props.backgroundColor}}> {props.texto}</button>);
};
export default ButtonSmall;