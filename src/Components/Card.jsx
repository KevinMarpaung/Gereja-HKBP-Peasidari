const Card = (props) => {
  const { title, gambar } = props;
  return (
    <div className="w-52 bg-white rounded-lg mx-2 mb-10">
      <div className="mx-2 py-5">
        <h2 className="font-bold  text-base/5">{title}</h2>
        <p className="text-sm/4 text-justify mt-2 ">
          Lorem ipsum dolor sit,dsa amet sadfdas consectetur adipisicing br
          elidsadt.
          <img className="rounded-lg mt-4" src={gambar} alt="" />
        </p>
      </div>
    </div>
  );
};

export default Card;
