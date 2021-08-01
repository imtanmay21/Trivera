import classes from './QuizScore.module.css';

const QuizScore = props => {

    return (
        <section className={classes['quiz-score']}>
            <h1>Your total score is !</h1>
            <p className={classes.score}>{props.score} / 10</p>
            <i className={`far fa-${props.emoji}`} />
        </section>
    )
}

export default QuizScore