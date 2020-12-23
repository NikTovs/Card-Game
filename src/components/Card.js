import '../styles/cards-styles.css';

export const Card = ({title, text, payload, reward, onClick}) => {

    const onClickHandler = () => {        
        onClick({...payload, ...reward});    
    }

    return(
        <div className='card card-default shine' onClick={onClickHandler}>
            <h3 className='card-title'>{title}</h3>
            <p className='card-text'>{text}</p>
            <p className='card-check'>
                <span className='boldText'>Check:</span> {payload.difficult}{payload.attrToShowCheck}</p>
            <p className='card-reward'>
                <span className='boldText'>Reward:</span> +{reward.value}{reward.attrToShow}</p>
        </div>
    )
}