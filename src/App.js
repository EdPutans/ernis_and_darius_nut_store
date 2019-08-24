import React from 'react';
import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen';
import Section from './Components/Section/Section';
import MusuProduktas from './Components/musu_produktas/MusuProduktas';
import MusuIstorija from './Components/musu_istorija/MusuIstorija';
import FullWidthSpacer from './Components/FullWidthSpacer/FullWidthSpacer';
import MusuKomanda from './Components/musu_komanda/MusuKomanda';
import Uzsakyti from './Components/uzsakyti/Uzsakyti';
import { linksAndRefs } from './constants';
import Kontaktuot from './Components/Kontaktuot/Kontaktuot';
import Footer from './Components/Footer/Footer';
import Topbar from './Components/Topbar/Topbar';

function App() {
  return (
    <React.Fragment>
      <WelcomeScreen />
      <Topbar />
      <Section title="Musu produktas" link={linksAndRefs.produktas.scrollHere}>
        <MusuProduktas />
      </Section>
      <Section title="Musu istorija" link={linksAndRefs.istorija.scrollHere}>
        <MusuIstorija />
      </Section>
      <FullWidthSpacer />
      <Section title="Musu komanda" link={linksAndRefs.komanda.scrollHere}>
        <MusuKomanda />
      </Section>
      <Section title="Uzsakyti" link={linksAndRefs.uzsakyti.scrollHere}>
        <Uzsakyti />
      </Section>
      <Section link={linksAndRefs.kontaktai.scrollHere}>
        <Kontaktuot />
      </Section>
      <Footer />
    </React.Fragment>
  );
}

export default App;
