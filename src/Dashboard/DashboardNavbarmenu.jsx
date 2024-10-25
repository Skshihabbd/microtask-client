const DashboardNavbarmenu = ({ info, fetch }) => {
  const { image, name, role, coin } = info;
  fetch();
  return (
    <div className=" grid grid-cols-2  ">
      <h1>
        <img
          className="w-10 h-10  md:w-12 md:h-12 rounded-full"
          src={image}
          alt=""
        />
      </h1>
      <h1 className=" md:text-2xl text-[#4b4516cc] font-bold">{name}</h1>
      <h1 className="md:text-xl font-bold">{role}</h1>
      <h1 className="text-xl font-bold">{coin}</h1>
    </div>
  );
};

export default DashboardNavbarmenu;
