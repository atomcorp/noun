import React from 'react';
import withTooltip from '../../withTooltip';

const Button = () => <button className="button">Hello</button>;

const Details = () => (
  <div>
    {' '}
    WithTooltip
    <br />
    <br />
    <br />
    <br />
    <br />
    More stuff{' '}
  </div>
);

export default withTooltip(Button, Details);
