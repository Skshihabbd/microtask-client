

const TopEarner = ({futur ,info}) => {
    return (
        <div className="card lg:w-40 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={info.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title ">coin: {info.coin}</h2>
    <p>{info.role}</p>
    
  </div>
</div>
    );
};

export default TopEarner;