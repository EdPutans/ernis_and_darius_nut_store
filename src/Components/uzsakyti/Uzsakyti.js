import React from 'react';
import './styles.scss';
import envelope from '../../images/envel.png';
import phone from '../../images/phone.png';
import insta from '../../images/insta.png';
import facebook from '../../images/facebook.png';
import links from '../../constants';

const Uzsakyti = () => {
  return (
    <React.Fragment>
      <p>
        Hexagon twee banjo, yr trust fund slow-carb enamel pin raclette readymade migas banh mi everyday carry tumblr
        vaporware. Taxidermy squid truffaut, before they sold out bitters paleo vice leggings chambray lumbersexual.
        Schlitz brunch hammock banjo bitters. Sartorial tumeric put a bird on it bushwick slow-carb farm
      </p>
      <div className="Uzsakyti_contactInfo">
        <div className="Uzsakyti_contactInfo_entry">
          <img className="Uzsakyti_contactInfo_entry_image" src={phone} />
          <a style={{ textDecoration: 'none' }} href={`tel:${links.phone}`}>
            <div className="Uzsakyti_contactInfo_entry_text">
              <p>{links.phone}</p>
            </div>
          </a>
        </div>
        <div className="Uzsakyti_contactInfo_entry">
          <img className="Uzsakyti_contactInfo_entry_image" src={envelope} />
          <div className="Uzsakyti_contactInfo_entry_text">
            <a style={{ textDecoration: 'none' }} href={`mailto:${links.email}?Subject=Hello%20again`}>
              <p>{links.email}</p>
            </a>
          </div>
        </div>
        <div className="Uzsakyti_contactInfo_entry">
          <img className="Uzsakyti_contactInfo_entry_image" src={facebook} />
          <div className="Uzsakyti_contactInfo_entry_text">
            <p>
              <a style={{ textDecoration: 'none' }} rel="noopener noreferrer" target="_blank" href={links.facebook}>
                fb.com/riesutai
              </a>
            </p>
          </div>
        </div>
        <div className="Uzsakyti_contactInfo_entry">
          <img className="Uzsakyti_contactInfo_entry_image" src={insta} />
          <div className="Uzsakyti_contactInfo_entry_text">
            <a style={{ textDecoration: 'none' }} rel="noopener noreferrer" target="_blank" href={links.instagram}>
              <p>@riesutai</p>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Uzsakyti;
