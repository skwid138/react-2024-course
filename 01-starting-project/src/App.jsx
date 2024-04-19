// All React functions that have a 'use' preface are called hooks
import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import { CoreConcept, CoreConceptDestructure } from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  // This always takes 2 values (the names are arbitrary)
  // The first value is the current state obj and the later is a function to update the state object
  const [ selectedTopic, setSelectedTopic ] = useState('Please select an example.'); // This must only be called inside of component functions and at the top level

  function selectHandler(topicId) {
    setSelectedTopic(topicId)
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConceptDestructure {...CORE_CONCEPTS[2]} />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => selectHandler('components')}>Components</TabButton>
            <TabButton onSelect={() => selectHandler('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => selectHandler('props')}>Props</TabButton>
            <TabButton onSelect={() => selectHandler('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic] ? EXAMPLES[selectedTopic].title : selectedTopic}</h3>
            <p>{EXAMPLES[selectedTopic] ? EXAMPLES[selectedTopic].description : ''}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic] ? EXAMPLES[selectedTopic].code : ''}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
