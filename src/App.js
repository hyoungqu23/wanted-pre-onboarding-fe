import './App.css';
import LoginForm from './components/LoginForm';
import AppLayout from './components/layout/AppLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import Todo from './components/todo/Todo';

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
