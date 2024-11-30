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
    <div className="">
      <BackgroundBeamsWithCollision>
        <TypewriterEffectSmooth words={words} />
        <div className=" w-80">
          {CardsData.map((data, idx) => (
            <div id={idx} className="card">
              {data.title}
              <a href={data.link} type="application/pdf" target="_blank">Link</a>
            </div>
          ))}
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
export default App;
