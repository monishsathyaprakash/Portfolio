import { motion } from "framer-motion";
import Link from "next/link";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div>
          <div>
            Hello! I&apos;m Monish Sathyaprakash, an aspiring operations leader and
            digital aviation enthusiast with a passion for driving innovation
            through simulation, predictive maintenance, and cross-functional
            collaboration. I&apos;m currently pursuing an MSc in Aviation Digital
            Technology Management at Cranfield University, UK, and I hold a BSc in
            Aviation Transport from Riga Technical University, Latvia. I bring
            hands-on experience in aviation operations, having interned at
            airBaltic where I optimized interior maintenance workflows and
            streamlined inventory control. My technical toolkit includes Python,
            Power BI, AnyLogic, Blender, and JIRA, and I&apos;ve led impactful projects
            like a Smart Hangar Digital Twin and an Airbus AR training solution to
            enhance operational efficiency. With a strong foundation in systems
            thinking, data-driven decision-making, and aviation engineering
            principles, I&apos;m passionate about improving MRO processes, implementing
            digital transformation strategies, and advancing into leadership roles
            within aviation and manufacturing sectors.
            <br className="sm:block hidden" />
            Let&apos;s collaborate to bring your ideas to life!
          </div>

        </div>
        <div className="w-fit break-words">
          <Link
            href="mailto:monishs11@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
          >
            <EmailIcon className="w-[30px] h-[30px]" />
            monishs11@gmail.com
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <Link
          href="document/Monish_Sathyaprakash_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-white px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
