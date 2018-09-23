import React from 'react';
import Button from './components/Button/Button';
import css from './App.css';
const Page = () => (
  <section className={css.page}>
    <header>
      <div>Logo</div>
      <nav>Nav</nav>
    </header>
    <section>Body</section>
    <Button />
  </section>
);

export default Page;
