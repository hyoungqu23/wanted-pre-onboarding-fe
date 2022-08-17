import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/Auth/LoginForm';
import SignUpForm from './Components/Auth/SignUpForm';
import Todo from './Components/Todo/Todo';
import AppLayout from './Components/Layout/AppLayout';

function App() {
  return (
    <AppLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;
