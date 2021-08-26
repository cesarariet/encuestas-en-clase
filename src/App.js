import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewQuiz from './pages/NewQuiz';
import Quiz from './pages/Quiz';
import Error404 from './pages/Error404';
import 'katex/dist/katex.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/newquiz/:quizId" component={NewQuiz} />
        <Route path="/quiz/:quizId" component={Quiz} />
        <Route path="/*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
