// UrlShortenerForm.jsx
import { useState } from "react";
import { Globe, Zap, Copy, Check } from "lucide-react";

const createShortUrl = async (url) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { id: Math.random().toString(36).substr(2, 8) };
};

const getShortUrl = async (id) => {
  return `https://sh.rt/${id}`;
};

const UrlShortenerForm = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerateShortUrl = async () => {
    if (!inputUrl.trim()) return;

    setIsLoading(true);
    setShortUrl("");

    try {
      const data = await createShortUrl(inputUrl);
      if (data) {
        const url = await getShortUrl(data.id);
        setShortUrl(url);
      }
    } catch (error) {
      console.error("Error generating short URL:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (shortUrl) {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleGenerateShortUrl();
    }
  };

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl shadow-black/20">
      <div className="space-y-6">
        <div className="relative">
          <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Paste your long URL here..."
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
          />
        </div>

        <button
          onClick={handleGenerateShortUrl}
          disabled={isLoading || !inputUrl.trim()}
          className="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-3"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Zap className="w-5 h-5" />
              <span>Shrink URL</span>
            </>
          )}
        </button>

        {shortUrl && (
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-gray-300 text-sm mb-2">Your shortened URL:</p>
                <div className="flex items-center space-x-3">
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 text-lg font-medium truncate transition-colors duration-200"
                  >
                    {shortUrl}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>

            {copied && (
              <div className="mt-3 text-green-400 text-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
                ✓ Copied to clipboard!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlShortenerForm;
