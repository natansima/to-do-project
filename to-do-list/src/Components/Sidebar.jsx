import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';


const Sidebar = () => (
  <div className="wrapp">
   
      <Navbar />
      <Outlet />
   
  </div>
);

export default Sidebar;
