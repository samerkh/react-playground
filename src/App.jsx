import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [tabContent, setTabContent] = useState();

  function handleClick(selectedButton) {
    setTabContent(selectedButton);
  }

  let content;
  if (tabContent) {
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent]?.title}</h3>
        <p>{EXAMPLES[tabContent]?.description}</p>
        <pre>
          <code>{EXAMPLES[tabContent]?.code}</code>
        </pre>
      </div>
    );
  } else {
    content = <p>Select a tab to see the example code.</p>;
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          {content}
        </section>
      </main>
    </div>
  );
}

export default App;
