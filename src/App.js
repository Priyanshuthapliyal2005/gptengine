import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className=".upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo"/><span className="brand"><b className="brandtext">GptEngine</b></span>
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
        <div className="chats">
          <div className="chat">
            <img src={userIcon} alt="" /><p className="txt">Ask a Question?</p>
          </div>
          <div className="chat">
            <img src={gptImgLogo} alt="" /><p className="txt">Here is answer.</p>
          </div>

        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" name="" id=""/><button className="send"><img src={sendBtn} slt="Send"  /></button>
          </div>
        </div>
      </div>

    </div>
);
}

export default App;
