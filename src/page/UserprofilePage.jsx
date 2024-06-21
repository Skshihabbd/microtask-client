import useAuth from "../Hooks/useAuth";

const UserprofilePage = () => { 
    const {users}=useAuth()
    return (
        <div className="h-screen text-2xl space-y-4 flex flex-col-reverse justify-center items-center">
           <p>Email:{users?.email}</p> 
           <p>Name:{users?.displayName}</p>
           <p> <img className="w-24 h-24 rounded-full" src={users?.photoURL} alt="" /></p> 
           <hr className=" w-10 " />
           <h1 >User Profile Information</h1>
        </div>
    );
};

export default UserprofilePage;