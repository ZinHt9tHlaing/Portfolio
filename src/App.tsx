import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./pages/About";
import Skill from "./components/skill/Skill";
import Work from "./pages/Work";
import Review from "./pages/Review";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
      </main>
    </>
  );
};

export default App;
