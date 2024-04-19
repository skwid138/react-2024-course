
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import { CoreConcept } from './components/CoreConcept/CoreConcept.jsx';
import Examples from './components/Examples/Examples.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptObj) => (
              <CoreConcept key={conceptObj.title} {...conceptObj} />
            ))}
          </ul>
        </section>
        <Examples />
      </main>
    </>
  );
}

export default App;
