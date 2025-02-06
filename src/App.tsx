import "./App.css";
import { NavMenu } from "./layouts/NavMenu/NavMenu";
import { APP_ROUTE } from "./config";
import { Route } from "wouter";

function App() {
  return (
    <main className="container ">
      <div className="w-[100vh] h-[100vh] flex bg-white " data-vaul-drawer-wrapper="">
        <div className="w-20 h-full">
          <NavMenu />
        </div>

        <div className="flex-1 h-full">
          {APP_ROUTE.map((route) => {
            return <Route key={route.path} path={route.path} component={route.component} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
