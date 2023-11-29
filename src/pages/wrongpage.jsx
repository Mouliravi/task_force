const WrongPage = () => {
  console.log("This is 404 page");
  return (
    <>
      {/* <div
        className="absolute inset-0 bg-cover flex justify-start"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/abstract-global-communications-background_1048-12297.jpg)",
        }}
      /> */}
      <div className="flex justify-center mt-10 bg-white">
        <img
          src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7968.jpg"
          alt="404 -pic"
        />
      </div>
    </>
  );
};

export default WrongPage;
