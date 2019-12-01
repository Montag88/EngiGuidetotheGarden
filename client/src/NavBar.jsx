import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
