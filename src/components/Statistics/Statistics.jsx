import css from './Statistics.module.css';

export const Statistics = ({
    good, 
    neutral, 
    bad,

    countTotalFeedback,
    countPositiveFeedbackPercentage
}) => {

return (
  <div>
    <p className={css.item}>Good: {good}</p>
    <p className={css.item}>Bad: {bad}</p>
    <p className={css.item}>Neutral: {neutral}</p>

    <p className={css.item}>Total: {countTotalFeedback()}</p> 
    <p className={css.item}>Positive feedback: {countPositiveFeedbackPercentage()}%</p> 
  </div> 
)
}





       