function BlankCard({ name, images }) {
  return (
    <div>
      <div>
        <div className="flex justify-center content-center m-auto">
          <img className="size-[8rem]" src={images} />
        </div>
        <div className="flex justify-center content-center m-auto">
          <h2>Insert a naruto character in {name}</h2>
        </div>
      </div>
    </div>
  );
}

export default BlankCard;
