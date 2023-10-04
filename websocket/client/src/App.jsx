import "./App.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3000");

function App() {
  const [message, setMessage] = useState("");
  const sendMessage = () => { 
    socket.emit("send_message", {message})
   }
   const [receivedMessage, setReceivedMessage] = useState("")

   useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceivedMessage(data.message);
    })
   }, [socket])
  return (
    <main>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div id={"messages"}>
        {receivedMessage}
      </div>
    </main>
  );
}

export default App;
