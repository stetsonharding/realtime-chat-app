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
  const [userMessage, setUserMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  //Getting the database collection => database and collection of messages
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    //query for database
    const queryMessages = query(messagesRef, where("room", "==", room));

    //Get messages in real time
    onSnapshot(queryMessages, (snapshot) => {
      //Grabbing data from messages
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });

      setAllMessages(messages);
    });
  }, []);

  console.log(allMessages);

  //Adding users message/object to firebase/firestore
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (userMessage) {
      await addDoc(messagesRef, {
        newMessage: userMessage,
        createdAt: serverTimestamp(),
        user: auth.currentUser.displayName,
        room,
      });

      setUserMessage("");
    }

    Chat.propTypes = {
      room: PropTypes.string,
    };
  };

  return (
    <div className="chat">
      <div>
        {allMessages.map((message, index) => (
          <h1 key={index}>{message.newMessage}</h1>
        ))}
      </div>
      <form onSubmit={handleSubmitForm} className="new-message-form">
        <input
          type="text"
          className="new-message-input"
          placeholder="Type your message here"
          onChange={(e) => setUserMessage(e.target.value)}
          value={userMessage}
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
