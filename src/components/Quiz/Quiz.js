import { Component, Fragment } from "react";
import classes from './Quiz.module.css';
import QuizScore from "./QuizScore";

export default class Quiz extends Component {

    state = {
        quizCategory: null,
        quizData: null,
        question: null,
        options: [],
        current: 0,
        correct: '',
        chosenOption: null,
        correctOptionChosen: false,
        startedQuiz: false,
        quizEnd: false,
        totalScore: 0,
        showScore: false,
        emoji: ''
    };

    async componentDidMount() {
        const url = `https://opentdb.com/api.php?amount=10&category=${this.props.category}&difficulty=easy&type=multiple`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ quizData: data.results })
        console.log(data);
    }

    startQuizHandler = () => {
        if (this.state.quizData) {
            const current = this.state.current;
            this.setState({ question: this.state.quizData[current].question })
            this.setState({ startedQuiz: true })
            this.setState({ correct: this.state.quizData[current].correct_answer })

            this.setState({
                options:
                    this.shuffleOptions([this.state.quizData[current].correct_answer, ...this.state.quizData[current].incorrect_answers])
            })

            this.setState({ chosenOption: null })

            if (this.state.current !== 9) {
                this.setState({ current: this.state.current + 1 });
            } else if (this.state.current === 9) {
                this.setState({ quizEnd: true })
            }

        } else {
            console.log('Loading....');
        }
    }

    optionClickHandler = event => {

        if (this.state.chosenOption === null) {
            this.setState({ chosenOption: event.target.id })

            if (event.target.id === this.state.correct) {
                this.setState({ correctOptionChosen: true });
                this.setState({ totalScore: this.state.totalScore + 1 })
            } else {
                this.setState({ correctOptionChosen: false });
            }
        }
    }

    checkScoreHandler = () => {
        this.setState({ startedQuiz: false })
        this.setState({ showScore: true })
        if (this.state.totalScore < 4) {
            this.setState({emoji: 'grin-tears'})
        } else if (this.state.totalScore >= 7) {
            this.setState({emoji: 'grin-stars'})
        } else {
            this.setState({emoji: 'meh'})
        }
    }

    shuffleOptions = options => {
        for (let i = options.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = options[i];
            options[i] = options[j];
            options[j] = temp;
        }
        return options;
    }

    stringToHtml = str => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(str, 'text/html');
        return doc.body;
    }

    render() {
        return (
            <Fragment>
                {!this.state.showScore && <section className={classes.quiz}>
                    {!this.state.startedQuiz && <button onClick={this.startQuizHandler}>Start</button>}
                    {this.state.startedQuiz &&
                        <div>
                            <h1 dangerouslySetInnerHTML={{ __html: this.state.question }} />
                            <ul>
                                {this.state.options.map(
                                    (option, index) =>
                                        <li
                                            id={option}
                                            key={option}
                                            onClick={this.optionClickHandler}
                                            dangerouslySetInnerHTML={{ __html: option }}
                                            className={`
                                            ${this.state.correctOptionChosen && (option === this.state.chosenOption) ?
                                                    classes.correct : ''}
                                              
                                            ${!this.state.correctOptionChosen && (option === this.state.chosenOption) ?
                                                    classes.wrong : ''}
                                            `
                                            }
                                        />)}
                            </ul>
                            {(this.state.quizEnd && this.state.chosenOption !== null)
                             && <button onClick={this.checkScoreHandler}>Check Score</button>}
                            {(!this.state.quizEnd && this.state.chosenOption !== null) && <button onClick={this.startQuizHandler}>Next</button>}
                        </div>
                    }
                </section>}
                {this.state.showScore && <QuizScore score={this.state.totalScore} emoji={this.state.emoji} />}
            </Fragment>
        )
    }
};

