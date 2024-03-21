export default function Navbar() {
  return (
    <div className="w-full h-20 py-7 px-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://magicui.design/icon.png"
            alt="Magic UI"
            className="w-10 h-10 rounded-md"
          />
        </div>

        <button className="w-10 font-mono cursor-pointer font-bold h-10 rounded-full text-white bg-neutral-800 hover:bg-indigo-500 transition-colors ease-linear duration-100 shadow-black/25 ring-1 ring-indigo-500/50 shadow-[inset_0px_-2px_4px_rgba(0,0,0,0.6)] inline-flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </button>
      </div>
    </div>
  );
}
