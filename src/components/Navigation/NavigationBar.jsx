import React, { useState } from "react";
import Logo from "../Dashboard/Logo.png";
import RightArrow from "../Dashboard/RightArrow.png";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircleIcon,
} from "lucide-react";

const navLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Activity",
    icon: Clock3,
  },
  {
    name: "Activity",
    icon: Clock3,
  },
  {
    name: "Activity",
    icon: Clock3,
  },
  {
    name: "Help Centre",
    icon: HelpCircleIcon,
  },
];

const variants = { expanded: { width: "20%" }, nonExpanded: { width: "5%" } };

const NavigationBar = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className="px-10 py-12 flex flex-col border border-r-1 w-1/5 h-screen relative"
    >
      <div className="logo-div flex space-x-3 items-center">
        <img src={Logo} alt="" />
        <span className={isExpanded ? "block" : "hidden"}>Docs Sub</span>
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-5 h-5 bg-[#AEA7F1] rounded-full absolute -right-[10.5px] top-16"
      >
        <img src={RightArrow} alt="" />
      </div>

      <div className="mt-9 flex flex-col space-y-8">
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={
              "flex space-x-3 p-2 rounded" +
              (activeNavIndex === index
                ? " bg-[#AEA7F1] text-white font-semibold"
                : " ")
            }
            onClick={() => setActiveNavIndex(index)}
          >
            <item.icon />
            <span>{item?.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default NavigationBar;
