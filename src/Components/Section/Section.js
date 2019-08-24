import React from 'react';
import './styles.scss';

const Section = ({ children, title }) => {
  return (
    <React.Fragment>
      <div className="Section">
        <h1 className="Section_title">{title}</h1>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Section;
