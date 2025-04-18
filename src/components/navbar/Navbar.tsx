import { AlignJustify, Menu, X } from "lucide-react";
import logoimg from "../../assets/logoimg.avif";
import { Button } from "../ui/button";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
interface INavItems {
  name: string;
  url: string;
  id: string;
  //   id: string;
  //   component: string;
}
const NavItems: INavItems[] = [
  { name: "Features", url: "#features", id: "features" },
  { name: "Team", url: "#team", id: "team" },
  { name: "Testimonial", url: "#testimonial", id: "testimonial" },
  { name: "FAQ", url: "#faq", id: "faq" },
];
export default function Navbar() {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: "50px" },
        visible: { opacity: 1, y: 0 },
      }}
      className={`fixed top-[64px] z-[100] w-full bg-neutral-0 font-inter flex justify-between border-b border border-neutral-10 h-16  lg:px-20 px-6 `}
    >
      <a
      
        href="#"
        className="flex  justify-center items-center gap-2"
      >
        <img src={logoimg} className="w-10 h-10" />
        <div className="md:text-xl">ByteSky</div>
      </a>
      <div
        className={` ${
          openNavigation ? "flex" : "md:flex hidden"
        } gap-4 items-center flex`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0 }}
          variants={{
            hidden: { opacity: 0, y: isMobile ? "-20px" : "0px" },
            visible: { opacity: 1, y: 0 },
          }}
          className="md:relative flex flex-col items-center justify-center gap-6 m-auto md:flex-row bg-white w-full fixed right-0  md:py-0 top-32 md:top-0 py-4 md:border-none  border-b border-neutral-20 rounded transition-all delay-100"
        >
          {NavItems.map((item, i) => (
            <a
             
              href={item.url}
              key={i}
              onClick={handleClick}
              className={`${
                item.url === pathname.hash
                  ? "text-neutral-60"
                  : "hover:text-neutral-40 text-neutral-100"
              } md:w-fit   transition-all `}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://calendly.com/abhiraj-bytesky/introductory-call"
            target="_blank"
          >
            <Button className="ml-4">Contact Us</Button>
          </a>
        </motion.div>
      </div>

      {openNavigation ? (
        <X
          className="text-neutral-40 flex items-center w-8 h-full md:hidden"
          fill="none"
          onClick={toggleNavigation}
        />
      ) : (
        <AlignJustify
          className="text-neutral-40 flex items-center w-8 h-full md:hidden"
          fill="none"
          onClick={toggleNavigation}
        />
      )}
    </motion.div>
  );
}

export const HamburgerMenu = () => {
  return (
    <div className="absolute  top-[100px] right-2 z-[100] pointer-events-none block lg:hidden">
      <Menu />
    </div>
  );
};
