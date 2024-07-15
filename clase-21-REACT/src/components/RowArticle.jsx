import React from "react";

const RowArticle = (props) => {
    return (
        <div>
            <article>
                <h3>{props.titulo}</h3>
                <p>{props.fecha}</p>
                <a href="developer.mozilla.org">{props.direccion_autor}</a>
            </article>
        </div>
    )
}

export default RowArticle