import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";

function App() {
  // function handleClick() {
  //   alert("Button Clicked");
  // }

  // const handleClick2 = () => {
  //   alert("Button Clicked 2");
  // };

  // const handleClick4 = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum);
  // };

  return (
    <>
      <h2>React Core Concept Part 2</h2>

      <Counter></Counter>

      <Batsman></Batsman>

      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button
        onClick={function handleClick3() {
          alert("Button Clicked 3");
        }}
      >
        Click Me 3
      </button>
      <button onClick={() => handleClick4(5)}>Click Me 4</button>

      <button onClick={() => alert("Button Clicked 5")}>Click me 5</button> */}
    </>
  );
}

export default App;
