const Button = (props, ...rest) => {
  console.log(props);
  return (
    <>
      <button 
      {...rest}
      className="btnPrimary  container ">
        {props.text}
        {props.icon}
      </button>
    </>
  );
};

export default Button;
