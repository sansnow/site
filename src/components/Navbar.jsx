import React from "react";

const Navbar = () => {
    return (
        <div className="text-2xl flex items-center justify-between">
            <h1 className="">
                <a href="/">
                    sansnow
                </a>
            </h1>

            <ul className="flex gap-4 items-center ">
                <li>
                    <a href="/blog" className="text-cyan-400">
                        [ BLOG ]
                    </a>
                </li>
                <li>
                    <a href="/about" className="text-yellow-400">
                        [ ABOUT ]
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
