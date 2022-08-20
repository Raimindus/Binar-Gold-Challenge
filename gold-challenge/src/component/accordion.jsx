import Accordion from 'react-bootstrap/Accordion';
import style from '../css/accordion.module.css'

function Accord1() {
  return (
    <div className={style.wrapper1}>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <div className={style.wrapper}>
          <Accordion.Header className={style.text1}>Apa saja syarat yang dibutuhkan?</Accordion.Header>
          <Accordion.Body className={style.text2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <div className={style.wrapper}>
          <Accordion.Header className={style.text1}>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
          <Accordion.Body className={style.text2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <div className={style.wrapper}>
          <Accordion.Header className={style.text1}>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
          <Accordion.Body className={style.text2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <div className={style.wrapper}>
          <Accordion.Header className={style.text1}>Apakah Ada biaya antar-jemput?</Accordion.Header>
          <Accordion.Body className={style.text2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <div className={style.wrapper}>
          <Accordion.Header className={style.text1}>Bagaimana jika terjadi kecelakaan</Accordion.Header>
          <Accordion.Body className={style.text2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </div>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Accord1;

