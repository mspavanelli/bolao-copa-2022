import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { Polls } from "@/components/widgets/organisms/Polls";
import { Guesses } from "@/components/widgets/organisms/Guesses";

export function Dashboard() {
  return (
    <div className=" flex h-screen flex-col  bg-stone-900 p-8 text-white">
      <Tab.Group>
        <Tab.Panels className="mb-10 max-h-full flex-1 overflow-y-scroll">
          <Tab.Panel>
            <Guesses />
          </Tab.Panel>
          <Tab.Panel>
            <Polls />
          </Tab.Panel>
        </Tab.Panels>
        <Tab.List className="flex items-center justify-around rounded bg-stone-700">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "h-full w-full bg-stone-600 p-4 text-amber-300 outline-none"
                    : "h-full w-full bg-stone-700 p-4 text-stone-300 outline-none"
                }
              >
                Palpites
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "h-full w-full bg-stone-600 p-4 text-amber-300 outline-none"
                    : "h-full w-full bg-stone-700 p-4 text-stone-300 outline-none"
                }
              >
                Classificação
              </button>
            )}
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
