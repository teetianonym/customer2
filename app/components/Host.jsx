import Image from "next/image";
import React from "react";
import { PiStudent } from "react-icons/pi";
import { IoIosPlayCircle } from "react-icons/io";
import { MdOutlineReviews } from "react-icons/md";

const Host = () => {
  return (
    <div className="border border-green-300 rounded-sm py-7 px-4 md:w-7/12 lg:w-8/12">
      <h1 className="text-center md:text-left text-2xl font-bold mb-5">
        Host infromation
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-row items-center gap-7 md:gap-0 md:items-start md:flex-col justify-center col-span-3 md:col-span-1 md:space-y-5">
          <Image
            className="flex rounded-full w-28 h-28 lg:w-40 lg:h-40"
            src={"/host.jpg"}
            alt="host"
            width={100}
            height={100}
          />
          <div>
            <div className="flex items-start space-x-2">
              <PiStudent className="text-lg" />
              <p>30,000 Students</p>
            </div>
            <div className="flex space-x-2 items-start lg:items-center">
              <IoIosPlayCircle />
              <p>5 Classes</p>
            </div>
            <div className="flex space-x-2 items-center">
              <MdOutlineReviews />
              <p>458 Reviews</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 col-span-3 md:col-span-2">
          <div>
            <h1 className="text-xl text-green-500">John Doe</h1>
            <p className="text-sm font-light">Marketing Specialist at Google</p>
          </div>
          <div>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              harum neque ullam, ab iste, aperiam nulla laudantium culpa
              consequatur debitis similique asperiores beatae iure deserunt enim
              <br />
              <br />
              itaque ex optio natus autem. Velit repellat fuga nihil
              consequuntur quibusdam tenetur voluptatem sunt, laudantium
              consectetur est culpa non?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Host;
