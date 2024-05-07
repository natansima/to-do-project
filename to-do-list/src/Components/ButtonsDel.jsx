import { Link } from "react-router-dom";
import "./ButtonsDel.css"; 

export default function ButtonDel({ task, deleteItem }) {
  return (
 <div className="button-del-container">
  <li>
  <Link to={`/tasks/${task.id}?showWhat=true&showWhere=true`}>
  {task.what}
  </Link>
<div style={{ display: "flex", alignItems: "center" }}>
  <Link className="button-del" to={`/tasks/${task.id}/edit`}>
    🔧
  </Link>
  <button onClick={() => deleteItem(task.id)}>🗑️</button>
</div>

</li>
</div>
);
}


