import Form from "react-bootstrap/Form";
import style from "../css/form.module.css";
import Select from "react-select";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Form1({ dataAPI }) {
  const [kategori, setKategori] = useState(null);
  const [fokus, setFokus] = useState(false);
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState(null);
  const [status, setStatus] = useState(null);
  const handleName = (e) => {
    setNama(e.target.value);
  };
  const option1 = [
    {
      value: "2 - 4 orang",
      label: "2 - 4 orang",
    },
    {
      value: "4 - 6 orang",
      label: "4 - 6 orang",
    },
    {
      value: "6 - 8 orang",
      label: "6 - 8 orang",
    },
  ];

  const option2 = [
    {
      value: "< 400000",
      label: "< Rp. 400.000",
    },
    {
      value: "< 600000",
      label: "Rp. 400.000 - Rp. 600.000",
    },
    {
      value: "> 600000",
      label: "< Rp. 400.000",
    },
  ];

  const option3 = [
    {
      value: "True",
      label: "True",
    },
    {
      value: "False",
      label: "False",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    let hasil = dataAPI.filter(function (e) {
      return (
        e.name?.toLowerCase().includes(nama.toLowerCase()) &&
        e.category?.includes(kategori) &&
        e.price?.(harga) &&
        e.status?.includes(status)
      );
    });
    console.log(hasil);
  };
  return (
    <div className={fokus ? style.focus : null}>
      <Form
        onSubmit={handleSubmit}
        className={style.start}
        onFocus={() => setFokus(true)}
        onBlur={() => setFokus(false)}
      >
        <div className={style.textwrap}>
          <Form.Label className={style.text}>Nama Mobil</Form.Label>
          <Form.Label className={style.text1}>Kategori</Form.Label>
          <Form.Label className={style.text2}>Harga</Form.Label>
          <Form.Label className={style.text3}>Status</Form.Label>
        </div>
        <div className={style.optionwrap}>
          <Form.Control
            onChange={handleName}
            className={style.option}
            type="text"
            placeholder="Ketik nama/tipe mobil"
          />
          <Select
            className={style.option}
            options={option1}
            placeholder="Masukkan Kapasitas Mobil"
            onChange={(e) => {
              setKategori(e.value);
              console.log(kategori);
            }}
          />

          <Select
            className={style.option}
            options={option2}
            placeholder="Masukan Harga Sewa per Hari"
            onChange={(e) => {
              setHarga(e.value);
              console.log(harga);
            }}
          />

          <Select
            className={style.option}
            options={option3}
            placeholder="Disewa"
            onChange={(e) => {
              setStatus(e.value);
              console.log(status);
            }}
          />
          <div className={style.button1}>
            <Button className={style.button} type="submit">
              Cari Mobil
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Form1;
