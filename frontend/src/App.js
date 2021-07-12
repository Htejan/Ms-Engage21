import React, { useState } from "react";

import { Jutsu } from "react-jutsu";
//

//

const App = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [call, setCall] = useState(false);
  const [password, setPassword] = useState("");

  const handleClick = event => {
    event.preventDefault();
    if (room && name) setCall(true);
  };

  return (
    <div className="mainHead">
      <h2 className="heading">👨‍💻Buddy Hangouts!! 🙋‍♂️</h2>

      {call ? (
        <Jutsu
          className="jutsu"
          roomName={room}
          password={password}
          displayName={name}
          onMeetingEnd={() => console.log("Meeting has ended")}
          loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>}
        />
      ) : (
        <form className="flb">
          <input
            className="fld"
            id="room"
            type="text"
            placeholder="Create Room*"
            value={room}
            onChange={e => setRoom(e.target.value)}
          />
          <input
            className="fld"
            id="name"
            type="text"
            placeholder="Enter Name*"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            className="fld"
            id="password"
            type="text"
            placeholder="Set Password(Optional)"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="buttons" onClick={handleClick} type="submit">
            Start / Join
          </button>
        </form>
      )}
    </div>
  );
};

export default App;
