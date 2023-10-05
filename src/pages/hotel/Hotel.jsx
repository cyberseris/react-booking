import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCity, faLandmark, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/351594538.jpg?k=a95f4405665213d76c062d66cae2199fbc90560da6e9c593db5586df583ca01d&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/246251317.jpg?k=6112394aed0b3af68faab75a6de79c85d9a67671af3cb29be4907b6e529936db&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/246254348.jpg?k=2cf8e8618f5f0a1d9e7d3eee685270eddaed31f38035d042e308b9fa6b12d0c7&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/246251413.jpg?k=b7cee6725512771fd175bfcc84cf74a33fb78233553b64d971a676d6a12401a1&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/246254265.jpg?k=56bf4cbfad0d15b58229d97983182d6a5c9c2f72535a9e4bcf51d227339b1b76&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/246251255.jpg?k=f2efaee2ddf9daf41623b38668e8c24a3ef4552d40f89452e474a9d10eb8d26f&o=&hp=1",
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }

    const handleMove = (direction) => {
        let newSlideNumber;
        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        } else {
            newSlideNumber = slideNumber === 5 ? 5 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber);
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                    <div className="slideWrapper">
                        <img src={photos[slideNumber].src} alt="slide.jpg" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h2 className="hotelTitle">Tisza Hotel</h2>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Szeged, Wesselényi utca 6., Hungary</span>
                    </div>
                    <span className="hotelDistance">150m from center</span>
                    <span className="hotelPriceHighLight">Book a stay over $194 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper" key={i}>
                                <img onClick={() => handleOpen(i)} src={photo.src} alt="hotel.jpg" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h2 className="hotelTitle">Located on Széchenyi Square, Szeged{'\''}s main square</h2>
                            <p className="hotelDesc">
                                You{'\''}re eligible for a Genius discount at Tisza Hotel! To save at this property, all you have to do is sign in.

                                Housed in a historical building from 1885, the elegant Tisza Hotel is directly located on Széchenyi Square, Szeged{'\''}s main square, and the pedestrian area Kárász Utca with shops and restaurants can be reached in 820 feet. Free WiFi  access is available at the property.

                                The hotel offers rooms with a TV and a bathroom with a shower. Most units come with air conditioning.

                                The on-site Central Café & Retro Disco Club features 60s and 70s music as well as contemporary music.

                                Hotel Tisza has a 24-hour reception for your convenience.

                                The National Theater, the Votive Church and the Móra Ferenc Museum are just 984 feet away. Szeged Train Station is at the distance of 1.1 mi.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h2>Perfect for a 3-night stay!</h2>
                            <span>Located in the best-rated area in Szeged, this hotel has an excellent location score of 9.3
                            </span>
                            <h2>Breakfast Info</h2>
                            <span>Continental</span>
                            <h2>Rooms with:</h2>
                            <span><FontAwesomeIcon icon={faCity} className="mr-10" />City view</span>
                            <span><FontAwesomeIcon icon={faLandmark} className="mr-10" />Landmark view</span>
                            <span>Private parking at the hotel</span>
                            <h3>
                                <b>$582</b>(3 nights)
                            </h3>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel