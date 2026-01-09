import { useState } from "react";

function MessageBoard() {
  const [textInput, setTextInput] = useState("");
  const [messageList, setMessageList] = useState([
    "Hello all ! This is first message.",
  ]);

  const handleAdd = (newMessage) => {
    if (newMessage.trim() === "") {
      alert("Please enter a message");
      return;
    }
    setMessageList(() => {
      return [...messageList, newMessage];
    });
    setTextInput("");
  };

  const handleInput = (evt) => {
    setTextInput(evt.target.value);
  };

  const handleDelete = (index) => {
    setMessageList(() => messageList.filter((_, i) => i !== index));
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            onChange={handleInput}
            value={textInput}
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => handleAdd(textInput)}
        >
          Submit
        </button>
      </div>
      <div class="board">
        {messageList.map((msg, index) => {
          return (
            <div className="message">
              <h1>{msg}</h1>
              <button
                onClick={() => handleDelete(index)}
                className="delete-button"
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
