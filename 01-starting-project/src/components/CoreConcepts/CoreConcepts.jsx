import { CORE_CONCEPTS } from '../../data.js';
import { CoreConcept } from '../CoreConcept/CoreConcept.jsx';
import './CoreConcepts.css';

export default function CoreConcepts(props) {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptObj) => (
          <CoreConcept key={conceptObj.title} {...conceptObj} />
        ))}
      </ul>
    </section>
  );
}
