import "./home.css"
import Featured from "../../components/featured/featured";
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import PropertyList from "../../components/propertyList/propertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h2 className="homeTitle">Browse by property type</h2>
                <PropertyList />
                <h2 className="homeTitle">Homes guests love</h2>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home