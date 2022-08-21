import React, { useEffect, useState } from "react";
import Nav1 from "./component/navbar";
import style from "./css/Landingpage.module.css";
import style1 from "./css/Carsearchpage.module.css";
import car from "./img/car.svg";
import Footer from "./component/footer";
import Form1 from "./component/form";
import axios from "axios";

const Carsearchpage = () => {
  const [dataAPI, setDataAPI] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://bootcamp-rent-car.herokuapp.com/admin/car"
      );
      setDataAPI(res.data);
    }
    fetchData();
  }, []);
  return (
    <div className={`wrapper ${style1.wrapper1}`}>
      <Nav1 className={style.nav1}></Nav1>
      <div className={`wrapper ${style.bg}`}>
        <div className={style.wrappertext1}>
          <h1 className={`header1 ${style.header1}`}>
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p className={`header2 ${style.header2}`}>
            {" "}
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
        </div>
        <div className={`wrappermobil ${style1.mobil1}`}>
          <img src={car} alt="car"></img>
        </div>
      </div>

      <div>
        <Form1 dataAPI={dataAPI} />
      </div>

      <div class={style1.info}>
        <Footer />
      </div>
    </div>
  );
};

export default Carsearchpage;
