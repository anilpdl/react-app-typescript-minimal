import { Link } from 'react-router-dom';

import ROUTES from '@/constants/routes';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
