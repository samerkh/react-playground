import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTab, setSelectedTab] = useState();

  function handleClick(tab) {
    setSelectedTab(tab);
  }

  const tabs = ["components", "jsx", "props", "state"];

  let tabContent;
  if (selectedTab) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTab]?.title}</h3>
        <p>{EXAMPLES[selectedTab]?.description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab]?.code}</code>
        </pre>
      </div>
    );
  } else {
    tabContent = <p>Select a tab to see the example code.</p>;
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts {...concept} key={concept.title} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {tabs.map((tab) => (
              <TabButton
                key={tab}
                isSelected={selectedTab === tab}
                onClick={() => handleClick(tab)}
              >
                {tab}
              </TabButton>
            ))}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
