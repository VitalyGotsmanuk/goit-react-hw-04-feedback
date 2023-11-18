import css from './Feedback.module.css';

export const Feedback = ({ 
    option,
    handleFeedback
}) => {
    return (
        <div className=''>
            {option.map(name => (<button
                className={css.btn}
                name={name}
                key={name}
                onClick={() => handleFeedback(name)
                }>{name.replace(name[0], name[0].toUpperCase())}</button>))}                     
        </div>
    )
}