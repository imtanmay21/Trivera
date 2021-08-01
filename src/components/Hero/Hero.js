import classes from './Hero.module.css';

const Hero = props => {
    const buttons = ['Books', 'Music', 'Film', 'Video Games', 'Computers'];
    
    const clickHandler = event => {
        props.onShowQuiz(event.target.value);
    }

    return (
        <section className={classes.hero}>
            <div>
                <h1>Challenge yourself and your friends !</h1>
                <h3>Test your knowledge on any of the categories below</h3>
                <div className={classes['buttons']}>
                    {buttons.map(button => <button key={button} value={button} onClick={clickHandler}>{button}</button>)}
                </div>
            </div>

        </section>
    )
}

export default Hero;