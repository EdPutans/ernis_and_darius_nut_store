import React from 'react';
import './styles.scss';

const FullWidthSpacer = () => {
  return (
    <div className="FullWidthSpacer" style={{ height: '300px' }}>
      <div className="FullWidthSpacer_picture">
        <div className="FullWidthSpacer_cover" />
      </div>
      <div className="FullWidthSpacer_picture">
        <div className="FullWidthSpacer_cover" />
      </div>
      <div className="FullWidthSpacer_picture">
        <div className="FullWidthSpacer_cover" />
      </div>
    </div>
  );
};

export default FullWidthSpacer;
