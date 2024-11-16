import React from "react";
import Link from "next/link"
import Image from "next/image";

interface CardItem{
  thumbnail:string;
  title:string;
  shortname:string;
  role:string;
}

const ContentCard = ({thumbnail,title,shortname,role}:CardItem) => {
  return (
    <div className="grid grid-cols-12 gap-8 grid-flow-col hover:scale-105 transition-all">
      <div className="col-span-2"></div>
      <div className="col-span-4">
        <Link href={"/detail/" + shortname}>
          <Image src={thumbnail} alt={"thumbnail-" + title} width={500} height={200}></Image>
        </Link>
      </div>
      <div className="col-span-4 flex flex-col justify-center">
        <h1 className="text-white font-bold text-lg">{title}</h1>
        <h2 className="text-white text-md">{"Role: " + role}</h2>
        <h3 className="text-xs hover:underline"><a href="">see more &gt;</a></h3>
      </div>
      <div className="col-span-2"></div>
     </div>
  );
};
export default ContentCard;