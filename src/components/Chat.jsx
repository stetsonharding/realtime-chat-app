import React, { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../css/Chat.css";

import PropTypes from "prop-types";

function Chat({ room }) {
  //storing users typed message
  const [message, setMessage] = useState("");

  //Getting the database collection => database and collection of messages
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    //query for database
    const queryMessages = query(messagesRef, where("room", "==", room));

    //Get messages in real time
    onSnapshot(queryMessages, (snapshot) => {
      console.log("new message");
    });
  }, []);

  //Adding users message/object to firebase/firestore
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (message) {
      await addDoc(messagesRef, {
        newMessage: message,
        createdAt: serverTimestamp(),
        user: auth.currentUser.displayName,
        room,
      });

      setMessage("");
    }

    Chat.propTypes = {
      room: PropTypes.string,
    };
  };

  return (
    <div className="chat">
      <form onSubmit={handleSubmitForm} className="new-message-form">
        <input
          type="text"
          className="new-message-input"
          placeholder="Type your message here"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
