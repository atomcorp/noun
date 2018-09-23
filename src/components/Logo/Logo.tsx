import React from 'react';
import {Link} from 'react-router-dom';
import withTooltip from '../../withTooltip';
import logo from './logo.png';

const Logo = () => (
  <Link to="/basic">
    <img src={logo} alt="Noun logo" />
  </Link>
);

const Details = () => <div>A logo</div>;

export default withTooltip(Logo, Details);
