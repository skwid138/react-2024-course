// All React functions that have a 'use' preface are called hooks
import { useState } from 'react';
import { EXAMPLES } from '../../data.js';
import Section from '../Section.jsx';
import Tabs from '../Tabs.jsx';
import TabButton from '../TabButton.jsx';
import './Examples.css';

export default function Examples(props) {
  // This always takes 2 values (the names are arbitrary)
  // The first value is the current state obj and the later is a function to update the state object
  const [selectedTopic, setSelectedTopic] = useState(); // This must only be called inside of component functions and at the top level

  function selectHandler(topicId) {
    setSelectedTopic(topicId)
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttonContainer='menu'
        buttons={
          <>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => selectHandler('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => selectHandler('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => selectHandler('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => selectHandler('state')}>State</TabButton>
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
}
