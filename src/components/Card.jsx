import star from "../../images/star.png"

function Card(props) {
    return(
        <div className="card">
            <img src={`../images/${props.img}`} alt="Rank 1" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.review}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;
