import ColorCard from '../ColorCard/ColorCard'
import './ColorCardList.css'

const ColorCardList = ({ colorCardList }) => {
    console.log('hola')
    return (
        <div className="colors-card-container">
            {colorCardList.map(colorCard => <ColorCard key={colorCard.id} colorCard={colorCard} />)}
        </div>
    )
}
export default ColorCardList