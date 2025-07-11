import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./pages/About";
import Skill from "./components/skill/Skill";
import Work from "./pages/Work";
import Review from "./pages/Review";
import Contact from "./pages/Contact";
import { Bounce, ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
    </>
  );
};

export default App;
