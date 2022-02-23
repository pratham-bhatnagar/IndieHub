import './App.css';
import Hero from './components/Hero';
import AboutUS from './components/AboutUs';
import TopPlaylists from './components/TopPlaylists';
import Faq from './components/Faq';
import React from 'react'
// import ReactJkMusicPlayer from 'react-jinke-music-player'
// import 'react-jinke-music-player/assets/index.css'

function App() {
  return (
    <div className="bg-[#10061E] h-[100vh] overflow-x-hidden scrollbar-thin scrollbar-thumb-scrollCol overflow-y-scroll">
      <div className="">
      <Hero />
      <AboutUS/>
      <TopPlaylists/>
      <Faq/>
      {/* <ReactJkMusicPlayer glassBg={true} showDownload={false} showThemeSwitch={false} defaultPlayMode="order"  /> */}
      </div>
    </div>
  );
}

export default App;
