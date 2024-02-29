import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { SiGrammarly } from "react-icons/si";
import { MdQuiz } from "react-icons/md";
import { SiStudyverse } from "react-icons/si";
import { IoBarChartSharp } from "react-icons/io5";
import { GrTable } from "react-icons/gr";
import React from "react";

export const privateLists = [
  {
    name: "Dashboard",
    url: "",
    subMenu: [
      {
        name: "Grammar",
        url: "/menu/grammar",
        icon: React.createElement(SiGrammarly),
      },
      {
        name: "Quiz",
        url: "/menu/quiz",
        icon: React.createElement(MdQuiz),
      },
      {
        name: "Practice",
        url: "/menu/practice",
        icon: React.createElement(SiStudyverse),
      },
    ],
    icon: React.createElement(MdDashboard),
  },
  {
    name: "Profile",
    url: "",
    subMenu: [
      {
        name: "Grammar",
        url: "/menu/grammar",
        icon: React.createElement(SiGrammarly),
      },
      {
        name: "Quiz",
        url: "/menu/quiz",
        icon: React.createElement(MdQuiz),
      },
      {
        name: "Practice",
        url: "/menu/practice",
        icon: React.createElement(SiStudyverse),
      },
    ],
    icon: React.createElement(CgProfile),
  },
  {
    name: "Tables",
    url: "/menu/tables",
    subMenu: [],
    icon: React.createElement(GrTable),
  },
  {
    name: "Charts",
    url: "/menu/charts",
    subMenu: [],
    icon: React.createElement(IoBarChartSharp),
  },
];
