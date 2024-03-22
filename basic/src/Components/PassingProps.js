import { useState } from "react";

// import CompoImg from "./image/components.png";
import componentImg from "../image/components.png";
import jsxImg from "../image/jsx-ui.png";
import jsxUI from "../image/config.png";
import TabButton from "./TabButton";
import Card from "./Card";
// import TabButton1 from "./TabButton";

// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Avatar
//         size={100}
//         person={{
//           name: "Katsuko Saruhashi",
//           imageId: "YfeOqp2",
//         }}
//       />
//       <Avatar
//         size={80}
//         person={{
//           name: "Aklilu Lemma",
//           imageId: "OKS67lh",
//         }}
//       />
//       <Avatar
//         size={50}
//         person={{
//           name: "Lin Lanying",
//           imageId: "1bX5QH6",
//         }}
//       />
//     </div>
//   );
// }

// export function getImageUrl(person, size = "s") {
//   return "https://i.imgur.com/" + person.imageId + size + ".jpg";
// }
/// Self///////////////////////////////////////////////
// function Emp({ emp, size }) {
//   return (
//     <img
//       className="employee"
//       src={getImageUrl1(emp)}
//       alt={emp.name}
//       width={size}
//       height={size}
//     />
//   );
// }
// export default function Employee() {
//   return (
//     <>
//       <Emp
//         size={100}
//         emp={{
//           name: "gallery",
//           imageId: "ecLxulB",
//         }}
//       />
//     </>
//   );
// }
// export function getImageUrl1(emp, size = "s") {
//   return "https://imgur.com/" + emp.imageId + size + ".jpeg";
// }
//////////Max///////////////////////////////
export default function Core() {
  // function handleSelect() {
  //   console.log("Hello------ Select");
  // }
  // function handleSelect(selectedButton) {
  //   // selectedButton =>Component,JSX button2, React button3
  //   console.log(selectedButton);
  //  }
  let tabContent = "please click button";
  const [selectedTopic, setSelectedTopic] = useState("please click button");
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic, "selectedtopic");
    // console.log(tabContent, "tabcontent");
  }
  // console.log("App Component Executing");
  return (
    <>
      <main>
        <h2>Core Concepts11111111111</h2>
        <div id="core">
          <div id="coresec">
            {Core_Concepts.map((conceptItem) => (
              <CoreConcepts {...conceptItem} />
            ))}
            <CoreConcepts
              title={Core_Concepts[0].title}
              desc={Core_Concepts[0].desc}
              image={Core_Concepts[0].image}
            />
          </div>
          <div id="coresec">
            {/* <CoreConcepts
                title={Core_Concepts[1].title}
                desc={Core_Concepts[1].desc}
                image={Core_Concepts[1].image}
                />*/}

            {/* Spread operator */}
            <CoreConcepts {...Core_Concepts[1]} />
          </div>
          <div id="coresec">
            {/* <CoreConcepts
              title={Core_Concepts[2].title}
              desc={Core_Concepts[2].desc}
              image={Core_Concepts[2].image}
              />  */}
            <CoreConcepts {...Core_Concepts[2]} />
          </div>
        </div>
      </main>
      <section id="coreconcepts">
        <h2>Core Concepts</h2>
        <ul>
          {Core_Concepts.map((conceptItem) => (
            <CoreConcepts key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </section>
      console.log("test");
      <section class="anotherComp">
        Another function
        <CourseGoal tit="UDEMY" des="Learing..." />
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <p>Html buttons</p>
          <button>Button1</button>
          <button>Button1</button>
          <button>Button1</button>
          <hr></hr>
          <p>Custom tab buttons</p>
          <TabButton onSelect={() => handleSelect("Component")}>
            Component{" "}
          </TabButton>
          <TabButton onSelect={() => handleSelect("JSX button2")}>
            JSX button2{" "}
          </TabButton>
          <TabButton onSelect={() => handleSelect("React button3")}>
            React button3{" "}
          </TabButton>
          {/* <TabButton1 label="ComponetLabel Button1" />
          <TabButton1 label="ComponetLabel Button12" /> */}
        </menu>
        {/* Dynamic Content */}
        {selectedTopic}
        <hr></hr>
      </section>
      {/* card */}
      <section>
        <div className="maincard">
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}

// function CoreConcepts(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.desc}</p>
//     </li>
//   );
// }

//Destructuring//////////////////////////
function CoreConcepts({ title, desc, image }) {
  return (
    <>
      <li>
        <img src={image} />
        <h3>{title}</h3>
        <p>{desc}</p>
      </li>
      <h2>Tag in function component</h2>
    </>
  );
}
export const Core_Concepts = [
  {
    image: componentImg,
    title: "Components",
    desc: "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxImg,
    title: "JSX",
    desc: "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: jsxUI,
    title: "React",
    desc: "Make components configurable (and therefore reusable) by passing input data to them",
  },
];
///////////////////////////
function CourseGoal({ tit, des }) {
  return (
    <>
      <h2>{tit}</h2>
      <p>{des}</p>
    </>
  );
}
