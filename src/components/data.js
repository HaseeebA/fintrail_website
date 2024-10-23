import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/stocks.svg";
import benefitTwoImg from "../../public/img/crypto.png";

const benefitOne = {
  title: "Simplify Your Financial Life",
  desc: "FinTrail offers a streamlined way to manage your finances effortlessly, helping you track expenses, split bills, and monitor investments all in one place.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Automatic Expense Tracking",
      desc: "FinTrail reads bank SMS to track your expenses in real time, saving you time and effort.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Seamless Bill Splitting",
      desc: "Easily split expenses with friends or family without any hassle, ensuring transparency.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Real-Time Portfolio Updates",
      desc: "Keep an eye on your stock and crypto portfolios with up-to-date information on all your investments.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Unlock More Financial Features",
  desc: "FinTrail provides additional features designed to enhance your financial management experience. Enjoy a user-friendly interface and advanced functionalities.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile-Friendly Experience",
      desc: "FinTrail is optimized for mobile use, allowing you to manage your finances on the go.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Built with Flutter",
      desc: "Leverage the power of Flutter to enjoy a smooth and responsive user experience.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Light & Dark Mode",
      desc: "Switch between light and dark mode effortlessly to suit your preference and improve visibility.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
