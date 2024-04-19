// All React functions that have a 'use' preface are called hooks
import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import { CoreConcept, CoreConceptDestructure } from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  // This always takes 2 values (the names are arbitrary)
  // The first value is the current state obj and the later is a function to update the state object
  const [selectedTopic, setSelectedTopic] = useState(); // This must only be called inside of component functions and at the top level

  function selectHandler(topicId) {
    setSelectedTopic(topicId)
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => selectHandler('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => selectHandler('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => selectHandler('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => selectHandler('state')}>State</TabButton>
          </menu>

          {!selectedTopic && <p>Please select an example.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}

        </section>
      </main>
    </>
  );
}

export default App;
