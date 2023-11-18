import css from './Feedback.module.css';

// const { Component } = require("react");

export const Feedback = ({ 
    option,
    onLeaveFeedback
 
}) => {
    
    return (
        <div className=''>
            {option.map(name => (<button
                className={css.btn}
                name={name}
                key={name}
                onClick={() => onLeaveFeedback(name)
                }>{name.replace(name[0], name[0].toUpperCase())}</button>))}                     
        </div>

    )
}