import React from 'react';
import css from './BasicPage.css';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';

const BasicPage = () => (
  <section className={css.page}>
    <header className={css.header}>
      <div>
        <Logo />
      </div>
      <nav>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </nav>
    </header>
    <section className={css.main}>
      <h1>Content / Main</h1>
      <article>
        <header>Headline</header>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed corporis
          eius ratione laboriosam minima dolor nam quam eveniet hic excepturi
          vel alias, repellendus laborum enim sit eligendi, ex blanditiis
          accusantium!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          itaque labore dolor consequatur non fugit maxime minima fuga autem
          quidem iure hic, voluptate deleniti necessitatibus qui blanditiis
          minus quos praesentium.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nesciunt
          corporis, consectetur sequi eligendi quos deserunt voluptatum amet nam
          vel distinctio aliquid dolorum incidunt! Culpa voluptates aut unde
          quasi. Aperiam?
        </p>
      </article>
      <Button />
    </section>
    <section className={css.sidebar}>
      <header>Sidebar</header>
      <nav>Links</nav>
    </section>
    <footer className={css.footer}>Footer</footer>
  </section>
);

export default BasicPage;
