import React from "react";
import { imageURL } from "../../Blog/BlogCardSmall";

interface IChannelcard {
  channelName: string;
  imageurl: string;
  desc: string;
  socials?: Array<any>;
}

const ChannelCard: React.FC<IChannelcard> = ({
  channelName,
  imageurl,
  desc,
  socials,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex bg-slate-100 w-[360px] p-4 rounded-2xl hover:cursor-pointer">
        <div className="flex-1 bottom-1 border-red-400 first-letter: mr-2">
          <img src={imageURL} className="aspect-square rounded-full" alt="" />
        </div>
        <div className="flex-[2]">
          <h3 className="font-bold text-2xl">{channelName}</h3>
          <hr />
          {desc}
        </div>
      </div>
      {socials?.map((social) => {
        return <p>{social.name}</p>;
      })}
    </div>
  );
};

export default ChannelCard;
