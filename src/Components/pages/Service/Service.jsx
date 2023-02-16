import React, { useState } from "react";

const Service = () => {
  const [message, setmessage] = useState("hello message");
  return (
    <div>
      <h2>{message}</h2>
      <button
        className="border bg-black text-white focus:bg-green-300"
        onClick={() => setmessage("thank you for suscribe ")}
      >
        suscribe
      </button>
      <h2> Service page </h2>
    </div>
  );
};

export default Service;
