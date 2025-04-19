import { Facebook, Twitter, Instagram, Linkedin ,Github } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Brand & Description */}
        <div>
          <h2 className="text-3xl font-bold">Crack It</h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Empowering your journey with knowledge and insights. Join us in shaping the future.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
            <Link href={"/about"}>
      <Button className="gap-2 font-medium" size={"sm"}>
        About
      </Button>
    </Link>
    </li>
    <li>
            <Link href={"/"}>
      <Button className="gap-2 font-medium" size={"sm"}>
        Home
      </Button>
    </Link>
    </li>
    <li>
            <Link href={"https://6686bf2bbc2b251c13cc816f--ayush-singh-tomar.netlify.app/"}>
      <Button className="gap-2 font-medium" size={"sm"}>
        Contact
      </Button>
    </Link>
    </li>


          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-6 mt-3">
            <a href="https://www.facebook.com/people/Ayush-Tomar/pfbid07asvnkycZNPhFJbXPeDFdzsZx9o7bzzn5i6WpNWbAJ5Y5xQAmeHWVuyFzcrxLPfQl/" className="text-gray-400 hover:text-white transition duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://github.com/AyushSingh-Tomar" className="text-gray-400 hover:text-white transition duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ayush-singh-tomar-238264255/" className="text-gray-400 hover:text-white transition duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Crack It. All rights reserved.
      </div>
    </footer>
  );
}

