import Card from 'react-bootstrap/Card';
import style from '../css/card.module.css'

function Card1() {
  return (
  <div className={style.cardwrap1}>
    <Card>
      <Card.Body>
        <Card.Img className={style.why1} variant="top" src='images/whyicon1.png'/>
        <Card.Text className={style.text1} >Mobil Lengkap</Card.Text>
        <Card.Text className={style.text2}>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
      <Card.Img className={style.why1} variant="top" src='images/whyicon2.png'/>
        <Card.Text className={style.text1}>Harga Murah</Card.Text>
        <Card.Text className={style.text2}>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
      <Card.Img className={style.why1} variant="top" src='images/whyicon3.png'/>
        <Card.Text className={style.text1}>Layanan 24 Jam</Card.Text>
        <Card.Text className={style.text2}>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
      <Card.Img className={style.why1} variant="top" src='images/whyicon4.png'/>
        <Card.Text className={style.text1}>Sopir Profesional</Card.Text>
        <Card.Text className={style.text2}>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</Card.Text>
      </Card.Body>
    </Card>

  </div>
    
    
  );
}

export default Card1;