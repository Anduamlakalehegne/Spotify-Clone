import data from "@/data";
import Image from "next/image";
import React from "react";

export default function AboutArtist() {
  return (
    <div className=" bg-zinc-500/10 rounded-xl relative grid grid-rows-2">
      <div className="w-full h-full relative">
        <Image
          src={data.song.artistInfo.aboutImage}
          className="object-cover rounded-t-xl"
          alt="Album cover"
          fill
        />
        <div className="p-4 font-semibold absolute inset-0 bg-gradient-to-b from-black/40 to-transparent rounded-t-xl">About the artist</div>
      </div>

      <div className="space-y-2 p-4">
        <span className="block font-semibold">{data.song.artistInfo.name}</span>
        <div className="flex justify-between items-center">
          <span className="text-lg text-dimmed">
            {data.song.artistInfo.listners} montlhy listners
          </span>
          <button className="border border-dimmed px-3 py-1 rounded-full">
            Follow
          </button>
        </div>
        <p className="text-sm text-dimmed">{data.song.artistInfo.description}</p>
      </div>
    </div>
  );
}
