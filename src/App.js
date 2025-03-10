import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Coundown from "react-countdown"

function App() {
  const [newYearMessage, setNewYearMessage] = useState([
    "2026 is coming in",
  ]);
  const [showFireworks, setShowFireworks] = useState(false);

  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2026 00:00:00").getTime();
    const dateNow = new Date().getTime();
    const remainingTime = newYearDate - dateNow;
    return remainingTime;
  }

  const handleCountdownComplete = () => {
    setNewYearMessage([
      "Happy new year!",
      "Wishing you all the best in the coming year.",
      "May the new year bring you joy, success, and prosperity.",
      "Cheers to a fresh start and new opportunities!",
    ]);
    setShowFireworks(true);
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return null;
    } else {
      return (
        <span className="text-white">
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen gap-4 bg-black">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter words={newYearMessage} loop={false} cursorStyle={"🎉"} cursor />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Coundown
            date={Date.now() + timeLeft()}
            onComplete={handleCountdownComplete}
            renderer={renderer}
          />
        </div>
        {showFireworks && (
          <Particles
            init={particleInitialization}
            options={{ preset: "fireworks" }}
          />
        )}
      </div>
    </>
  );
}

export default App;
