import React from "react";
import Form from "react-bootstrap/Form";
import style from "../css/form.module.css";
import Select from "react-select";

const bar = () => {
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
};

export default Form1;
