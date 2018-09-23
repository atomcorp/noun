import React from 'react';
import css from './BasicPage.css';
import Button from '../components/Button/Button';

const BasicPage = () => (
  <section className={css.page}>
    <header className={css.page}>
      <div>Basic page</div>
      <nav>Nav</nav>
    </header>
    <section>
      Body
      <Button />
    </section>
  </section>
);

export default BasicPage;
