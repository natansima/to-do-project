import HeaderFooter from "../Components/HeaderFooter";
import Inside from "../Components/Inside";



export default function Task({tasks, toggleTaskCompletion, deleteItem}) {
    return (
      
            <div>
            
                <Inside  tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteItem={deleteItem} />
                <HeaderFooter />
            </div>
            
        
    );
}
