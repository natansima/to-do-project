import HeaderFooter from "../Components/HeaderFooter";
import Inside from "../Components/Inside";



export default function Task({tasks}) {
    return (
      
            <div>
            
                <Inside  tasks={tasks} />
                <HeaderFooter />
            </div>
            
        
    );
}
