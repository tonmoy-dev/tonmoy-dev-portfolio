import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";
import { FlipWords } from "./ui/FlipWords";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import {
  wordsForFlipping,
  wordsForTextGenerateEffect,
  wordsForTyping,
} from "@/data/heroData";

const HeroArea = () => {
  return (
    <>
      <div>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-violet-900/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="flex justify-center relative mb-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Transforming Ideas into Digital Reality
            </p>

            <div className="text-center md:tracking-wider text-[40px] md:text-5xl lg:text-6xl">
              <TypewriterEffectSmooth words={wordsForTyping} />
            </div>

            <TextGenerateEffect
              words={wordsForTextGenerateEffect}
              className="text-center text-2xl font-normal"
            />
            <div className="text-4xl mx-auto font-normal text-center mb-12">
              A
              <FlipWords words={wordsForFlipping} className="text-primary" />
              Developer.
            </div>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Check out my resume</span>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;
