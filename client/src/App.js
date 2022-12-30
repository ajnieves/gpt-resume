import './normal.css';
import './App.css';
import { useState, useEffect } from 'react';
import SideMenu from './SideMenu'
import ChatBox from './ChatBox'

function App() {

  useEffect(() => {
    getEngines();
  }, [])

  const [chatInput, setChatInput] = useState("");
  const [chatInput1, setChatInput1] = useState("");
  const [models, setModels] = useState([]);
  const [temperature, setTemperature] = useState(0.5);
  const [currentModel, setCurrentModel] = useState("text-davinci-003");
  const [chatLog, setChatLog] = useState([{ 
  }]);

  // clear chats
  function clearChat(){
    setChatLog([]);
  }

  function getEngines(){
    fetch("http://localhost:3080/models")
    .then(res => res.json())
    .then(data => {
      console.log(data.models.data)
      setModels(data.models.data)
    })
  }

  
  async function handleSubmit(e){
    e.preventDefault();

    let chatLogNew = [...chatLog, { user: "me", message: `Generate resume bullet points for the role, ${chatInput} with the responsibilities: ${chatInput1}`} ]
    setChatInput("");
    setChatInput1("");
    setChatLog(chatLogNew)
    

  
    // fetch response to the api combining the chat log array of messages and seinding it as a message to localhost:3000 as a post
    const messages = chatLogNew.map((message) => message.message).join("\n")
    
    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages,
        currentModel,
       })

      });
    const data = await response.json();
    setChatLog([...chatLogNew, { user: "gpt", message: `${data.message}`} ])
    var scrollToTheBottomChatLog = document.getElementsByClassName("chat-log")[0];
    scrollToTheBottomChatLog.scrollTop = scrollToTheBottomChatLog.scrollHeight;
  }

  function handleTemp(temp) {
    if(temp > 1){
      setTemperature(1)
    } else if (temp < 0){
      setTemperature(0)
    } else {
      setTemperature(temp)
    }

  }

  return (
    <div className="App">
      <SideMenu
        chatInput={chatInput}
        setChatInput={setChatInput}
        setChatInput1={setChatInput1} 
        handleSubmit={handleSubmit}
        clearChat={clearChat}
      />
      <ChatBox 
        chatInput={chatInput}
        chatLog={chatLog} 
        setChatInput={setChatInput}
        setChatInput1={setChatInput1} 
        handleSubmit={handleSubmit} />
    </div>
  );
}
export default App;
