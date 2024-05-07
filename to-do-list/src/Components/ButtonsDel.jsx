import { Link } from "react-router-dom";
import "./ButtonsDel.css"; 

export default function ButtonDel({ task, deleteItem }) {
  return (
    <div className="button-del-container">
      <Link className="button-del" to={`/tasks/${task.id}/edit`}>
        ✏️
      </Link>

      <button onClick={() => deleteItem(task.id)}>🗑️</button>
    </div>
  );
}
