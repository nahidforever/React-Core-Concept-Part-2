import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
function App() {
  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();
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

      <Suspense fallback={<h2>Loading...</h2>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h2>Friends are Coming...</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Counter></Counter>
      <Batsman></Batsman>

      <Suspense fallback={<h2>Posts are Coming...</h2>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

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
