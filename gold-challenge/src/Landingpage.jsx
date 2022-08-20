import React from 'react'
import Nav1 from './component/navbar'
import Button1 from './component/button'
import car from "./img/car.svg"
import Girl1 from "./img/Girl1.svg"
import Card1 from './component/card'
import Carousel1 from './component/carousel'
import style from './css/Landingpage.module.css'
import Accord1 from './component/accordion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './component/footer'


const Landingpage = () => {
  return (
    <div className={style.halaman}>
        <div className={`wrapper ${style.wrapper1}` }>
            <Nav1 className={style.nav1}></Nav1>
            <div className={`wrapper ${style.bg}`}>        
            
                <div className={style.wrappertext1}>
                <h1 className={`header1 ${style.header1}`}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p className={`header2 ${style.header2}`}> Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk
                sewa mobil selama 24 jam.</p>
                <Button1 className={style.button1} variant="success">Mulai Sewa Mobil</Button1>
                </div>
                <div className={`wrappermobil ${style.mobil1}`}>
                <img src={car} alt="car"></img>
                </div>

            </div>
        </div>

        <section className='services'>
            <div className={`wrapper ${style.servicewrap}`}>
                <div className={`wrapper ${style.girl1}`}><img src={Girl1} alt='girl1' width={300}></img></div>
                <div className={style.servicetext}>
                <p className={style.servicetext1}>Best Car Rental for any kind of trip in (Lokasimu)!</p>
                <p className={style.servicetext2}>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <ol>
                <div className={style.image}><FontAwesomeIcon icon={faCircleCheck} /><ul className={style.servicetext3}>Sewa Mobil Dengan Supir di Bali 12 Jam</ul></div>
                <div className={style.image}><FontAwesomeIcon icon={faCircleCheck} /><ul className={style.servicetext3}>Sewa Mobil Lepas Kunci di Bali 24 Jam</ul></div>
                <div className={style.image}><FontAwesomeIcon icon={faCircleCheck} /><ul className={style.servicetext3}>Sewa Mobil Jangka Panjang Bulanan</ul></div>
                <div className={style.image}><FontAwesomeIcon icon={faCircleCheck} /><ul className={style.servicetext3}>Gratis Antar - Jemput Mobil di Bandara</ul></div>
                <div className={style.image}><FontAwesomeIcon icon={faCircleCheck} /><ul className={style.servicetext3}>Layanan Airport Transfer / Drop In Out</ul></div>
                </ol></div>
                
            </div>
        </section>

        <section className="why">
            <div className={style.whywrap}>
                <p class={style.whytext1}>Why Us?</p>
                <p class={style.whytext2}>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className={style.cardwrap}>
                <div className={style.card1}><Card1></Card1></div>
            </div>
        </section>

        <section className="testimonial">
            <div className={style.testi}>
                <div className={style.testi1}>
                <p className={style.testitext1}>Testimonial</p>
                <p className={style.testitext2}> Berbagai review positif dari para pelanggan kami</p>
                </div>
                <Carousel1></Carousel1>
            </div>
            <div className={style.added}>
                <p class={style.addtext1}>Sewa Mobil di (Lokasimu) sekarang</p>
                <p class={style.addtext2}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className={style.buttonwrap}><Button1 className={style.addedbutton}>Mulai Sewa Mobil</Button1></div>
            </div>
        </section>

        <section className="ask">
            <Row>
                <Col sm={6} xs={12}><div className={style.textwrap}>
                <p className={style.asktext1}>Frequently Asked Question</p>
                <p className={style.asktext2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div></Col>
                <Col sm={6} xs={12}><div className={style.accord} ><Accord1></Accord1></div></Col>
            </Row>
        </section>
    
        <div class="wrapperinfo">
            <Footer></Footer>
        </div>
    </div>
  )
}

export default Landingpage