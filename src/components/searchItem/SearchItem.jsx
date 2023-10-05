import "./searchItem.css";
import { useNavigate } from "react-router-dom";

const SearchItem = () => {
    const navigate = useNavigate();

    const handleView = () => {
        navigate("/hotels/1");
    }
    return (
        <div className="searchItem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/246251317.jpg?k=6112394aed0b3af68faab75a6de79c85d9a67671af3cb29be4907b6e529936db&o=&hp=1"
                alt="searchResult.jpg"
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Tisza Hotel</h1>
                <span className="siDistance">150m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Hotel with Air conditioning
                </span>
                <span className="siFeatures">
                    2 twin beds
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$194</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton" onClick={handleView}>See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;