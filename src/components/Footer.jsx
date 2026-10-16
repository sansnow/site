import React from "react";

const Footer = () => {
  return (
    <div className="my-4 self-end">
      <br />
      <div className="bg-mauve-600 w-full h-0.5"></div>
      <br />
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h1>Made with Love and Determination</h1>
          <img src="/icons/Soul.webp" alt="" />
        </div>

        <h1 className="text-xl ">
          <a
            target="_blank"
            href="https://github.com/sansnow/site"
            className="text-green-500"
          >
            {" "}
            <pre>[ GITHUB ]</pre>
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
