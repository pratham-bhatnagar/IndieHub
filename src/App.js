import './App.css';
import Hero from './components/Hero';
import AboutUS from './components/AboutUs';
import TopPlaylists from './components/TopPlaylists';
function App() {
  return (
    <div className="bg-[#10061E] h-[100vh] overflow-x-hidden scrollbar-thin scrollbar-thumb-scrollCol overflow-y-scroll">
      <div className="">
      <Hero />
      <AboutUS/>
      <TopPlaylists/>
      </div>
      
    </div>
  );
}

export default App;
