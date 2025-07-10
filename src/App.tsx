import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Outlet />
    </>
  );
};

export default App;
