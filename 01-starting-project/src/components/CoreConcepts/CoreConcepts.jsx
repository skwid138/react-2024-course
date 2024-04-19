import { CORE_CONCEPTS } from '../../data.js';
import Section from '../Section.jsx';
import { CoreConcept } from '../CoreConcept/CoreConcept.jsx';
import './CoreConcepts.css';

export default function CoreConcepts(props) {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptObj) => (
          <CoreConcept key={conceptObj.title} {...conceptObj} />
        ))}
      </ul>
    </Section>
  );
}
