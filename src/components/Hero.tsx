import { Button } from "@/components/ui/button";
import pic_2 from "../../public/pic_1.png"
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-16 py-16 bg-white">
      {/* Left Content */}
      <div className="max-w-xl text-center lg:text-left">
        <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          ✅ Let's get Hired <a href="#" className="underline"></a>
        </span>
        <h1 className="text-5xl font-bold mt-4 text-gray-900 leading-tight">
          practice <br /> grow
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Get the best-in-class group stimulations of interviews.
        </p>
        <Button className="mt-6 px-6 py-3 text-lg font-semibold">crack it!</Button>
      </div>

      {/* Floating Profile Cards */}
      <div className="relative grid grid-cols-2 gap-4">
        {/* Card 1 */}
        <div className="w-32 h-40 bg-purple-200 rounded-xl flex items-center justify-center shadow-lg">
          <img src="/pic_1.png" alt="Profile 1" className="rounded-full w-24 h-24 object-cover" />
        </div>

        {/* Card 2 */}
        <div className="w-32 h-40 bg-blue-300 rounded-xl flex items-center justify-center shadow-lg relative">
          <img src="/pic_2.png" alt="Profile 2" className="rounded-full w-24 h-24 object-cover" />
        </div>

        {/* Card 3 */}
        <div className="w-32 h-40 bg-green-200 rounded-xl flex items-center justify-center shadow-lg">
          <img src="/pic_3.png" alt="Profile 3" className="rounded-full w-24 h-24 object-cover" />
        </div>

        {/* Card 4 - Large */}
        <div className="w-40 h-56 bg-yellow-300 rounded-xl flex items-center justify-center shadow-lg">
          <div className="text-center">
            <img src="/pic_4.png" alt="Brooklyn Simmons" className="rounded-full w-28 h-28 object-cover mx-auto" />
            <p className="mt-2 font-semibold">No worries!</p>
            <p className="text-sm text-gray-700">I am here</p>
          </div>
        </div>
      </div>
    </section>
  );
}

