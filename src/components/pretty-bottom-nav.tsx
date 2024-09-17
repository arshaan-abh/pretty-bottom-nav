import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import NavItem from "@/interfaces/nav-item";
import featherClassName from "@/constants/feather-class-name";
import { cn } from "@/utils/cn";

interface PrettyBottomNavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  navItems: NavItem[];
}

const PrettyBottomNav: FC<PrettyBottomNavProps> = ({
  navItems,
  className,
  ...otherProps
}) => {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 flex justify-evenly rounded-t-pretty bg-white",
        featherClassName,
        className,
      )}
      {...otherProps}
    >
      {navItems.map((navItem, index) => (
        <a
          className="flex h-20 flex-col items-center justify-end pb-4"
          href={"#" + navItem.id}
          key={index}
        >
          <div
            className={`relative z-10 m-2 mt-8 rounded-full px-4 text-slate-400 transition-all duration-500 pretty-nav-icon-${index.toString()}`}
          >
            {navItem.icon}
          </div>
          <div className="flex w-0 animate-slide-in-up justify-center whitespace-nowrap text-xs font-medium text-slate-400">
            {navItem.name}
          </div>
        </a>
      ))}
      <div
        className="fixed bottom-[calc(1em+1rem)] flex w-full transition-transform duration-500"
        style={{
          transform: `translateX(calc(((100% - (4.2rem * 4)) / 5 * (var(--pretty-nav-index) + 1) + (4.2rem * var(--pretty-nav-index))) * -1))`,
        }}
      >
        <div className="h-[4.2rem] w-[4.2rem] rounded-full border-8 border-white bg-green-pretty" />
      </div>
    </div>
  );
};

export default PrettyBottomNav;
