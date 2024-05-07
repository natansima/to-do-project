import { useParams, Navigate, useSearchParams } from "react-router-dom";
import "./SingleTask.css";

export default function SingleTask({ tasks }) {
  const { taskId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // find task using .find()
  const task = tasks.find((task) => task.id === taskId);

 
  if (!task) {
    return <Navigate to="/tasks" />;
  }

  const showWhat = searchParams.get("showWhat");
  const showWhere = searchParams.get("showWhere");


  console.log("showWhat", showWhat);
  console.log("showWhere", showWhere);
 


  return (
    <div className="profile-wrapper">
      <div className="profile-card">
       
    
        <h2>{task.what}</h2>
        {showWhat === "true" && <p>{task.what}</p>}
        {showWhere === "true" && <p>{task.where}</p>}
      </div>
    </div>
  );
}
