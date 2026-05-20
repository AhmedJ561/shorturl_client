// Header.jsx
import { Link } from "lucide-react";

const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl mb-6 shadow-2xl shadow-violet-500/25">
        <Link className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-pink-200 to-violet-200 bg-clip-text text-transparent mb-4">
        LinkShrink
      </h1>
      <p className="text-xl text-gray-300 max-w-md mx-auto leading-relaxed">
        Transform your lengthy URLs into sleek, shareable links with lightning speed
      </p>
    </div>
  );
};

export default Header;
