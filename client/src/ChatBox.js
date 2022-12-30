// Primary Chat Window
const ChatBox = ({clearChat, currentModel, setCurrentModel, models, setTemperature, temperature, handleSubmit, chatInput, chatInput1, setChatInput, setChatInput1, chatLog}) =>
  <section className="chatbox">
      <div className="chat-log">
        {chatLog.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
  </section>


// Individual Chat Message
const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
    <div className="chat-message-center">
      <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
        {message.user === "gpt" ? "RAI" : "Me"}
      </div>
      <div className="message">
        {message.message}
      </div>
    </div>
  </div>
  )
}

export default ChatBox