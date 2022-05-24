import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "James",
//       animal: "Dog",
//       breed: "Shiba",
//     }),
//     React.createElement(Pet, {
//       name: "Riri",
//       animal: "Dog",
//       breed: "Cavapoo",
//     }),
//   ]);
// };

// render(React.createElement(App), document.getElementById("root"));
