import React, { useState, useRef } from "react";

function RoomForm() {
  //state for users room number
  const [room, setRoom] = useState("");
  //ref to get value from input
  const roomInputRef = useRef(null);

  //If room number is entered go to chat component
  //else ask the user to enter room umber
  return (
    <>
      {room ? (
        <p>Chat</p>
      ) : (
        <div
          className="room"
          style={{ display: "flex", flexDirection: "column", width: "20%" }}
        >
          <label>Enter Room Name:</label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}
    </>
  );
}

export default RoomForm;
