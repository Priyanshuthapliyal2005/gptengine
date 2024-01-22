import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className=".upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo"/><span className="brand">GptEngine</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn"/>New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query"/>What is Programing?</button>
            <button className="query"><img src={msgIcon} alt="Query"/>how to use api?</button>
          </div>
        </div>
        <div className="lowerside">
          <div className="listItems">
            <img src={home} alt="Home" className="listitemsImg"/>Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listitemsImg"/>Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade" className="listitemsImg"/>Upgrade to Pro
          </div>
        </div>

      </div>
      <div className="main"> 

      </div>

    </div>
);
}

export default App;
