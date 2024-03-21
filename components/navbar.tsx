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

        <button className="w-max px-5 font-mono cursor-pointer font-bold h-10 rounded-md text-white bg-indigo-500 shadow-black/25 ring-1 ring-indigo-500/50 shadow-[inset_0px_-2px_4px_rgba(0,0,0,0.6)] inline-flex items-center justify-center">
          Connect One
        </button>
      </div>
    </div>
  );
}
