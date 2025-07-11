import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { socialLinks } from "../data/contact";
import { contactSchema } from "../schema/contactSchema";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

type ContactFormInputs = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      await axios.post("https://getform.io/f/bwnwddya", data, {
        validateStatus: () => true,
      });
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Form submission error", error);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
            Contact me for collaboration
          </h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </p>

          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                className="size-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50  hover:text-zinc-950 active:bg-zinc-50/80 duration-200 reveal-up"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <form className="xl:pl-10 2xl:pl-20" onSubmit={handleSubmit(onSubmit)}>
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                Name
              </label>
              <input
                type="text"
                id="name"
                autoComplete="name"
                placeholder="Zin Htet"
                className="text-field reveal-up"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                Email
              </label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                placeholder="zhh@example.com"
                className="text-field reveal-up"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4 md:col-span-2">
              <label htmlFor="message" className="label reveal-up">
                Message
              </label>
              <textarea
                id="message"
                autoComplete="message"
                placeholder="Hi!"
                className="text-field reveal-up resize-y min-h-32 max-h-80"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary  md:col-span-2 [&]:max-w-full w-full justify-center disabled:cursor-not-allowed disabled:bg-gray-600 active:scale-90 duration-200 reveal-up"
            >
              {isSubmitting && (
                <div className="size-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              )}
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
