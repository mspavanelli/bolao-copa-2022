import { Tab } from "@headlessui/react";
import { Fragment } from "react";

export function Dashboard() {
  return (
    <div className=" flex h-screen flex-col bg-stone-900 p-8 text-white">
      <Tab.Group>
        <Tab.Panels className="flex-1">
          <Tab.Panel>1</Tab.Panel>
          <Tab.Panel>2</Tab.Panel>
        </Tab.Panels>
        <Tab.List className="flex items-center justify-around rounded bg-stone-700">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "h-full w-full bg-stone-600 p-4 text-amber-400 outline-none"
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
                    ? "h-full w-full bg-stone-600 p-4 text-amber-400 outline-none"
                    : "h-full w-full bg-stone-700 p-4 text-stone-300 outline-none"
                }
              >
                Bolões
              </button>
            )}
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
