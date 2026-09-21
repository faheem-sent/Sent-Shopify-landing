import { useState } from 'react';
import { aiEdits, defaultNicheId, defaultStyleId, niches, styles } from './data';
import { useIsPhone } from './hooks';
import { BuiltIn } from './components/BuiltIn';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { KeepTalking } from './components/KeepTalking';
import { MovingOver } from './components/MovingOver';
import { Nav } from './components/Nav';
import { WhySwitch } from './components/WhySwitch';

export default function App() {
  const [nicheId, setNicheId] = useState(defaultNicheId);
  const [styleId, setStyleId] = useState(defaultStyleId);
  const [editId, setEditId] = useState<string | null>(null);
  const isPhone = useIsPhone();

  const niche = niches.find((item) => item.id === nicheId) ?? niches[0]!;
  const style = styles.find((item) => item.id === styleId) ?? styles[0]!;
  const edit = aiEdits.find((item) => item.id === editId) ?? null;

  return (
    <>
      <div id="top" />
      <Nav />
      <main>
        <Hero
          niche={niche}
          style={style}
          onNicheChange={setNicheId}
          onStyleChange={setStyleId}
          isPhone={isPhone}
        />
        <WhySwitch />
        <MovingOver />
        <KeepTalking
          niche={niche}
          style={style}
          edit={edit}
          // Clicking the selected chip clears it (§8.5).
          onEditToggle={(id) => setEditId((current) => (current === id ? null : id))}
          isPhone={isPhone}
        />
        <BuiltIn />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
