import React from 'react';
import { motion, Variants } from 'framer-motion';
import logoW from './../images/logoW.svg';
import Insta from './utils/Insta';
import Pinterest from './utils/Pinterest';
import Twitter from './utils/Twitter';
import Facebook from './utils/Facebook';

const listVariants: Variants = {
  hover: {
    scale: [1, 1.05, 1.25, 1.1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};

const menuItems: { title: string; links: string[] }[] = [
  {
    title: 'Features',
    links: ['Link Shortening', 'Branded Links', 'Analytics'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Developers', 'Support'],
  },
  {
    title: 'Company',
    links: ['About', 'Our Team', 'Careers', 'Contact'],
  },
];

type FooterSectionProps = {
  title: string;
  links: string[];
};

// type FooterProps = {
//   section: {};
// };

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <ul className="flex flex-col justify-center items-center lg:items-start gap-4">
    <li className="font-bold text-white mb-16M">
      <h2>{title}</h2>
    </li>
    {links.map((link, index) => (
      <motion.li
        key={index}
        className="hover:text-cyan-500 cursor-pointer"
        variants={listVariants}
        initial={{ scale: 1 }}
        whileHover="hover"
      >
        {link}
      </motion.li>
    ))}
  </ul>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-very-dark-violet">
      <div className="max-w-container-1440 mx-auto flex flex-col lg:flex-row justify-start lg:justify-around items-center lg:items-start gap-12 py-48P">
        {/* Floating Logo Animation */}
        <motion.img
          src={logoW}
          aria-hidden="true"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            repeatType: 'mirror',
            duration: 2,
            repeat: Infinity,
          }}
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.5}
        />

        {/* Footer Content */}
        <motion.div
          className="flex flex-col lg:flex-row justify-start items-center lg:items-start gap-12 lg:gap-16"
          initial={{ opacity: 0, x: '50dvw' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          {menuItems.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}

          {/* Social Links */}
          <ul className="flex justify-center items-center gap-6">
            <li>
              <Facebook />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Pinterest />
            </li>
            <li>
              <Insta />
            </li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
