import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from '@/containers/Home';
import Dashboard from '@/containers/Dashboard';

import ROUTES from '@/constants/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
