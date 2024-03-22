// import { useState } from "react";
// import TabButton from "./TabButton";

// export default function UseStateTask() {
//   const [isDeleting, setIsDeleting] = useState(0);
//   let warning;
//   function handleSelect(selectedButton) {
//     setIsDeleting(selectedButton);
//   }
//   function deleteHandler() {
//     setIsDeleting(true);
//   }

//   function proceedHandler() {
//     setIsDeleting(false);
//   }
//   if (isDeleting) {
//     warning = (
//       <div data-testid="alert" id="alert">
//         <h2>Are you sure?</h2>
//         <p>These changes can't be reverted!</p>
//         <TabButton onSelect={() => handleSelect(proceedHandler)}>
//           Proceed
//         </TabButton>
//       </div>
//     );
//   }

//   return (
//     <>
//       <h1>Hello</h1>

//       <TabButton onSelect={() => handleSelect(deleteHandler)}>Delete</TabButton>
//       {warning}
//     </>
//   );
// }
// import React from "react";

// // don't change the Component name "App"
// export default function App() {
//   const [isDeleting, setIsDeleting] = React.useState(false);

//   function deleteHandler() {
//     setIsDeleting(true);
//   }

//   function proceedHandler() {
//     setIsDeleting(false);
//   }

//   let warning;

//   if (isDeleting) {
//     warning = (
//       <div data-testid="alert" id="alert">
//         <h2>Are you sure?</h2>
//         <p>These changes can't be reverted!</p>
//         <button onClick={proceedHandler}>Proceed</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {warning}
//       <button onClick={deleteHandler}>Delete</button>
//     </div>
//   );
// }
import React from "react";

// don't change the Component name "App"
export default function App() {
  const [highlighted, setHighlighted] = React.useState(false);

  function handleClick() {
    setHighlighted((isHighlighted) => !isHighlighted);
  }

  return (
    <div>
      <p className={highlighted ? "active" : undefined}>Style me!</p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
}
