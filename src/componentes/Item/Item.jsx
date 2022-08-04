import React from "react";

const Item = ({producto}) => {
    const {name, description, stock,imagen} = producto
    return (
        <div className="card" style={{width: '18rem',margin:'.5rem'}}>
        <img src={imagen} className="card-img-top" alt={name}  />
        <div>
            <p className="card-text">{name}</p>
            <p className="card-text">{description}</p>
        </div>
        </div>
    )
}

export default Item