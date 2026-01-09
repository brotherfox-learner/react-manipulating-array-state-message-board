import { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = () => {
    const newMessage = {
      id: Date.now(), // simple unique id based on timestamp
      text: inputMessage,
    };
    setMessages([...messages, newMessage]);
    setInputMessage("");
  };

  const handleDelete = (targetId) => {
    setMessages(messages.filter((message) => message.id !== targetId));
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div class="board">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <h1>{message.text}</h1>
            <button
              className="delete-button"
              onClick={() => handleDelete(message.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
