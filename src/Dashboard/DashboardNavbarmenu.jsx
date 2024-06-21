

const DashboardNavbarmenu = ({info,fetch}) => {
    const {image,name,role,coin}=info
    fetch()
    return (
        <div className=" grid grid-cols-2  border-2">
           <h1><img className="w-6 h-6 rounded-full" src={image} alt="" /> </h1> 
           <h1>{name}</h1> 
           <h1>{role}</h1> 
           <h1>{coin }
            </h1> 
        </div>
    );
};

export default DashboardNavbarmenu;