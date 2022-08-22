import Card from "react-bootstrap/Card";
import style from "../css/cardB.module.css";

function CardB() {
  return (
    <Card className={style.wrapper1}>
      <Card.Body className={style.wrapper2}>
        <Card.Img className={style.car1} variant="top" src="images/car1.png" />
        <div className={style.wraptext}>
          <Card.Text className={style.text}>nama</Card.Text>
          <div className={style.wraptext1}>
            <Card.Img className={style.textimg} src="images/user-white.png" />
            <Card.Text className={style.text1}>jumlah penumpang</Card.Text>
          </div>
          <Card.Text className={style.text2}>Total Harga</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardB;
