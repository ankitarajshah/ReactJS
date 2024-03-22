import { useState } from "react";
import { EXAMPLES } from "./Data";
import TabButton from "./TabButton";

export default function UseStateEx() {
  // function handleSelect() {
  //   console.log("Hello------ Select");
  // }
  // function handleSelect(selectedButton) {
  //   // selectedButton =>Component,JSX button2, React button3
  //   console.log(selectedButton);
  //  }
  const [selectedTopic, setSelectedTopic] = useState("components");
  let tabContent = "please click button";

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic, "selectedtopic");
    // console.log(tabContent, "tabcontent");
  }
  console.log("App Component Executing");
  if (selectedTopic) {
    tabContent = (
      <div id="tabContent">
        <img src={EXAMPLES[selectedTopic].image} alt="Example" />
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <p>{EXAMPLES[selectedTopic].code}</p>
      </div>
    );
  }

  return (
    <>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <p>Html buttons</p>
          <button>Button1</button>
          <button>Button1</button>
          <button>Button1</button>
          <hr></hr>
          <p>Custom tab buttons</p>
          <TabButton
            isSelected={selectedTopic === "components"}
            onSelect={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onSelect={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onSelect={() => handleSelect("props")}
          >
            props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onSelect={() => handleSelect("state")}
          >
            state
          </TabButton>
          {/* <TabButton1 label="ComponetLabel Button1" />
          <TabButton1 label="ComponetLabel Button12" /> */}
        </menu>
        {/* Dynamic Content */}
        {/* {selectedTopic} */}
        {/* <div id="tabContent">
          <img src={EXAMPLES[selectedTopic].image} alt="Example" />
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <p>{EXAMPLES[selectedTopic].code}</p>
        </div> */}
        {tabContent}
        <hr></hr>
      </section>
    </>
  );
}
