
const SideMenu = ({ clearChat, currentModel, setCurrentModel, models, setTemperature, temperature, handleSubmit, chatInput, chatInput1, setChatInput, setChatInput1, chatLog }) => 
<aside className="sidemenu">
  <h1>
  <div className="sidemenu-header">📄 ResumeAI </div>
  </h1>
  <p>
  <label className="sidemenu-subheader">Fill in your information to generate "experience" items for use in a resume.</label>
  </p>
      <div className="user-role-input">
      <h2>
        <label className="side-label">💭 What is your role? </label>
      </h2>
      <form className="form" onSubmit={handleSubmit}>
      <input
        className="user-input-textarea"
        placeholder="e.g. Software Engineer, Marketing Manager"
        type="text"
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
      ></input>
      </form>
      </div>

      <div className="user-role-info">
      <h2>
      <label className="side-label">💼 Define your work experience in one sentence.</label>
      </h2>
      <form className="form" onSubmit={handleSubmit}>
      <input
        className="user-input-textarea1"
        type="text"
        placeholder="e.g. I was responsible for the development of the company's website."
        value={chatInput1}
        onChange={(e) => setChatInput1(e.target.value)}>
        </input>
        </form>
        <button className="submit" type="submit" onClick={handleSubmit}> Generate 🔮</button>
        <div className="side-menu-button-clear" onClick={clearChat}>
        <span>⛔</span>
        Clear Results
      </div>
      </div>
    </aside>

export default SideMenu