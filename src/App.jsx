import { Analytics } from "@vercel/analytics/react";
import { BackgroundBeamsWithCollision } from "./components/ui/background-effect2";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import CardsData from "./utils/cards-data";

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
  console.log(CardsData);

  return (
    <>
      <Analytics />
      <BackgroundBeamsWithCollision>
        <TypewriterEffectSmooth words={words} />
        <div className=" w-80">
          {CardsData.map((data, idx) => (
            <div id={idx} className="card flex justify-between">
              <p>{data.title}</p>
              <a href={data.link} type="application/pdf" target="_blank">
                Link
              </a>
            </div>
          ))}
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}
export default App;
