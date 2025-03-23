const Fitur = (props) => {
  const { text, icon } = props;
  return (
    <>
      <div className="  flex flex-col justify-center my- shadow p-2 ">
        <div className="  flex  m-auto justify-center items-center bg-[#91857a] rounded-full h-30 w-30 p-5">
          <div>{icon}</div>
        </div>
        <div className="text-center mt-2 md:ml-2  md:flex ">
          <h1 className="md:text-wrap md:shadow  mx-20 p-1 md:mx-3 rounded-md  md:w-52 ">
            {text}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Fitur;
