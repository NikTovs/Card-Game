import {Card} from './Card';

export const CardController = (props) => {

    const Cards = props.cardsData.map( (item, index) => {
        return <Card 
        title={item.title}
        text={item.cardText}
        payload={item.payload}
        reward={item.reward}
        key={index}
        onClick={props.onClick}
        />
    });
    
    return (
        <div className='board'>
            {console.log("props", props)}
            {Cards}
        </div>
    )
}