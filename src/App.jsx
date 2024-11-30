import { BackgroundBeamsWithCollision } from "./components/ui/background-effect2";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";

function App() {
  const words = [
    {
      text: "Welcome",
      className: "text-neutral-400",
    },
    {
      text: "Saksham.code",
      className: "text-neutral-400",
    },
  ];
  return (
    <div className="">
      <BackgroundBeamsWithCollision>
        <TypewriterEffectSmooth words={words} />
        <div className=" w-80">
          
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
export default App;
