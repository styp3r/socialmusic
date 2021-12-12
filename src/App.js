import './App.css';
import TopList from './components/TopList';
import Navbar from './components/Navbar';
import NotifTray from './components/NotificationTray';
import HeroSection from './components/HeroSection';
import StreamView from './components/StreamView';

function App() {
  return (
    <div className="App">
    <NotifTray />
    <StreamView />
    <div id = "content">
      <Navbar />
      <HeroSection />
      <TopList />
    </div> 
    </div>
  );
}

export default App;

