import React from "react";
import { ArrowRightIcon } from "lucide-react";

const footerLinks = [
  {
    id: 1,
    title: "About",
    url: "#",
  },
  {
    id: 2,
    title: "Contact",
    url: "#",
  },
  {
    id: 3,
    title: "Blog",
    url: "#",
  },
  {
    id: 4,
    title: "Story",
    url: "#",
  },
  {
    id: 5,
    title: "Company",
    url: "#",
  },
  {
    id: 6,
    title: "Product",
    url: "#",
  },
  {
    id: 7,
    title: "Press",
    url: "#",
  },
  {
    id: 8,
    title: "More",
    url: "#",
  },
  // You can add more links here
];

export default function Footer() {
  return (
    <footer className="footer-main px-10 py-10 lg:py-12">
      <div className="footer-headline mx-auto flex max-w-7xl md:border border-dashed md:p-10 rounded-md flex-col gap-x-5 gap-y-10 sm:flex-row md:items-center justify-between lg:px-10">
        <div className="left-footer-part flex w-full flex-col gap-y-3.5 items-start justify-start pt-3 md:w-1/2 lg:w-1/3">
          <button>
            <div className="header-logo flex items-center space-x-2">
              <img
                src="https://magicui.design/icon.png"
                alt="Magic UI"
                className="w-7 h-7 rounded-md"
              />

              <h2 className="font-medium text-lg">Magicui Template</h2>
            </div>
          </button>
          <p className="max-w-xs dark:text-neutral-400/80 text-neutral-500/80 dark:font-normal font-medium text-[15px]">
            Raise your conversion rate with our landing page template. And also
            check out our best in the market Animated components.
          </p>
          <button className="group w-fit px-2 text-[15px] font-[430] cursor-pointer h-9 rounded-md bg-gradient-to-b bg-neutral-800 hover:bg-neutral-700 border border-neutral-700/50 flex items-center justify-center relative transition-colors ease-linear duration-100 text-white">
            <div className="rounded-md absolute inset-0 shadow border-t border-neutral-500/30" />
            Magicui
            <ArrowRightIcon className=" size-4 ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="right-footer-part w-1/2 lg:w-1/3">
          <div className="flex items-center sm:justify-end gap-x-16 px-0 lg:px-10">
            <ul className="footer-link-list grid grid-cols-2 gap-x-10 gap-y-3.5 font-medium text-neutral-500">
              {footerLinks.map((link) => (
                <li className="footer-link-item" key={link.id}>
                  <a
                    className="text-[15px] hover:text-neutral-800 dark:hover:text-white font-medium hover:underline hover:underline-offset-4 active:underline active:underline-offset-4"
                    href={link.url}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
