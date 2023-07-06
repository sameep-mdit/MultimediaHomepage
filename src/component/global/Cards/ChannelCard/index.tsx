import React from "react";
import { imageURL } from "../../Blog/BlogCardSmall";

interface IChannelcard {
  channelName: string;
  imageurl: string;
  // desc: string;
  socials?: Array<any>;
}

const ChannelCard: React.FC<IChannelcard> = ({
  channelName,
  imageurl,

  socials,
}) => {
  return (
    <div className="flex gap-4 bg-slate-100  p-4 rounded-2xl hover:cursor-pointer ">
      <div className="border-red-400 first-letter: mr-2">
        <img
          src={imageURL}
          className="aspect-square w-14 rounded-full"
          alt=""
        />
      </div>
      <div className="w-full grid gap-2">
        <div>
          <h3 className="font-bold text-2xl">{channelName}</h3>
          {/* <Text> {desc} </Text> */}
          <div className=" gap-4"> {socials}</div>
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;
