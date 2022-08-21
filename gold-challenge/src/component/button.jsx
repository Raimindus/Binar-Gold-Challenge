import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Button1(props) {
  return (
    <>
      <Button
        as={Link}
        to="/search"
        className={props.className}
        variant="success"
      >
        {props.children}
      </Button>
    </>
  );
}

export default Button1;
