import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Header from "./components/Header";
import AllCategories from "./components/AllCategories";

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
    </div>
  );
}
