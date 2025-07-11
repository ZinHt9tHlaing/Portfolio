import { ChevronRight } from "lucide-react";
import { ButtonPrimary } from "./buttons/ButtonPrimary";
import { sitemap, socials } from "../data/footer";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h1 className="headline-1 mb-8 lg:max-w-[12ch]">
              Passionate to start my dev journey!
            </h1>
            <ButtonPrimary
              href="mailto:zinhtethlaing4@gmail.com"
              label="Contact me"
              classes="group"
              icon={
                <ChevronRight className="size-4 mt-0.5 group-hover:translate-x-1 transition duration-300" />
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 font-semibold">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 font-semibold">Socials</p>
              <ul>
                {socials.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="#home">
            <img src="/images/logo.svg" width={40} height={40} alt="Logo" />
          </a>
          <p className="text-zinc-500">
            &copy; {date.getFullYear()}{" "}
            <span className="text-zinc-200">Zin Htet</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
