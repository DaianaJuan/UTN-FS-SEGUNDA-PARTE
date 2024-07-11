import React from "react";

const RowArticle = (props) => {
    return (
        <div>
            <article>
                <h3>{props.titulo}</h3>
                <p>{props.fecha}</p>
                <p>{props.direccion}</p>
            </article>
        </div>

    )
}

export default RowArticle