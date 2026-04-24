
const MovieCard=(props)=>{
    return(
        <div style={{border:"1px solid gray" ,padding:"10px",margin:"10px",width:"200px",borderRadius:"15px"}}>
            <img src={props.image} alt={props.title} width="100%" />
            <h3>{props.title}</h3>
            <p>Rating: {props.rating}</p>
            <p>Genre: {props.genre}</p>

        </div>
    )
}

export default MovieCard;