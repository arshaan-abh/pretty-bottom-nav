import NavItem from "@/interfaces/nav-item";
import LineMdPlus from "~icons/line-md/plus.jsx";
import LineMdTextBox from "~icons/line-md/text-box.jsx";
import LineMdSpeedometerLoop from "~icons/line-md/speedometer-loop.jsx";
import LineMdEmail from "~icons/line-md/email.jsx";

const navItems: NavItem[] = [
  { id: "new-story", name: "قصه تازه", icon: <LineMdPlus /> },
  { id: "old-stories", name: "قصه‌های قدیمی", icon: <LineMdTextBox /> },
  { id: "account", name: "حساب شما", icon: <LineMdSpeedometerLoop /> },
  { id: "blog", name: "پیام‌ها", icon: <LineMdEmail /> },
];

export default navItems;
