import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");

  return (
    <div className="w-screen h-screen m-0 p-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center overflow-hidden">
      {/* Title */}
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-5xl font-extrabold mb-10 drop-shadow-lg">
        URL Shortener
      </h1>

      {/* Spotlight Background */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Card */}
      <div className="relative w-full max-w-lg p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl z-10">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Input */}
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your long URL here..."
            className="flex-1 px-4 py-3 rounded-xl bg-gray-900/70 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
          />

          {/* Button */}
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-400 text-sm z-10">
        🚀 Paste a link above and get a shorter version instantly!
      </p>
    </div>
  );
}

export default App;
