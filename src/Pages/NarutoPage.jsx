import { useReducer, useState, useRef } from "react";
import Navigation from "../Navigation";
import useOnMountUnsafe from "../useOnMountUnsafe";
import NarutoCard from "../NarutoCard";
import Button from "../Button";

const initialCard = {
  id: "",
  img: "",
  name: "",
  debut: "",
  personal: "",
};

const ACTIONS = {
  SET_CARD1: "set_card1",
  SET_CARD2: "set_card2",
  SET_CARD3: "set_card3",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CARD1:
      return {};
    case ACTIONS.SET_CARD2:
      return {};
    case ACTIONS.SET_CARD3:
      return {};
    default:
      state;
  }
};

function NarutoPage() {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialCard);
  const inputRef = useRef("Enter naruto character name");

  function handleInputRef() {
    console.log(inputRef.current.value);
  }

  async function fetchNaruto() {
    try {
      const response = await fetch(`https://narutodb.xyz/api/character`); // This will return an object containing the data

      if (!response.ok) {
        throw new Error("Could not fetch resource"); // this will execute when fetching fails
      }
      const data = await response.json(); // This will convert the object into JSON format which is an array of objects.

      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useOnMountUnsafe(() => {
    fetchNaruto();
  });

  return (
    <>
      <Navigation />

      <main className="flex justify-center bg-red-500 h-[32.8rem]">
        <div className="m-auto">
          <NarutoCard />
          <div className="flex justify-center">
            <input
              type="text"
              ref={inputRef}
              onChange={handleInputRef}
              placeholder="Enter naruto character name"
              className="align-self-center w-[24rem]"
            ></input>
          </div>

          <Button
            text1="Add to Card 1"
            text2="Add to Card 2"
            text3="Add to Card 3"
            // function1={handleCountAdd}
            // function2={handleCountSubtract}
            // function3={handleCountReset}
          />
        </div>

        <div className=" bg-black"></div>
      </main>
    </>
  );
}

export default NarutoPage;
