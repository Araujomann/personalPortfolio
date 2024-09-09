import { Hero, Works, About, Testemonials, Contact } from "./components";

export const App = () => {
    return (
        <div className="flex flex-col items-center overflow-x-hidden             gap-16 md:w-5/6 md:mx-auto lg:w-4/6 xl:w-3/6">
            <Hero />
            <Works />
            <About />
            <Testemonials />
            <Contact />
        </div>
    );
};
