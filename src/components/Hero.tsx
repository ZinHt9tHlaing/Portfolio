// icons
import { ArrowDown, Download } from "lucide-react";

// components
import { ButtonPrimary } from "./buttons/ButtonPrimary";
import { ButtonOutline } from "./buttons/ButtonOutline";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div className="">
          <div className="flex items-center gap-3">
            <figure className="img-box size-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                alt="avatar"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative size-2 rounded-full bg-emerald-600">
                <span className="absolute inset-0 rounded-full bg-emerald-600 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch]lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon={<Download className="size-4" />}
              href="/public/ZInHtetHlaing_Resume.pdf"
              download={true}
              target="_blank"
            />
            <ButtonOutline
              href="/#about"
              label="Scroll down"
              icon={<ArrowDown className="size-4" />}
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/public/images/hero-banner.png"
              alt="Zin Htet"
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
