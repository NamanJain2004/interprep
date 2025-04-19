import Link from "next/link";

import { ModeToggle } from "./ModeToggle";
import { UserCheck } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import UserRoleSwitcher from "./roleButton";
import DashboardBtn from "./DashBoardBtn";

function Navbar() {


  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <UserCheck className="size-8 text-purple-500" />
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
  Crack it!
</span>
        </Link>

        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
          <UserRoleSwitcher />
            <DashboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
export default Navbar;
