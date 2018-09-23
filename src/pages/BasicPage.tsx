import React from 'react';
import css from './BasicPage.css';

const BasicPage = () => (
  <section className={css.page}>
    <header className={css.page}>
      <div>Logo</div>
      <nav>Nav</nav>
    </header>
    <section>Body</section>
  </section>
);
