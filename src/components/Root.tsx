import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <header>
        
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
       
      </footer>
    </div>
  );
}

export default Root;
