import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Header from "./components/Header";
import AllCategories from "./components/AllCategories";
import UrgentServices from "./components/Urgentservices";
import Testimonials from "./components/testimonials";
import About from "./components/About";

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen w-screen overflow-hidden">
      <Header />
      <section className="overflow-x-hidden" id="home">
        <Hero />
      </section>
      <section className="" id="about">
        <About />
      </section>
      <section className="" id="services">
        <Categories />
      </section>
      <section className="">
        <AllCategories />
      </section>
      <section>
        <UrgentServices />
      </section>
      <section>
        <Testimonials />
      </section>
    </div>
  );
}
