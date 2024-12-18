import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { NavLink } from "react-router";

export const Header = () => {
  return (
    <header className="grid grid-cols-5 py-4">
      <h1>
        <NavigationButton to="/">블로그</NavigationButton>
      </h1>
      <nav className="col-span-3">
        <NavigationButton to="/fe">프론트엔드</NavigationButton>
        <NavigationButton to="/be">백엔드</NavigationButton>
        <NavigationButton to="/algo">알고리즘</NavigationButton>
        <NavigationButton to="/cs">컴퓨터과학</NavigationButton>
      </nav>

      <ul className="flex justify-end">
        <li>
          <NavigationButton to="/about">소개</NavigationButton>
        </li>
        <li>
          <ModeToggle />
        </li>
        <li>
          <Button variant="ghost" size="icon">
            <SearchIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </li>
      </ul>
    </header>
  );
};

export const NavigationButton = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Button
      asChild
      variant="ghost"
      className="text-base text-neutral-400 [&.active]:text-accent-foreground"
    >
      <NavLink to={to}>{children}</NavLink>
    </Button>
  );
};
