import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.path === "/" ? <Navigate to="jobs" /> : <route.element />
            }
          ></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
