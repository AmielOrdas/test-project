function BlankCard({ textColor, shadowColor, name, images }) {
  return (
    <div
      className={`flex flex-col justify-center items-center w-1/3 text-center mt-2 mx-3 border-2 rounded-xl shadow-2xl ${shadowColor}`}
    >
      <img className="size-[8rem] border-2 rounded-full" src={images} />

      <h1 className={`${textColor} font-mono mmd:text-sm `}>
        Insert a naruto character in {name}
      </h1>
    </div>
  );
}

export default BlankCard;
