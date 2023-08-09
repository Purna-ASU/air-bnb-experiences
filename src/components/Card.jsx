import star from "../../images/star.png"

function Card(props) {
    
    let badgeText
    if (props.dets.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else if(props.dets.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.dets.coverImg}`} alt="Rank 1" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"/>
                <span>{props.dets.stats.rating}</span>
                <span className="gray">({props.dets.stats.reviewCount}) • </span>
                <span className="gray">{props.dets.location}</span>
            </div>
            <p className="card--title">{props.dets.title}</p>
            <p className="card--price"><span className="bold">From ${props.dets.price}</span> / person</p>
        </div>
    )
}

export default Card;
