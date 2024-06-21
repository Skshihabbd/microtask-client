import { Link } from "react-router-dom";


const TaskListCard = ({info}) => {
const {_id}=info
    return (
        <div className="card lg:min-w-max glass mx-8">
  <figure><img className="h-28 " src={info.image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{info.title}</h2>
    <p>{info.taskdetails}</p>
    <div className="card-actions justify-end">
     <Link to={`/dashboard/taskdetails/${_id}`}> <button className="btn btn-primary">View details</button></Link>
    </div>
  </div>
</div>
    );
};

export default TaskListCard;