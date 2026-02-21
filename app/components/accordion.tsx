import Link from "next/link";

const accordionItems = [
  {
    id: 1,
    question: "What is Flowbite?",
    answer: (
      <>
        <p className="mb-2 text-gray-500">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
        <p className="text-gray-500">
          Check out this guide to learn how to{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            get started
          </Link>{" "}
          and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </>
    ),
  },
  {
    id: 2,
    question: "Is there a Figma file available?",
    answer: <p className="text-gray-500">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>,
  },
  {
    id: 3,
    question: "What are the differences between Flowbite and Tailwind UI?",
    answer: <p className="text-gray-500">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.</p>,
  },
];

export default function Accordion() {
  return (
    <section id="faq" className="py-16 scroll-mt-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Veelgestelde vragen</h2>
          <p className="mt-4 text-gray-600">Antwoorden op de meest voorkomende vragen.</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          {accordionItems.map((item, index) => (
            <div
              key={item.id}
              className={`
                border-b border-gray-200 last:border-b-0 
                ${index === 0 ? "rounded-t-xl" : ""} 
                ${index === accordionItems.length - 1 ? "rounded-b-xl" : ""}
              `}
            >
              <details className="group" open={index === 0}>
                <summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-gray-900 hover:bg-gray-100 focus:outline-none list-none [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg className="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                </summary>

                <div className="border-t border-gray-200 p-5 text-gray-500">{item.answer}</div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
