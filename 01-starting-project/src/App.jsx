import Header from './components/Header/Header.jsx';
import Section from './components/Section.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Examples from './components/Examples/Examples.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Section title="Time to get started!">
        <CoreConcepts />
        <Examples />
        </Section>  
      </main>
    </>
  );
}

export default App;
