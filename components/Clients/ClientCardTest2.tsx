import Link from "next/link";
import React from "react";
import Image from "../Image";

const ClientCardTest = (props) => {
  return (
    <Link href={`/clients/${props.slug}`} passHref>
      <a>
        <div
          className="relative group duration-500 rounded shadow-2xl px-4 pb-10 pt-10 m-auto client-card-bg flex flex-col justify-end overflow-hidden"
          style={{ height: "475px" }}
        >
          <div className="absolute inset-0">
            <Image aspectRatio={1.1285 / 1} src={props.backgroundImage} />
          </div>

          <div className="fix-fouc transition-none relative text-white">
            <div>{props.industry}</div>
            <div className="font-bold text-3xl xl:text-4xl">{props.name}</div>
          </div>

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 flex justify-center items-center"
            style={{ backgroundColor: `${props.backgroundColor}` }}
          >
            <div className="justify-center p-4 px-6 w-48 m-auto font-medium text-white hover:bg-white hover:bg-opacity-20 rounded-md transition duration-500 ease-in-out border border-white hidden group-hover:flex">
              View Project
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default React.memo(ClientCardTest);
