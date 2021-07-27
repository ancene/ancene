import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Content = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            <div>
                <h4 className="text-3xl font-semibold">
                    Let&apos;s keep in touch!
                </h4>

                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                    Find us on any of these platforms, we respond 1-2 business
                    days.
                </h5>

                <div>
                    <button className="w-5 h-5">
                        <FontAwesomeIcon icon={faGithub} />
                    </button>

                    <button className="w-5 h-5">
                        <FontAwesomeIcon icon={faFacebook} />
                    </button>

                    <button className="w-5 h-5">
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>

                    <button className="w-5 h-5">
                        <FontAwesomeIcon icon={faYoutube} />
                    </button>
                </div>
            </div>

            <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                </span>
                <ul className="list-unstyled">
                    <li>
                        <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://www.creative-tim.com/presentation?ref=nnjs-footer"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://blog.creative-tim.com?ref=nnjs-footer"
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://www.github.com/creativetimofficial?ref=nnjs-footer"
                        >
                            Github
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://www.creative-tim.com/bootstrap-themes/free?ref=nnjs-footer"
                        >
                            Free Products
                        </a>
                    </li>
                </ul>
            </div>

            <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                </span>
                <ul className="list-unstyled">
                    <li>
                        <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer"
                        >
                            MIT License
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://creative-tim.com/terms?ref=nnjs-footer"
                        >
                            Terms &amp; Conditions
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://creative-tim.com/privacy?ref=nnjs-footer"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://creative-tim.com/contact-us?ref=nnjs-footer"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
