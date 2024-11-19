import './App.css';
import Navigationbar from './components/Navigationbar';
import Body from './components/Card';
import "./style/LandingPage.css"
import SideBar from './components/Sidebar';


function App() {
  return (
    <div>
      <div  className="myBG">
      <Navigationbar />
      <SideBar />
      {/* <Body /> */}
      </div>
      </div>
    
   
  );
}

export default App;
