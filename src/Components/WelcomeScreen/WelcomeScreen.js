import React from 'react';
import './styles.scss';
import logo from '../../images/logo.png';

const WelcomeScreen = () => {
  const renderLinks = () => (
    // <div className="WelcomeScreen_column_link_container">
    <React.Fragment>
      <div className="WelcomeScreen_column_link_container">
        <a className="WelcomeScreen_column_link" href="">
          Produktas
        </a>
        <a className="WelcomeScreen_column_link" href="">
          Istorija
        </a>
        <a className="WelcomeScreen_column_link" href="">
          Komanda
        </a>
        <a className="WelcomeScreen_column_link" href="">
          Uzsakyti
        </a>
        <a className="WelcomeScreen_column_link" href="">
          Kontaktai
        </a>
      </div>
    </React.Fragment>
  );

  return (
    <div className="WelcomeScreen">
      <div className="WelcomeScreen_image" />
      <div className="WelcomeScreen_overlay" />
      <div className="WelcomeScreen_contentContainer">
        <div className="WelcomeScreen_column_container">
          <div className="WelcomeScreen_column" style={{ flex: 1 }}>
            {renderLinks()}
          </div>
          <div className="WelcomeScreen_column" style={{ flex: 2 }}>
            <div className="WelcomeScreen_column_rightStuff">
              <div style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
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
