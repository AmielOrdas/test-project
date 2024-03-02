//
//

function NarutoCard({ name, jutsu, images, family }) {
  return (
    <div className="box-content bg-red-200">
      <div className="flex justify-center">
        <img className="size-[8rem]" src={images[0]} />
      </div>
      <div className="flex justify-center">
        <h2>{name}</h2>
      </div>
      <div className="flex justify-center">
        <p>
          Family:
          {/* // remember that family is an array of object */}
          {family.map((Members) => {
            const membersArray = Object.values(Members); // This will transfer all the properties (families) to the new array "membersArray"

            // if the length of the membersArray is greather than 3 then we only display the first three, else display all.
            if (membersArray.length >= 3) {
              const threeMembers = membersArray.slice(0, 3); // Get the first three family members inside the "membersArray"

              // Loop through the threeMembers array then convert each member into strings for visual purposes
              return threeMembers.map(
                (value, index) =>
                  index === threeMembers.length - 1 // If the index is equal to the length, this means we are at the end of the array.
                    ? ` ${String(value)}, etc. ` // If we are in the end of the array then do not put comma ","
                    : ` ${String(value)} , ` // If we are not in the end of the array then put comma.
              );
            } else {
              // Loop through the members array then convert each member into strings for visual purposes

              return membersArray.map(
                (value, index) =>
                  index === membersArray.length - 1 // If the index is equal to the length, this means we are at the end of the array.
                    ? ` ${String(value)} ` // If we are in the end of the array then do not put comma ","
                    : ` ${String(value)} ,  ` // If we are not in the end of the array then put comma.
              );
            }
          })}
        </p>
      </div>
    </div>
  );
}

export default NarutoCard;
