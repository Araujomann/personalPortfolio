import { Hero, Works, About, Testimonials, Contact } from "./components";

export const App = () => {
  return (
    <div className="flex flex-col items-center overflow-x-hidden w-full gap-24 pb-24 md:max-w-6xl md:mx-auto lg:gap-32">
      <Hero id="hero" />
      <Works id="works" />
      <About id="about" />
      <Testimonials id="testimonial" />
      <Contact id="contact" />
    </div>
  );
};
