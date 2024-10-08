//
//

function NarutoCard({ textColor, shadowColor, name, jutsu = [], images = [], family }) {
  console.log(typeof family[0] === "undefined" && family.splice(0, 1)); // If family[0] is undefined then family.splice(0,1) is executed

  function getFirstThree(array) {
    const firstThree = array.slice(0, 3); // Get the first three family members inside the "membersArray"
    console.log("FirstThree", firstThree);
    // Loop through the threeMembers array then convert each member into strings for visual purposes
    return firstThree.map(
      (value, index) =>
        index === firstThree.length - 1 // If the index is equal to the length, this means we are at the end of the array.
          ? ` ${String(value)}, etc.` // If we are in the end of the array then do not put comma ","
          : ` ${String(value)},` // If we are not in the end of the array then put comma.
    );
  }

  function getAllElements(array) {
    console.log("Array", array);
    return array.map(
      (value, index) =>
        index === array.length - 1 // If the index is equal to the length, this means we are at the end of the array.
          ? ` ${String(value)}` // If we are in the end of the array then do not put comma ","
          : ` ${String(value)},` // If we are not in the end of the array then put comma.
    );
  }

  return (
    <div
      className={`flex flex-col items-center text-justify  w-1/3 mx-3 p-5 mt-2 border-2 rounded-xl shadow-2xl ${shadowColor}`}
    >
      <img className="size-[8rem] rounded-full " src={images[0]} />

      <h2
        className={` font-serif font-bold text-2xl ${textColor} my-[0.5em] mmd:text-lg`}
      >
        {name}
      </h2>

      <p className="self-start font-serif msm:text-sm">
        <span className="font-bold inline"> Jutsu: </span>

        {jutsu.length >= 3 ? getFirstThree(jutsu) : getAllElements(jutsu)}
      </p>

      <p className="self-start font-serif">
        <span className="font-bold inline"> Family: </span>

        {/* // remember that family is an array of object */}
        {family.map((Members) => {
          const membersArray = Object.values(Members); // This will transfer all the properties (families) to the new array "membersArray"

          // if the length of the membersArray is greater than 3 then we only display the first three, else display all.
          if (membersArray.length >= 3) {
            return getFirstThree(membersArray);
          } else {
            return getAllElements(membersArray);
          }
        })}
      </p>
    </div>
  );
}

export default NarutoCard;

/*
return array.map(
      (value, index) =>
        index === array.length - 1 // If the index is equal to the length, this means we are at the end of the array.
          ? ` ${String(value)} ` // If we are in the end of the array then do not put comma ","
          : ` ${String(value)} ,  ` // If we are not in the end of the array then put comma.
    );

*/
