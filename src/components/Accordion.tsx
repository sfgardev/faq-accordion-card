import womanMobile from "../assets/illustration-woman-online-mobile.svg";
import womanDesktop from "../assets/illustration-woman-online-desktop.svg";
import patternMobile from "../assets/bg-pattern-mobile.svg";
import patternDesktop from "../assets/bg-pattern-desktop.svg";
import box from "../assets/illustration-box-desktop.svg";
import AccordionItem from "./AccordionItem";

export type AccordionItemType = {
  id: string;
  answer: string;
  question: string;
};

type Props = {
  data: AccordionItemType[];
};

export default function Accordion({ data }: Props) {
  return (
    <article className="max-w-[60rem] w-full mx-auto bg-white grid rounded-2xl relative mt-36 sm:mt-0 sm:grid-cols-2 md:gap-4">
      <img
        className="hidden sm:absolute lg:block absolute left-[-100px] top-[170px] z-10"
        src={box}
        alt="Box"
      />
      <div className="relative pt-[7rem] sm:overflow-hidden sm:pt-0">
        <picture>
          <source srcSet={patternDesktop} media="(min-width: 640px)" />
          <img
            className="absolute top-0 left-0 right-0 m-auto sm:m-0 sm:left-[-100px] sm:bottom-[0] sm:top-auto sm:max-w-[120%] md:max-w-[130%] md:left-[-150px] md:bottom-[-50px] lg:max-w-[850px] lg:left-[-450px] lg:bottom-[-90px]"
            src={patternMobile}
            alt="Pattern"
          />
        </picture>
        <picture>
          <source srcSet={womanDesktop} media="(min-width:640px)" />
          <img
            className="absolute top-[-128px] left-0 right-0 m-auto w-[276px] sm:w-auto sm:left-[-50px] sm:bottom-[50px] sm:m-0 sm:top-auto sm:right-auto lg:left-[-70px] lg:top-[50px]"
            src={womanMobile}
            alt="Woman online"
          />
        </picture>
      </div>
      <div className="flex flex-col gap-10 px-6 pb-12 sm:pl-0 pt-12 sm:py-[5rem] sm:pr-16">
        <h1 className="text-center text-3xl font-bold sm:text-left">FAQ</h1>
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <AccordionItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </article>
  );
}
