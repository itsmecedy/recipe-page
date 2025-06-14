import omelette from "./assets/images/image-omelette.jpeg";
function App() {
  return (
    <>
      <div className="h-screen bg-[var(--stone-100)] flex justify-center items-center">
        <div className="w-full max-w-[800px] bg-white p-10 flex flex-col         justify-center rounded-2xl">
          <img
            src={omelette}
            alt="omelette"
            className="w-full h-auto object-contain rounded-xl "
          />
          <p className=" text-4xl mt-8 text-[var(--stone-900)]">
            Simple Omelette Recipe
          </p>

          <p className=" font-[Outfit] text-[var(--stone-600)] tracking-wide mt-8">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <section className="text-[var(--stone-600)] m-4 p-4 bg-[var(--rose-50)] space-y-4">
            <p className="text-[var(--rose-800)]">Preparation time</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="text-[var(--stone-900)] font-semibold">
                  Total:
                </span>{" "}
                <span className="text-[var(--stone-600)]">
                  Approximately 10 minutes
                </span>
              </li>
              <li>
                <span className="text-[var(--stone-900)] font-semibold">
                  Preparation:
                </span>{" "}
                <span className="text-[var(--stone-600)]">5 minutes</span>
              </li>
              <li>
                <span className="text-[var(--stone-900)] font-semibold">
                  Cooking:
                </span>{" "}
                <span className="text-[var(--stone-600)]">5 minutes</span>
              </li>
            </ul>
          </section>
          <section>
            Instruction
            <div>test</div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
