import  Dice  from './Dice'
import '../styles/dice-styles.css'
import {useState} from 'react'

const AttributeCheck = ({dataToDifficultCheck, callbackResult}) => {

    const DICE_NUMBER = 3;
    const [isReroll, setIsReroll] = useState(false);
    const generateRandomValue = (minValue = 1, maxValue = 6) => {
        //rand number 
        let rand = minValue + Math.random() * (maxValue + 1 - minValue);
        return Math.floor(rand);
    }

    return (
        <>
        <div className='dice-checker-field success'>
            <Dice value={generateRandomValue()}/>
            +
            <Dice value={generateRandomValue()}/>
            +
            <Dice value={generateRandomValue()}/>
        </div>
        <div className='dice-result-field'>
            + {dataToDifficultCheck.attrToShow} = 


        </div>
        </>
    )
}

export default AttributeCheck;