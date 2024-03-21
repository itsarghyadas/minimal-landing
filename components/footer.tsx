import React from "react";

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
    <section className="footer-main px-10 py-10 lg:py-12">
      <div className="footer-headline mx-auto flex max-w-7xl flex-col gap-x-5 gap-y-6 sm:flex-row md:items-start justify-between lg:px-10 xl:px-0">
        <div className="left-footer-part flex w-full flex-col gap-y-3.5 items-start justify-start pt-3 md:w-1/2 lg:w-1/3">
          <button>
            <div className="header-logo flex items-center space-x-2">
              <img
                src="https://magicui.design/icon.png"
                alt="Magic UI"
                className="w-10 h-10 rounded-md"
              />
              <h2 className="font-bold">Startup Template</h2>
            </div>
          </button>
          <p className="max-w-xs text-neutral-500 font-medium text-[15px]">
            Raise your conversion rate with our landing page template.
          </p>
        </div>

        <div className="right-footer-part w-1/2 lg:w-1/3">
          <div className="flex items-center sm:justify-end gap-x-16 px-0 lg:px-10">
            <ul className="footer-link-list grid grid-cols-2 gap-x-10 gap-y-3.5 font-medium text-neutral-500">
              {footerLinks.map((link) => (
                <li className="footer-link-item" key={link.id}>
                  <a
                    className="text-sm hover:text-white font-medium active:underline active:underline-offset-4"
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
    </section>
  );
}
