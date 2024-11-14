import React from "react";
import Link from "next/link"
import Image from "next/image";
import { Project } from "../../../types"

const ContentCard = (item:Project) => {
  return (
    <div className="grid grid-cols-12 gap-8 grid-flow-col hover:scale-105 transition-all">
      <div className="col-span-6">
        <Link href={"/detail/" + item.shortname}>
          <Image src={item.thumbnail} alt={"thumbnail-" + item.title} width={500} height={200}></Image>
        </Link>
      </div>
      <div className="col-span-6 flex flex-col justify-center">
        <h1 className="text-white font-bold text-lg">{item.title}</h1>
        <h2 className="text-white text-md">{"Role: " + item.role}</h2>
        <h3 className="text-xs hover:underline"><a href="">see more &gt;</a></h3>
      </div>
     </div>
  );
};
export default ContentCard;