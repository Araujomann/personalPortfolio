import { Hero, Works, About, Testemonials, Contact } from "./components";

export const App = () => {
  return (
    <div className="  flex flex-col items-center overflow-hidden gap-16 md:w-5/6 md:mx-auto lg:w-5/6  ">
      <Hero id="hero" />
      <Works id="works" />
      <About id="about" />
      <Testemonials id="testemonial" />
      <Contact id="contact" />
    </div>
  );
};
