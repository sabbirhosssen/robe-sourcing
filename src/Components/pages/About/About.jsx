import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Shop our latest products now" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="h-full">
        <h2>about pages ha</h2>
        <p className="text-justify text-[11px] px-4 mt-1 w-fit">
          RSIL is a pioneering, dynamic, professionally managed business
          organization that has strong experience in the field of readymade
          garments sector with world-class service, quality solutions and value
          addition services to end products for the textile industries on a
          global level, beginning from fabrics to fashion through market
          knowledge, experienced sourcing professionals.
        </p>

        <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
          ...
        </button>

        <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
          ...
        </button>
      </div>
    </>
  );
};

export default About;
