import React from 'react';
import './styles.scss';
import logo from '../../images/logo.png';
import { linksAndRefs } from '../../constants';

const Topbar = () => {
  return (
    <div className="Topbar">
      <div className="Topbar_logo">
        <img src={logo} />
      </div>
      <div className="Topbar_links">
        {Object.keys(linksAndRefs).map(link => (
          <a className="Topbar_links_link" href={linksAndRefs[link].link}>
            {linksAndRefs[link].name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
