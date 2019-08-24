import React from 'react';
import './styles.scss';
import darius from '../../images/dar.png';
import ernest from '../../images/ern.png';

const MusuKomanda = () => {
  return (
    <React.Fragment>
      <div className="Komanda_row">
        <div className="Komanda_row_pic_container">
          <div className="Komanda_row_pic">
            <img alt="" src={darius} className="Komanda_row_pic_image" />
          </div>
        </div>
        <div className="Komanda_row_text_container">
          <h3 className="Komanda_row_name">Darius</h3>
          <div className="Komanda_row_text">
            <p>
              Hexagon twee banjo, yr trust fund slow-carb enamel pin raclette readymade migas banh mi everyday carry
              tumblr vaporware. Taxidermy squid truffaut, before they sold out bitters paleo vice leggings chambray
              lumbersexual. Schlitz brunch hammock banjo bitters. Sartorial tumeric put a bird on it bushwick slow-carb
              farm-to-table, shabby chic poke.
            </p>
          </div>
        </div>
      </div>
      <div className="Komanda_row  ReverseOnPhone">
        <div className="Komanda_row_text_container">
          <h3 className="Komanda_row_name">Ernest</h3>
          <div className="Komanda_row_text">
            <p>
              Hexagon twee banjo, yr trust fund slow-carb enamel pin raclette readymade migas banh mi everyday carry
              tumblr vaporware. Taxidermy squid truffaut, before they sold out bitters paleo vice leggings chambray
              lumbersexual. Schlitz brunch hammock banjo bitters. Sartorial tumeric put a bird on it bushwick slow-carb
              farm-to-table, shabby chic poke.
            </p>
          </div>
        </div>
        <div className="Komanda_row_pic_container">
          <div className="Komanda_row_pic">
            <img alt="" src={ernest} className="Komanda_row_pic_image" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MusuKomanda;
