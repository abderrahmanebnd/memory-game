import Logo from "../ui/Logo";
import StartSection from "../ui/StartSection";

function Homepage() {
  return (
    <main className="bg-neutral-800 min-h-dvh flex flex-col items-center justify-center gap-7">
      <Logo />
      <StartSection />
    </main>
  );
}

export default Homepage;
