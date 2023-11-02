import { useEffect } from "react";
import image from "../assets/leon2.jpg";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
import Icons from "../assets/icons/Icons";

export default function Home() {
  useEffect(() => {
    gsap.to("#top", {
      duration: 1,
      text: "Welcome !",
      delay: 1,
    });
    return;
  });

  return (
    <>
      <div className=" flex flex-wrap justify-around mx-auto pt-14 app w-4/5">
        <div className="inset-0 pl-10 m-11 max-w-3xl">
          <h1 className="text-6xl font-semibold tracking-wider" id="top">
            .........
          </h1>
          <p className="mt-4 mr-8 text-justify">
            I'm Leon, a media computer science student from germany. I'm
            currently in my 3rd semester and focus in my studies on web and
            mobile development. Besides programming, I love to travel and
            explore new places.
          </p>
        </div>
        <div className="m-11">
          <img
            src={image}
            alt="Picture of me with a coffee"
            width="350"
            height="auto"
            className="inline rounded-full border-2 transition hover:border-accent-color "
          />
        </div>
      </div>
      <div className="mx-auto app w-4/5 pt-10">
        <Icons />
      </div>
    </>
  );
}
