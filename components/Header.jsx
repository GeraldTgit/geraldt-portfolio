import Link from "next/link";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

//components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Gerald Dave<span className="text-accent">.</span>
          </h1>
        </Link>
        {/*desktop nav and hire me button*/}
        <div className="hidden xl:flex items-start gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
