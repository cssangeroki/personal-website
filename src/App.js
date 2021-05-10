import Typewriter from "typewriter-effect";
import "./App.css";

function App() {
  return (
    <div>
      <Typewriter
        // options={{
        //   strings: ["coming", "soon"],
        //   autoStart: true,
        //   loop: true,
        //   deleteSpeed: 200,
        //   delay: 400,
        // }}
        onInit={(typewriter) => {
          typewriter
            .changeDelay(200)
            .typeString("comu")
            .pauseFor(400)
            .deleteChars(1)
            .changeDelay(200)
            .typeString("ingh soo")
            .pauseFor(200)
            .deleteChars(5)
            .changeDelay(100)
            .typeString(" aion")
            .pauseFor(300)
            .deleteAll()
            .changeDelay(30)
            .typeString("ASDHKAJSHDZ")
            .deleteAll()
            .pauseFor(1000)
            .changeDelay(90)
            .typeString("coming")
            .changeDelay(300)
            .typeString(" soon")
            .start();
        }}
      />
    </div>
  );
}

export default App;
