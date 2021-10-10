import React , {useEffect} from 'react'
import Product from './Product';
import Carousel from 'react-material-ui-carousel';
import AOS from 'aos';
import "aos/dist/aos.css";
const Home = () => {

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

    return (
        <div className="home">
            {/* <div className="home__contianer">    */}
                {/* <img className="home__image" src="https://m.media-amazon.com/images/I/71PdsxjbjPL._SX3000_.jpg" alt="Home" /> */}
                <Carousel className="home__contianer">
                    <img className="home__image" src="https://m.media-amazon.com/images/I/71mGOonr9nL._SX3000_.jpg" alt="Home3" />
                    <img className="home__image" src="https://m.media-amazon.com/images/I/71PdsxjbjPL._SX3000_.jpg" alt="Home1" />
                    <img className="home__image" src="https://m.media-amazon.com/images/I/71n-QAV3QwL._SX3000_.jpg" alt="Home2" />
                    <img className="home__image" src="https://m.media-amazon.com/images/I/7124C24hw1L._SX3000_.jpg" alt="Home4" />
                </Carousel>
            {/* </div>      */}
           
            <div data-aos={"zoom-in"} className="home__row">
                <Product id={12345} title="AmazonBasics 6.5 kg Fully-Automatic Top Load Washing Machine (Grey/Black, Full Metal body, LED Display)"
                price={11999} rating={4} image="https://m.media-amazon.com/images/I/619A7wmPjYL._AC_UL480_QL65_.jpg"   />
                <Product id={12346} title="Samsung 253 L 3 Star Digital Inverter Frost Free Double Door Refrigerator"
                price={23990} rating={3} image="https://images-eu.ssl-images-amazon.com/images/I/31GpOhK+0CL._AC_SX184_.jpg" />
            </div> 
            
            <div data-aos={"zoom-in"} className="home__row">
                <Product id={12347} title="Whirlpool 1.5 Ton 3 Star Inverter Split AC (Copper, 1.5T MAGICOOL 3S COPR INVERTER, White)"
                price={27499} rating={2} image="https://images-eu.ssl-images-amazon.com/images/I/31o5eImORAL._AC_SX184_.jpg" />
                <Product id={12348} title="Faber 90 cm 1500 m³/hr Auto-Clean curved glass Kitchen Chimney"
                price={16240} rating={3} image="https://images-eu.ssl-images-amazon.com/images/I/31zwJ9vETaL._AC_SX184_.jpg" />
                <Product id={12349} title="Butterfly Premium Plastic Vegetable Chopper 600 ml Blue"
                price={194} rating={4} image="https://m.media-amazon.com/images/I/41yk9bJlo0L.jpg" />
            </div>
            <div data-aos={"zoom-in"} className="home__row">
                <Product id={12350} title="OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)"
                price={29999} rating={4} image="https://m.media-amazon.com/images/I/41Gsj-Q-zOS._AC_SY200_.jpg" />
                <Product id={12351} title="New Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case"
                price={29999} rating={4} image="https://m.media-amazon.com/images/I/71rhrO49SmL._SL1500_.jpg" />
                <Product id={12352} title="Canon PowerShot 20.3MP Digital Camera with 50x Optical Zoom"
                price={20090} rating={4} image="https://m.media-amazon.com/images/I/71Xp-K4MMBL._AC_UL480_FMwebp_QL65_.jpg" />
                <Product id={12353} title="Fire TV Stick Lite with Alexa Voice Remote Lite | Stream HD Quality Video"
                price={1799} rating={4} image="https://m.media-amazon.com/images/I/41ecahm2BBS._SL1000_.jpg" />
            </div>
        </div>
    )
}

export default Home
