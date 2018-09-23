import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
  <section>
    <h1>Home</h1>
    <section>
      <h3>Links</h3>
      <ol>
        <li>
          <Link to="/basic">Basic</Link>
        </li>
      </ol>
    </section>
  </section>
);

export default Home;
