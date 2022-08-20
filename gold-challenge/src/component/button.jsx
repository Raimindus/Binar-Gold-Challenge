import Button from 'react-bootstrap/Button';

function Button1(props) {
  return (
    <>
      <Button href="#" className={props.className} variant="success">
        {props.children}
      </Button>
    </>
  );
}

export default Button1;