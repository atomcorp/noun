import React from 'react';
import withTooltip from '../../withTooltip';

const Header = ({style, children}) => (
  <header className={style}>{children}</header>
);

const Details = () => (
  <div>
    Header. <p>Typically holds the site name and some navigation</p>
  </div>
);

export default withTooltip(Header, Details);
