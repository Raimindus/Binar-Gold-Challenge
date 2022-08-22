import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "../css/cardA.module.css";

function CardA({ item }) {
  return (
    <Col md={4}>
      <Card className={style.wrapper1}>
        <Card.Body className={style.wrapper2}>
          <div className={style.carwrap}>
            <Card.Img className={style.car1} variant="top" src={item.image} />
          </div>
          <div className={style.wraptext}>
            <Card.Text className={style.text}>{item.name}</Card.Text>
            <Card.Text className={style.text1}>{item.price}</Card.Text>
            <Card.Text className={style.text2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Card.Text>
          </div>
          <Button className={style.button} type="submit" variant="primary">
            Pilih Mobil
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardA;
