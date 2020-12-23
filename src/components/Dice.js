import {useEffect, useState} from 'react'

const Dice = (props) => {

    const [isAnimTime, setAnim] = useState(false); //Время костылей
                                                //Пофиксить, ибо это страшно
    
    useEffect(() => {
        setAnim(true);
        
    }, [])

    return (
        <div className={isAnimTime ? 'dice roll-it': 'dice'}>
            {props.value}
        </div>
    )
}

export default Dice ;