import React from 'react';
import './styles.scss';

const Section = ({ children, title, link }) => {
  return (
    <React.Fragment>
      <div style={{ height: '50px' }} id={link}></div>
      <div className="Section">
        <h1 className="Section_title">{title}</h1>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Section;
