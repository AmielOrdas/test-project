import { useReducer, useState, useRef } from "react";
import Navigation from "../Navigation";
import useOnMountUnsafe from "../useOnMountUnsafe";
import NarutoCard from "../NarutoCard";
import Button from "../Button";

function NarutoPage() {
  const [data, setData] = useState([]);
  const inputRef = useRef("Enter naruto character name");

  function processString() {
    const inputName = inputRef.current.value
      .replace(/-/, " ")
      .replace(/[ōŌ]/, "o") // The /[ōŌ]/ means replace any ō and Ō with small letter "o". The slashes is same with " " but general purposes.
      .toLowerCase();

    const processedName = data.filter(
      (character) =>
        character.name.replace(/-/, " ").replace(/[ōŌ]/, "o").toLowerCase() === // The /[ōŌ]/ means replace any ō and Ō with small letter "o".
        inputName
    );

    return processedName;
  }

  function handleInputRef() {
    const processedInput = inputRef.current.value
      .replace(/-/, " ")
      .replace(/[ōŌ]/, "o") // The /[ōŌ]/ means replace any ō and Ō with small letter "o". The slashes is same with " " but general purposes.
      .toLowerCase();

    // console.log(processedInput);
  }
  function handleSetCard1() {
    const character = processString();
    if (character.length === 0) {
      console.log(character);
    } else {
      console.log(character);
    }
  }
  function handleSetCard2() {
    const character = processString();
  }
  function handleSetCard3() {
    const character = processString();
  }

  async function fetchNaruto() {
    try {
      const response = await fetch(
        `https://narutodb.xyz/api/character?page=1&limit=1431`
      ); // This will return an object containing the promise.

      if (!response.ok) {
        throw new Error("Could not fetch resource"); // This will execute when fetching fails.
      }
      const data = await response.json(); // This will convert the object into JSON format which is an array of objects.
      console.log(data);
      const characterArrays = data.characters.flat();

      setData(characterArrays);
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
        <div className="m-auto ">
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
          <div className="flex justify-between">
            <Button
              text={"Add to card 1"}
              Function={handleSetCard1}
              styles={"text-amber-300 bg-orange-600 rounded mt-2 p-2 "}
            />
            <Button
              text={"Add to card 2"}
              Function={handleSetCard2}
              styles={"text-amber-300 bg-blue-600 rounded mt-2 p-2 "}
            />
            <Button
              text={"Add to card 3"}
              Function={handleSetCard3}
              styles={"text-amber-300 bg-pink-400 rounded mt-2 p-2 "}
            />
          </div>
        </div>

        <div className=" bg-black"></div>
      </main>
    </>
  );
}

export default NarutoPage;
