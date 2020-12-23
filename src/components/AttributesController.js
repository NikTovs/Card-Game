const AttributeController = (props) => {

    return(
        <div className='attributes'>
           <div className='attributes-charStats'>
            <div>
                ⚔️: {props.charMainAttributes.attack}
            </div>
            <div>
                🔮: {props.charMainAttributes.magic}   
            </div>
            <div>
                🦶: {props.charMainAttributes.agility}
            </div>
            <div>
                💬: {props.charMainAttributes.charisma}
            </div>    
           </div>
           <div className='attributes-other'>
           <div>
                💰: {props.charSecondAttributes.money}   
            </div>
            <div>
                🍏: {props.charSecondAttributes.food}
            </div>
            <div>
                ❤️: {props.charSecondAttributes.healthCurr} / {props.charSecondAttributes.healthMax}
            </div>
           </div>
        </div>
    )
};

export default AttributeController;

