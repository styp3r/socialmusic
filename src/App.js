import './App.css';
import TopList from './components/TopList';
import Navbar from './components/Navbar';
import NotifTray from './components/NotificationTray';
import Popular from './components/Popular';
import GoLive from './components/GoLive';

function App() {
  return (
    <div className="App">
    <NotifTray />
    <div id = "content">
      <Navbar />
      <Popular />
      <GoLive />
      <TopList />
    </div> 
    </div>
  );
}

export default App;

