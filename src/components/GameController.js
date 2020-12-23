import { CardController } from "./CardContoller";
import AttributeController from './AttributesController'
import AttributeCheck from './AttributeCheck'
import neutralEventsData from '../data/eventsNeutral.json';
import charCreationData from '../data/charCreation.json';
import {useState} from 'react';
import { CHARISMA, ATTACK, MAGIC, 
        AGILITY, MONEY, FOOD, HEALTH, MAX_HEALTH } from '../store/statNames';
import { Card } from './Card';

const initialCharObj = {
    charName: 'Petya Pupkin',
    fatePoints: 10,
    charMainAttr: {attack: 2, magic: 2, agility: 1, charisma: 1},
    charSecondAttr: {money: 10, healthMax: 10, healthCurr: 10, food: 3}
}

const GameController = (props) => {

    const [charObj, setCharObj] = useState(initialCharObj); //объект персонажда 
    const [currentCardsData, setNewCardsData] = useState(neutralEventsData); // 
    const [currGameState, setGameState] = useState('pickCard'); //Текущее состояние игры, для отображения различных компонентов.

    const cardsOnClickHandler = (card) => { //получаем объект карты по которой было нажатие

        switch(card.cardType) { //воспроизводим логику в зависимости от типа карты
            case 'attrGain':
                attributeSetter(card.attrToChange, card.value)
                break;
            case 'checkToGain':
                startAttrCheck(card.attrToCheck, card.attrToShowCheck, card.difficult)
            break;

            default: 
            console.log("dont know what card type is it");
        }
        console.log(card, "DATA");
    }

    const [dataToDifficultCheck, setDataToDifficultCheck] = useState(null);

    const startAttrCheck = (attrToCheck, attrToShow, difficult) => {
        setDataToDifficultCheck({attrToCheck: attrToCheck, 
                                difficult: difficult, 
                                attrToShow: attrToShow});
        console.log('DATATODIFF', dataToDifficultCheck, "DATATODIFF");

        setGameState('attrCheck');
    }

    const endAttrCheck = (result, attrToChange, value) => {
        if(result)
        attributeSetter(attrToChange, value)
        
        setGameState('pickCard');        
    }

    const attributeSetter = (attrToset, value) => { //изменяем атрибуты персонажа
        const tmpCharObj = {...charObj};
        
        switch(attrToset) {
            case ATTACK: 
                tmpCharObj.charMainAttr.attack += parseInt(value);
                console.log('new char obj on change', tmpCharObj);
                setCharObj(tmpCharObj);
            break;

            case MAGIC: 
                tmpCharObj.charMainAttr.magic += parseInt(value);
                console.log('new char obj on change', tmpCharObj);
                setCharObj(tmpCharObj);
            break;

            case AGILITY: 
                tmpCharObj.charMainAttr.agility += parseInt(value);
                console.log('new char obj on change', tmpCharObj);
                setCharObj(tmpCharObj);
            break;

            case CHARISMA: 
                tmpCharObj.charMainAttr.charisma += parseInt(value);
                console.log('new char obj on change', tmpCharObj);
                setCharObj(tmpCharObj);
            break;

            case MONEY: 
                tmpCharObj.charSecondAttr.money += parseInt(value);
                console.log('new char obj on change', tmpCharObj);
                setCharObj(tmpCharObj);
            break;

            case FOOD: 
                tmpCharObj.charSecondAttr.food += parseInt(value);
                console.log('new char obj on change', tmpCharObj);
                setCharObj(tmpCharObj);
            break;

            case MAX_HEALTH: 
                tmpCharObj.charSecondAttr.healthMax += parseInt(value);
                tmpCharObj.charSecondAttr.healthCurr += parseInt(value);
                console.log('new char obj on change', tmpCharObj);
                setCharObj(tmpCharObj);
            break;

            case HEALTH: 
                tmpCharObj.charSecondAttr.healthCurr += parseInt(value);
                if(tmpCharObj.charSecondAttr.healthCurr > tmpCharObj.charSecondAttr.healthMax)
                    tmpCharObj.charSecondAttr.healthCurr = tmpCharObj.charSecondAttr.healthMax
                console.log('new char obj on change', tmpCharObj);
                setCharObj(tmpCharObj);
            break;

            default: 
            return 'uknown attr to change';
        }

    }

    const attributeGetter = (attrToGet) => {

        switch(attrToGet) {
            case ATTACK:
                return charObj.charMainAttr.attack;
            case MAGIC: 
                return charObj.charMainAttr.magic;
            case AGILITY:
                return charObj.charMainAttr.agility;
            case CHARISMA:
                return charObj.charMainAttr.charisma;
            case MONEY: 
                return charObj.charSecondAttr.money;
            case FOOD:
                return charObj.charSecondAttr.food;
            case MAX_HEALTH:
                return charObj.charSecondAttr.healthMax;
            case HEALTH:
                return charObj.charSecondAttr.healthCurr;

            default:
                return 'uknown attr in attributeGetter';
        }

    }

    const gameLoop = () => { //Игровой цикл. 

        const returnValue = () => {
            if(currGameState === 'pickCard') //Логика для вывода одного из главных компонентов
            return (
            <> 
                <h1 className="title">PICK A CARD</h1>
                <CardController cardsData={currentCardsData} onClick={cardsOnClickHandler}/>
            </>
             )

            if(currGameState === 'attrCheck')
            return (
            <>
                <h1 className="title">AttributeCheck</h1>
                <AttributeCheck 
                dataToDifficultCheck={dataToDifficultCheck}
                callbackResult={endAttrCheck}/>
            </> 
            )
        }
        
        return(
            returnValue()
        )
    }

    return (
        <div className='game-field'>
            {gameLoop()} 
            <AttributeController 
            charMainAttributes={charObj.charMainAttr} 
            charSecondAttributes={charObj.charSecondAttr}/>
        </div>
    )
}

export default GameController;