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
  const [Card2, setCard2] = useState({
    name: null,
    jutsu: null,
    images: [],
    family: {},
  });
  const [Card3, setCard3] = useState({
    name: null,
    jutsu: null,
    images: [],
    family: {},
  });

  function processString() {
    const processedInputName = inputRef.current.value
      .replace(/-/, " ")
      .replace(/[ōŌ]/, "o") // The /[ōŌ]/ means replace any ō and Ō with small letter "o". The slashes is same with " " but general purposes.
      .replace(/[ūŪ]/, "u") // The /[ūŪ]/ means replace any ū and Ū with small letter "U". The slashes is same with " " but general purposes.
      .toLowerCase();

    const processedName = data.filter(
      (character) =>
        character.name
          .replace(/-/, " ")
          .replace(/[ōŌ]/, "o")
          .replace(/[ūŪ]/, "u")
          .toLowerCase() === // The /[ōŌ]/ means replace any ō and Ō with small letter "o".
        processedInputName
    );
    console.log(processedName);
    console.log(processedInputName);
    return processedName; // processedName is a 2 dimensional array where [[character attributes]]
  }

  // This gets the saved state of each card in sessionStorage
  useOnMountUnsafe(() => {
    const card1Data = sessionStorage.getItem("Card1");
    const card2Data = sessionStorage.getItem("Card2");
    const card3Data = sessionStorage.getItem("Card3");
    card1Data === null
      ? setCard1({
          name: null,
          jutsu: null,
          images: [],
          family: {},
        })
      : setCard1(JSON.parse(card1Data));
    card2Data === null
      ? setCard2({
          name: null,
          jutsu: null,
          images: [],
          family: {},
        })
      : setCard2(JSON.parse(card2Data));
    card3Data === null
      ? setCard3({
          name: null,
          jutsu: null,
          images: [],
          family: {},
        })
      : setCard3(JSON.parse(card3Data));
  });
  // This saves the state of each card whenever the cards state changes.
  useEffect(() => {
    // We convert the objects into string version
    const card1String = JSON.stringify(Card1);
    const card2String = JSON.stringify(Card2);
    const card3String = JSON.stringify(Card3);

    // We put the card states in string version whenever the Card1, Card2, and Card3 state changes.
    sessionStorage.setItem("Card1", card1String);
    sessionStorage.setItem("Card2", card2String);
    sessionStorage.setItem("Card3", card3String);
  }, [Card1, Card2, Card3]);

  function handleInputRef() {}

  function handleSetCard1(e) {
    e.preventDefault();
    const character = processString();
    if (character.length === 0) {
      inputRef.current.value = "";
      inputRef.current.placeholder =
        "Please enter correct name (ex. Madara Uchiha, not Uchiha Madara)";
      inputRef.current.style.borderColor = "red";
      alert("Character not found");
    } else {
      inputRef.current.style.borderColor = "green";
      inputRef.current.value = "";
      const [arrayCharacter] = character; // We destructed the 2D array of processedName into 1D array.

      setCard1({
        name: arrayCharacter.name,
        jutsu: arrayCharacter.jutsu,
        images: arrayCharacter.images,
        family: arrayCharacter.family,
      });
    }
  }
  function handleSetCard2() {
    const character = processString();
    if (character.length === 0) {
      inputRef.current.value = "";
      inputRef.current.placeholder =
        "Please enter correct name (ex. Madara Uchiha, not Uchiha Madara)";
      inputRef.current.style.borderColor = "red";
      alert("Character not found");
    } else {
      inputRef.current.style.borderColor = "green";
      inputRef.current.value = "";
      const [arrayCharacter] = character; // We destructed the 2D array of processedName into 1D array.
      setCard2({
        name: arrayCharacter.name,
        jutsu: arrayCharacter.jutsu,
        images: arrayCharacter.images,
        family: arrayCharacter.family,
      });
    }
  }
  function handleSetCard3() {
    const character = processString();
    if (character.length === 0) {
      inputRef.current.value = "";
      inputRef.current.placeholder =
        "Please enter correct name (ex. Madara Uchiha, not Uchiha Madara)";
      inputRef.current.style.borderColor = "red";
      alert("Character not found");
    } else {
      inputRef.current.style.borderColor = "green";
      inputRef.current.value = "";
      const [arrayCharacter] = character; // We destructed the 2D array of processedName into 1D array.
      setCard3({
        name: arrayCharacter.name,
        jutsu: arrayCharacter.jutsu,
        images: arrayCharacter.images,
        family: arrayCharacter.family,
      });
    }
  }

  async function fetchNaruto() {
    try {
      const response = await fetch(
        `https://narutodb.xyz/api/character?page=1&limit=1437`
      ); // This will return an object containing the promise.

      if (!response.ok) {
        throw new Error("Could not fetch resource"); // This will execute when fetching fails.
      }
      console.log("Before json: ", response);
      const characterData = await response.json(); // This will convert the body of the HTTP response from JSON format into a JavaScript object.
      console.log("After json: ", characterData);
      // const characterArrays = characterData.characters.flat();
      const characterArrays = characterData.characters;
      console.log(characterArrays);

      setData(characterArrays);
    } catch (error) {
      console.error(error);
    }
  }

  useOnMountUnsafe(() => {
    console.log(`Passed use effect here!`);
    fetchNaruto();
  });

  return (
    <>
      <Navigation />

      <main className="flex justify-center">
        <div className="min-w-screen ">
          <div className="flex justify-around align-center mt-2">
            {Card1.name === null ? (
              <BlankCard
                textColor={"text-orange-500"}
                shadowColor={"shadow-orange-500"}
                name={"Card 1"}
                images={
                  "https://vignette2.wikia.nocookie.net/naruto/images/1/12/La_Promesa_de_Naruto.png/revision/latest?cb=20110825232746&path-prefix=es"
                }
              />
            ) : (
              <NarutoCard
                textColor={"text-orange-500"}
                shadowColor={"shadow-orange-500"}
                name={Card1.name}
                jutsu={Card1.jutsu}
                images={Card1.images}
                family={[Card1.family]} // The reason why we need to enclose [] so that we will pass an array because we used array methods in NarutoCard.jsx
              />
            )}
            {Card2.name === null ? (
              <BlankCard
                textColor={"text-blue-500"}
                shadowColor={"shadow-blue-700/50"}
                name={"Card 2"}
                images={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFiQE7scaXH89XGF8gl8WUOCPzZhWbtCe4ec0PQ6bDUre8IHCvzkDsqncQh83j3Z5CUgc&usqp=CAU"
                }
              />
            ) : (
              <NarutoCard
                textColor={"text-blue-500"}
                shadowColor={"shadow-blue-700/50"}
                name={Card2.name}
                jutsu={Card2.jutsu}
                images={Card2.images}
                family={[Card2.family]} // The reason why we need to enclose [] so that we will pass an array. Remember that react doesn't want an object component.
              />
            )}
            {Card3.name === null ? (
              <BlankCard
                textColor={"text-pink-500"}
                shadowColor={"shadow-pink-400/90"}
                name={"Card 3"}
                images={"https://i.quotev.com/y3sylpvaaaaa.jpg"}
              />
            ) : (
              <NarutoCard
                textColor={"text-pink-500"}
                shadowColor={"shadow-pink-400/90"}
                name={Card3.name}
                jutsu={Card3.jutsu}
                images={Card3.images}
                family={[Card3.family]} // The reason why we need to enclose [] so that we will pass an array. Remember that react doesn't want an object component.
              />
            )}
          </div>

          <div className="flex justify-center mt-2 ">
            <div className="flex justify-center w-1/2 ">
              <input
                type="text"
                ref={inputRef}
                onChange={handleInputRef}
                placeholder="Enter naruto character using full name (ex. Naruto Uzumaki)"
                className="w-full bg-red-100 border-2 m-5 rounded-md placeholder-gray-400"
              ></input>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-between w-1/3">
              <Button
                text={"Add to card 1"}
                Function={(e) => handleSetCard1(e)}
                styles={"text-amber-300 bg-orange-600 rounded mx-3 mt-2 p-2"}
              />

              <Button
                text={"Add to card 2"}
                Function={handleSetCard2}
                styles={"text-amber-300 bg-blue-600 rounded mx-3 mt-2 p-2 "}
              />

              <Button
                text={"Add to card 3"}
                Function={handleSetCard3}
                styles={"text-amber-300 bg-pink-400 rounded mx-3 mt-2 p-2 "}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default NarutoPage;
