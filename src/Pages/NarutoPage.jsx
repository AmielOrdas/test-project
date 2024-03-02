import { useState, useRef, useEffect } from "react";
import Navigation from "../Navigation";
import useOnMountUnsafe from "../useOnMountUnsafe";
import NarutoCard from "../NarutoCard";
import Button from "../Button";
import BlankCard from "../BlankCard";

function NarutoPage() {
  const [data, setData] = useState([]);
  const inputRef = useRef("");
  const [Card1, setCard1] = useState({
    name: null,
    jutsu: null,
    images: [],
    family: {},
  });
  const [Card2, setCard2] = useState(null);
  const [Card3, setCard3] = useState(null);

  function processString() {
    const processedInputName = inputRef.current.value
      .replace(/-/, " ")
      .replace(/[ōŌ]/, "o") // The /[ōŌ]/ means replace any ō and Ō with small letter "o". The slashes is same with " " but general purposes.
      .toLowerCase();

    const processedName = data.filter(
      (character) =>
        character.name.replace(/-/, " ").replace(/[ōŌ]/, "o").toLowerCase() === // The /[ōŌ]/ means replace any ō and Ō with small letter "o".
        processedInputName
    );

    return processedName; // processedName is a 2 dimensional array where [[character attributes]]
  }

  function handleInputRef() {
    const processedInput = inputRef.current.value
      .replace(/-/, " ")
      .replace(/[ōŌ]/, "o") // The /[ōŌ]/ means replace any ō and Ō with small letter "o". The slashes is same with " " but general purposes.
      .replace(/[ūŪ]/, "u")
      .toLowerCase();
  }

  function handleSetCard1() {
    const character = processString();

    const [arrayCharacter] = character; // We destructed the 2D array of processedName into 1D array.

    setCard1({
      name: arrayCharacter.name,
      jutsu: arrayCharacter.jutsu,
      images: arrayCharacter.images,
      family: arrayCharacter.family,
    });

    console.log(Card1);
  }
  function handleSetCard2() {
    const character = processString();

    setCard2((prevCard) => (prevCard = character));
  }
  function handleSetCard3() {
    const character = processString();

    console.log(character);
    setCard3((prevCard) => (prevCard = character));
  }

  async function fetchNaruto() {
    try {
      const response = await fetch(
        `https://narutodb.xyz/api/character?page=1&limit=1437`
      ); // This will return an object containing the promise.

      if (!response.ok) {
        throw new Error("Could not fetch resource"); // This will execute when fetching fails.
      }
      const characterData = await response.json(); // This will convert the object into JSON format which is an array of objects.
      console.log(characterData);
      const characterArrays = characterData.characters.flat();

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

      <main className="flex justify-center h-[32.8rem]">
        <div className="m-auto w-[50rem] bg-orange-500 ">
          <div className="flex justify-around content-center m-auto">
            {Card1.name === null ? (
              <BlankCard
                name={"Card 1"}
                images={
                  "https://vignette2.wikia.nocookie.net/naruto/images/1/12/La_Promesa_de_Naruto.png/revision/latest?cb=20110825232746&path-prefix=es"
                }
              />
            ) : (
              <NarutoCard
                name={Card1.name}
                jutsu={Card1.jutsu}
                images={Card1.images}
                family={[Card1.family]} // The reason why we need to enclose [] so that we will pass an array. Remember that react doesnt want an object component.
              />
            )}
            {Card1.name === null ? (
              <BlankCard
                name={"Card 2"}
                images={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFiQE7scaXH89XGF8gl8WUOCPzZhWbtCe4ec0PQ6bDUre8IHCvzkDsqncQh83j3Z5CUgc&usqp=CAU"
                }
              />
            ) : (
              <NarutoCard
                name={Card1.name}
                jutsu={Card1.jutsu}
                images={Card1.images}
                family={[Card1.family]} // The reason why we need to enclose [] so that we will pass an array. Remember that react doesnt want an object component.
              />
            )}
            {Card1.name === null ? (
              <BlankCard
                name={"Card 3"}
                images={"https://i.quotev.com/y3sylpvaaaaa.jpg"}
              />
            ) : (
              <NarutoCard
                name={Card1.name}
                jutsu={Card1.jutsu}
                images={Card1.images}
                family={[Card1.family]} // The reason why we need to enclose [] so that we will pass an array. Remember that react doesnt want an object component.
              />
            )}
          </div>

          <div className="flex justify-center content-center mt-2">
            <input
              type="text"
              ref={inputRef}
              onChange={handleInputRef}
              placeholder="Enter naruto character full name (ex. Naruto Uzumaki)"
              className="align-self-center w-1/2 bg-orange-200"
            ></input>
          </div>
          <div className="flex justify-center content-center">
            <div className="flex justify-between w-1/2 bg-red-600">
              <Button
                text={"Add to card 1"}
                Function={handleSetCard1}
                styles={"text-amber-300 bg-orange-600 rounded mt-2 p-2"}
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
        </div>
      </main>
    </>
  );
}

export default NarutoPage;
