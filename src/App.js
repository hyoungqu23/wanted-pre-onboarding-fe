import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Todo from './components/todo/Todo';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <SignUpForm />
      <Todo />
    </div>
  );
}

export default App;
