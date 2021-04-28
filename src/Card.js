function Card(props) {
    return(
        <div className="Card">
            <img src={props.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;