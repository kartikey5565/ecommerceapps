import React from "react";
import NavigationBar from "./components/NavigationBar";
import ItemsContainer from "./components/ItemsContainer";
import "./App.css";
import { Button } from "react-bootstrap";
import FooterElement from "./components/Footer/FooterElement";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const merchArr = [
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
];

function App() {
  return (
    <div>
      <NavigationBar />
      <h1
        className="container bg-gray text-center my-2"
        style={{ "font-size": "3.5rem" }}
      >
        The Generics
      </h1>
      <section className="music">
        <div
          className="text-center mx-auto mt-5 mb-2"
          style={{ "font-size": "1.5rem" }}
        >
          MUSIC
        </div>
        <ItemsContainer data={productsArr} />
      </section>

      <section className="merch">
        <div
          className="text-center mx-auto mt-5 mb-2"
          style={{ "font-size": "1.5rem" }}
        >
          
          MERCH
        </div>
        <ItemsContainer data={merchArr} />
      </section>

      <div class="text-center m-4">
        <Button>See The Cart</Button>
      </div>

      <FooterElement/>
    </div>
  );
}
export default App;

