import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Coundown from "react-countdown"

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Bye 2023!"])

  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

function timeLeft() {
  const newYearDate = new Date("January 1, 2024 00:00:00").getTime()
  const dateNow = new Date().getTime()
  const remainingTime = newYearDate - dateNow
  return remainingTime
}

  return (
    <>
      <Particles
        init={particleInitialization}
        options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter 
          words={newYearMessage} 
          loop={false} 
          cursorStyle={"🎉"}
          cursor
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Coundown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage([
            "Selamat", "tahun", "baru", "HNY 2024"
          ])}/>
        </div>
      </div>
    </>
  );
}

export default App;
