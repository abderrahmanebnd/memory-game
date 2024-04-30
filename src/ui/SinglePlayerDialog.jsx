import Button from "./Button";
import Result from "./Result";
import { useSelector } from "react-redux";

export function Overlay({ children }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-50"></div>
  );
}

function SinglePlayerDialog({ children }) {
  return (
    <>
      <Overlay />
      <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  min-w-96 h-[21rem] bg-white shadow-lg rounded-3xl z-50 p-8">
        <h1 className="font-semibold text-neutral-800 text-3xl text-center mb-3">
          You did it!
        </h1>
        <p className="text-center text-neutral-500 font-semibold text-sm mb-7">
          Game over! Here is how you got on...
        </p>
        <Result />
        <div className="flex items-center gap-3">
          <Button type="primary" role="start">
            Restart
          </Button>
          <Button role="newGame">New Game</Button>
        </div>
      </section>
    </>
  );
}

export default SinglePlayerDialog;
