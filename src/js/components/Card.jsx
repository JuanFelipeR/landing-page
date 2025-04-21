
const Card = (props) => {
    return (
        <div class="card">
            <img src={props.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}.</p>
                <a href="#" class="btn btn-primary">{props.button}</a>
            </div>
        </div>
    )
}

export default Card;