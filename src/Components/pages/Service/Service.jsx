import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const Service = () => {
  const [message, setmessage] = useState("hello message");
  return (
    <>
      <Helmet>
        <title>Service</title>
        <meta name="description" content="Our service page" />
        <link rel="canonical" href="/service" />
      </Helmet>
      <h2>{message}</h2>
      <button
        className="border bg-black text-white focus:bg-green-300"
        onClick={() => setmessage("thank you for suscribe ")}
      >
        suscribe
      </button>
      <h2> Service page </h2>
    </>
  );
};

export default Service;
