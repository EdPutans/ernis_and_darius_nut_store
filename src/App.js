import React from 'react';
import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen';
import Section from './Components/Section/Section';
import MusuProduktas from './Components/musu_produktas/MusuProduktas';
import MusuIstorija from './Components/musu_istorija/MusuIstorija';
import FullWidthSpacer from './Components/FullWidthSpacer/FullWidthSpacer';
import MusuKomanda from './Components/musu_komanda/MusuKomanda';

function App() {
  return (
    <React.Fragment>
      <WelcomeScreen />
      {/* <div style={{ maxWidth: '700px' }}> */}
      <Section title="Musu produktas">
        <MusuProduktas />
      </Section>
      <Section title="Musu istorija">
        <MusuIstorija />
      </Section>
      <FullWidthSpacer />
      <Section title="Musu komanda">
        <MusuKomanda />
      </Section>
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
