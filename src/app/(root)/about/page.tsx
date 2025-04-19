import Image from "next/image";
import { Linkedin, Github, Mail } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900">About <span className="text-blue-600">me</span></h1>
        <p className="mt-3 text-lg text-gray-600">
          Empowering innovation and redefining possibilities with technology.
        </p>
      </div>

      {/* Creator Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Image */}
        <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/my_image.png" // Replace with your image path
            alt="Creator Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Creator Info */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-900">Meet the Creator</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Hi, I'm <span className="text-blue-600 font-semibold">Ayush</span>, a passionate MERN stack developer and innovator.
            With expertise in AI-driven applications, web development, and problem-solving, I build scalable
            solutions that make a difference.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <a href="https://github.com/AyushSingh-Tomar" target="_blank" className="text-gray-600 hover:text-black transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ayush-singh-tomar-238264255/" target="_blank" className="text-gray-600 hover:text-blue-600 transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://6686bf2bbc2b251c13cc816f--ayush-singh-tomar.netlify.app/" className="text-gray-600 hover:text-red-500 transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">My Mission</h2>
        <p className="mt-3 text-gray-600 leading-relaxed">
          I aim to bridge the gap between technology and real-world applications, creating innovative solutions that impact industries.
        </p>
      </div>
    </section>
  );
}
