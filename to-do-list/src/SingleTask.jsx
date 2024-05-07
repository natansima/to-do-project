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

 
  const showWhere = searchParams.get("showWhere");

 


  return (
    <div className="profile-wrapper">
      <div className="profile card">
       
    
        <h2>{task.what}</h2>
        
        {showWhere === "true" && <p>{what.where}</p>}
      </div>
    </div>
  );
}
