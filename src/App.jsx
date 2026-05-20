// App.jsx
import Header from "./components/Header";
import UrlShortenerForm from "./components/UrlShortenerForm";
import Stats from "./components/Stats";
import Background from "./components/Background";
import GridPattern from "./components/GridPattern";

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <Background />
      <GridPattern />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          <Header />
          <UrlShortenerForm />
          {/* <Stats /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
