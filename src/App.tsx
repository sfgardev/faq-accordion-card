import Accordion from "./components/Accordion";
import data from "../data/data.json";

function App() {
  return (
    <main className="min-h-screen p-8 sm:p-16 bg-gradient-to-t from-soft-blue-clr to-soft-violet-clr font-kumb-sans text-xs lg:px-16 sm:grid sm:place-items-center">
      <Accordion data={data} />
    </main>
  );
}

export default App;
