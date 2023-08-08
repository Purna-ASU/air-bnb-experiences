import logo from "../assets/image1.png";
import star from "../assets/star.png";

function Card() {
    return(
        <div className="card">
            <img src={logo} alt="Rank 1" className="card--img1"/>
            <div className="card--rate">
                <img src={star} alt="star" className="card--star"/>
                <span>5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey"> USA</span>
            </div>
            <p>Life lessons with kate jeffrenes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;
