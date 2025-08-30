import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Header from "./components/Header";
import AllCategories from "./components/AllCategories";
import UrgentServices from "./components/urgentservices";
import Testimonials from "./components/testimonials";

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen w-screen overflow-hidden">
      <Header />
      <section className="overflow-x-hidden">
        <Hero />
      </section>
      <section className="">
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
