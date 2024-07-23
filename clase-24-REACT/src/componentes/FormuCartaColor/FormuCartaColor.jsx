import React, { useState } from 'react'

const FormuCartaColor = ({handleSubmit}) => {

    const formSchema = {
        colors: 4,
        time: 'timestamp'
    }

    const estadoInicial = {
        time: '',
        color_1: '',
        color_2: '',
        color_3: '',
        color_4: ''
    }
    const [formValues, setFormValues] = useState(estadoInicial)
    
    const handleChangeFormValue = (evento) => {
        const valueToChange = evento.target.name
        const newValue = evento.target.value
        setFormValues({...formValues, [valueToChange]: newValue})
    }

    const colorsInputs = []
    for (let i = 1; i <= formSchema.colors; i++) {
        colorsInputs.push(
            <div key={i}>
                <label htmlFor={"color_" + i}>Color {i}</label>
                <input name={'color_' + i} id={'color_' + i} type='text' value={formValues['color_' + i]} onChange={handleChangeFormValue}/>
            </div>
        )
    }

    return (
        <form onSubmit={(evento) => handleSubmit(evento,{...formValues})}>
            <h2>Crea tu propia Color Card</h2>

            {colorsInputs}

            <div>
                <label htmlFor='time'>Fecha</label>
                <input type={formSchema.time} name='time' id='time' onChange={handleChangeFormValue} value={formValues.time}/>
            </div>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default FormuCartaColor
