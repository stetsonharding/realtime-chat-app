import React from "react";

export default function RoomMessages({ allMessages }) {
  return (
    <>
      {allMessages.map((message, index) => (
        <h1 key={index}>{message.newMessage}</h1>
      ))}
    </>
  );
}
