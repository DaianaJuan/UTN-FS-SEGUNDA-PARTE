import React from 'react'

const CodePointInfo = (props) => {
    return (
        <article>
            <h2>{props.titulo}</h2>
            <div>{props.children}</div>
        </article>    
    )
}

export default CodePointInfo