import React from 'react';
import './styles.scss';
import logo from '../../images/logo.png';
import InstagramLogo from '../../images/instagram-logo';
import FacebookLogo from '../../images/facebook-logo';
import links, { linksAndRefs } from '../../constants';
import DownArrow from '../../images/down-arrow (1)';

const WelcomeScreen = () => {
  const renderLinks = () => (
    <div className="WelcomeScreen_column_link_container">
      {Object.keys(linksAndRefs).map(link => (
        <div className="WelcomeScreen_column_link_holder">
          <a className="WelcomeScreen_column_link" href={linksAndRefs[link].link}>
            {linksAndRefs[link].name}
          </a>
        </div>
      ))}
    </div>
  );

  const renderSocialLinks = () => {
    return (
      <div className="WelcomeScreen_socialLinks">
        <a target="_blank" rel="noopener noreferrer" href={links.instagram}>
          <InstagramLogo size="50px" fill="white" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={links.facebook}>
          <FacebookLogo size="50px" fill="white" />
        </a>
      </div>
    );
  };

  return (
    <div className="WelcomeScreen">
      <div className="WelcomeScreen_image">
        {renderSocialLinks()}
        <div className="WelcomeScreen_downArrow" onClick={() => window.scrollTo(0, window.innerHeight)}>
          <DownArrow fill="white" width="50px" />
        </div>
        <div className="WelcomeScreen_overlay" />
      </div>
      <div className="WelcomeScreen_contentContainer">
        <div className="WelcomeScreen_column_container">
          <div style={{ flex: 1 }} className="WelcomeScreen_column HideOnPhone">
            {renderLinks()}
          </div>
          <div style={{ flex: 4 }} className="WelcomeScreen_column">
            <div className="WelcomeScreen_column_rightStuff">
              <div className="WelcomeScreen_column_title_container">
                <img src={logo} className="WelcomeScreen_column_title_logo" />
                <p className="WelcomeScreen_column_title_big">Riesutai voverems</p>
              </div>
              <p className="WelcomeScreen_column_title">Gardus proteinu papildytas maistas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
