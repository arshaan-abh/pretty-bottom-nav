import type { FC } from "react";
import PrettyBottomNav from "@/components/pretty-bottom-nav";
import InitialRouteSet from "@/components/initial-route-set";
import DefineFeather from "@/components/define-feather";
import navItems from "@/constants/nav-items";

const Home: FC = () => {
  return (
    <>
      <InitialRouteSet />
      <DefineFeather />
      {navItems.map((navItem, index) => (
        <section
          id={navItem.id}
          data-pretty-nav-index={index}
          className={`w-screen shrink-0 grow-0 basis-full`}
          key={index}
        >
          {navItem.name}
        </section>
      ))}
      <PrettyBottomNav navItems={navItems} />
    </>
  );
};

export default Home;
