import css from './Feedback.module.css'

const Feedback = ({ feedback, total, positivePercentage }) => {
  return (
    <div className={css.feedback}>
      <p className={css.feedbackItem}>Good: {feedback.good}</p>
      <p className={css.feedbackItem}>Neutral: {feedback.neutral}</p>
      <p className={css.feedbackItem}>Bad: {feedback.bad}</p>
      <p className={css.feedbackItem}>
        <span className={css.total}>Total: {total}</span>
      </p>
      <p className={css.feedbackItem}>
        <span className={css.positive}>Positive: {positivePercentage}%</span>
      </p>
    </div>
  )
}

export default Feedback