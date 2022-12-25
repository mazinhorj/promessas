import classes from './App.module.css';


import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className={classes.app}>
      <Outlet />
    </div>
  );
}

export default App
