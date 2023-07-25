import { Tasks } from './pages/Tasks/Tasks';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Home } from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
      </Route>
    </Routes>
  );
};
