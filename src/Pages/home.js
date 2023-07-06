import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export function Home() {
  return (
    <div className="App">
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HOME WELCOME HOME
        </p>
      </header>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}