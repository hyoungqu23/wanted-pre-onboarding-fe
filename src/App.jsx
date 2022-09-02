import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/Auth/LoginForm';
import SignUpForm from './Components/Auth/SignUpForm';
import Todo from './Components/Todo/Todo';
import PrivateRouter from './Auth/PrivateRouter';
import Page404 from './Components/404';
import AppLayout from './Components/Layout/AppLayout';

function App() {
  return (
    <AppLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/todo"
            element={
              <PrivateRouter>
                <Todo />
              </PrivateRouter>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;
