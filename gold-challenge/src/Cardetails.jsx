import React from "react";
import Nav1 from "./component/navbar";
import style from "./css/Landingpage.module.css";
import style1 from "./css/Carsearchpage.module.css";
import style3 from "./css/form.module.css";
import Footer from "./component/footer";
import Accordion from "react-bootstrap/Accordion";
import CardB from "./component/cardB";
import style2 from "./css/cardetails.module.css";
import bg from "./img/bg.svg";
import { Form } from "react-bootstrap";
import Select from "react-select";

const Cardetails = () => {
  return (
    <div className={`wrapper ${style1.wrapper1}`}>
      <Nav1 className={style.nav1}></Nav1>
      <div className={`wrapper ${style2.bg}`}>
        <img src={bg} alt="bg" className={style2.img}></img>
      </div>
      <div className={style2.wrapper2}>
        <Form>
          <div className={style3.textwrap}>
            <Form.Label className={style3.text}>Nama Mobil</Form.Label>
            <Form.Label className={style3.text1}>Kategori</Form.Label>
            <Form.Label className={style3.text2}>Harga</Form.Label>
            <Form.Label className={style3.text3}>Status</Form.Label>
          </div>
          <div className={style3.optionwrap}>
            <Form.Control
              className={style3.option}
              type="text"
              placeholder="Ketik nama/tipe mobil"
            />
            <Select
              className={style3.option}
              placeholder="Masukkan Kapasitas Mobil"
            />

            <Select
              className={style3.option}
              placeholder="Masukan Harga Sewa per Hari"
            />

            <Select className={style3.option} placeholder="Disewa" />
          </div>
        </Form>
      </div>
      <div className={style2.wrapperutama}>
        <div className={style2.textwrap}>
          <p className={style2.text1}>Tentang Paket</p>
          <p className={style2.text1}>Include</p>
          <ul className={style2.text2}>
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
          <p className={style2.text1}>Exclude</p>
          <ul className={style2.text2}>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
          <div className={style2.text1}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className={style2.wrapper1}>
                <div className={style.wrapper}>
                  <Accordion.Header className={style2.text1}>
                    Refund, Reschedule, Overtime
                  </Accordion.Header>
                  <Accordion.Body className={style2.text2}>
                    <ul className={style2.text2}>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className={style2.cardB}>
          <CardB />
        </div>
      </div>
      <div class={style1.info}>
        <Footer />
      </div>
    </div>
  );
};

export default Cardetails;
