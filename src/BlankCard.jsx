function BlankCard({ textColor, shadowColor, name, images }) {
  console.log(shadowColor);
  return (
    <div
      className={`flex flex-col justify-center items-center w-[20rem] h-[20rem] text-center mt-2 border-2 rounded-xl shadow-2xl ${shadowColor}`}
    >
      <img className="size-[8rem] border-2 rounded-full" src={images} />

      <h2 className={`font-serif ${textColor}`}>Insert a naruto character in {name}</h2>
    </div>
  );
}

export default BlankCard;
