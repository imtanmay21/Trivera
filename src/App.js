import { useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';

import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Quiz from './components/Quiz/Quiz';
import fire from './helper/fire';

function App() {

  const [user, setUser] = useState('');
  const [showHome, setShowHome] = useState(true);
  const [quizCategory, setQuizcategory] = useState('');

  const handleLoginState = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    })
  }

  const showHomeHandler = () => {
    setShowHome(true);
  }

  const showQuizHandler = category => {
    setShowHome(false);
    switch (category) {
      case 'Books':
        setQuizcategory('10')
        break
      case 'Music':
        setQuizcategory('12')
        break
      case 'Film':
        setQuizcategory('11')
        break
      case 'Video Games':
        setQuizcategory('15')
        break
      case 'Computers':
        setQuizcategory('18')
        break
      default: setQuizcategory('10')
        break
    }
  }

  return (
    <div className="App">
      {user &&
        <div className="container">
          <Navbar onShowHome={showHomeHandler} />
          {showHome && <Hero onShowQuiz={showQuizHandler} />}
          {!showHome && <Quiz category={quizCategory} />}
        </div>
      }

      {!user && <Login onLogin={handleLoginState} />}
    </div>
  );
}

export default App;
