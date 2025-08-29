import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white'>
      <section>
        <Header />
      </section>
      <section className='mt-10 justify-center items-center flex bg-[url("city.jpg")] bg-no-repeat bg-cover mx-5 rounded-lg'>
        <Hero />
      </section>
      <section className='mt-10 justify-center items-center flex'>
        <Categories />
      </section>
    </div>
  )
}

export default App
