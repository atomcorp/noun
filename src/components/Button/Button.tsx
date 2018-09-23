import React from 'react';
import withTooltip from '../../withTooltip';

export const Button = () => <button className="button">Hello</button>;

export const Details = () => (
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
