//
//

function NarutoCard({ name, jutsu, images, family }) {
  return (
    <div>
      <img src={images[0]} />
      <h2>{name}</h2>
      <p>
        Family:
        {/* // remember that family is an array of object */}
        {family.map((member) => {
          console.log(member);
          const membersArray = Object.values(member); // This will transfer all the properties (families) to the new array "members"

          return membersArray.map(
            (value, index) =>
              index === membersArray.length - 1 // If the index is equal to the length, this means we are at the end of the array.
                ? ` ${String(value)} ` // If we are in the end of the array then do not put comma ","
                : ` ${String(value)} ,  ` // If we are not in the end of the array then put comma.
          ); // Loop through the members array then convert each member into strings for visual purposes
        })}
      </p>
    </div>
  );
}

export default NarutoCard;
