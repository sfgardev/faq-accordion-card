import { useState } from "react";
import { AccordionItemType } from "./Accordion";

type Props = AccordionItemType;
export default function AccordionItem({ answer, question }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className="pb-4 border-b border-light-grayish-blue-clr cursor-pointer
      group"
    >
      <div className="flex justify-between items-center">
        <h2
          className={`text-sm text-very-dark-grayish-blue-clr ${
            isOpen ? "font-bold" : "font-normal"
          } transition group-hover:text-soft-red-clr`}
        >
          {question}
        </h2>
        <svg
          className={`${isOpen ? "rotate-180" : "rotate-0"} transition`}
          width="10"
          height="7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 .799l4 4 4-4"
            stroke="#F47B56"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <p
        className={`text-dark-grayish-blue-clr leading-normal pt-1 pr-6 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {answer}
      </p>
    </div>
  );
}
