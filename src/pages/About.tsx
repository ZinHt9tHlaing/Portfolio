const aboutItems = [
  {
    label: "Personal Projects",
    number: 4,
  },
  {
    label: "Learning Hours",
    number: 300,
  },
  {
    label: "Completed Courses",
    number: 3,
  },
  {
    label: "GitHub Repositories",
    number: 10,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hello! I&apos;m{" "}
            <span className="font-bold text-yellow-500">Zin Htet</span>, a
            motivated and enthusiastic Junior Web Developer with a strong
            interest in building modern, user-friendly web applications.
            I&apos;ve spent time learning and practicing web development through
            online courses, personal projects, and tutorials. I'm familiar with
            the MERN stack (MongoDB, Express.js, React, Node.js) and enjoy
            turning ideas into real web applications. I&apos;m committed to
            continuous learning and excited to contribute to real-world
            projects, grow with a team, and become a better developer every day.
            I believe that with the right attitude, curiosity, and consistency,
            I can learn fast and add value wherever I go.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, index) => (
              <div key={index}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-3xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
