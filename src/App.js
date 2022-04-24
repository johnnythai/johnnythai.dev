import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Projects from './components/projects';
import AboutMeSection from './components/aboutMe';

const App = () => {
  return(
    <div className="container mx-auto">
      <main className="main">
        <Header />
        <div className="">
          <AboutMeSection />
          <Projects />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App;