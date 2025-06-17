import omelette from "./assets/images/image-omelette.jpeg";
function App() {
  return (
    <>
      <div className="h-auto bg-[var(--stone-100)] flex justify-center items-center">
        <div className="w-full max-w-[800px] bg-white p-10 my-16 flex flex-col justify-center rounded-2xl">
          <img
            src={omelette}
            alt="omelette"
            className="w-full h-auto object-contain rounded-xl "
          />
          <p className=" text-4xl mt-8 text-[var(--stone-900)]">
            Simple Omelette Recipe
          </p>

          <p className="  text-[var(--stone-600)] tracking-wide mt-8">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          {/* Preparation */}
          <section className="text-[var(--stone-600)] mx-4 my-12 p-4 bg-[var(--rose-50)] space-y-4">
            <p className="text-[var(--rose-800)] font-semibold tracking-wide">
              Preparation time
            </p>
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

          {/* Ingredients */}
          <section className="mb-12">
            <p className="text-[var(--brown-800)] text-2xl mb-4 font-['Young_Serif']">
              Ingredients
            </p>
            <ul className=" ml-2 list-disc list-inside space-y-2 text-[var(--stone-600)]  ">
              <li>2–3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </section>

          {/* Instructions */}
          <section className="mb-12">
            <p className="text-[var(--brown-800)] text-2xl mb-4 font-['Young_Serif']">
              Instructions
            </p>
            <ol className="ml-6 list-decimal list-outside marker:text-[var(--brown-800)] marker:font-bold space-y-2 text-[var(--stone-600)] ">
              <li className="pl-3">
                <span className="font-bold">Beat the eggs:</span> In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li className="pl-3">
                <span className="font-bold">Heat the pan:</span> Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li className="pl-3">
                <span className="font-bold">Cook the omelette:</span> Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </li>
              <li className="pl-3">
                <span className="font-bold">Add fillings (optional):</span> When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </li>
              <li className="pl-3">
                <span className="font-bold">Fold and serve:</span> As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </li>
              <li className="pl-3">
                <span className="font-bold">Enjoy:</span> Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ol>
          </section>

          {/* Nutrition */}
          <section className="mb-12">
            <p className="text-[var(--brown-800)] text-2xl mb-2 font-['Young_Serif']">
              Nutrition
            </p>
            <p className="text-[var(--stone-600)] mb-4">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>

            <div className="w-full border-[var(--stone-300)] divide-y divide-[var(--stone-150)]  flex justify-between flex-col ">
              {[
                ["Calories", "277kcal"],
                ["Carbs", "0g"],
                ["Protein", "20g"],
                ["Fat", "22g"],
              ].map(([label, value], index) => (
                <div key={index} className="flex justify-left items-left py-3">
                  <span className="text-[var(--stone-600)] w-1/2 pl-4">
                    {label}
                  </span>
                  <span className="text-[var(--brown-800)] font-bold pr-4">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
