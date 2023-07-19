import React from "react";

import { imageURL } from "../../Blog/BlogCardSmall";
import { CapitalizeFirst } from "../../../../utils/string";

import style from "./style.module.scss";
import { Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../../constants/Strings";

interface IChannelcard {
  channelName: string;
  imageurl: string;
  // desc: string;
  socials?: Array<any>;
}

const ChannelCard: React.FC<IChannelcard> = ({ channelName, socials }) => {
  return (
    <div className={style.channelCard}>
      <div className="">
        <img
          src={imageURL}
          className="aspect-square w-28 rounded-full"
          alt=""
        />
      </div>
      <div className="w-full grid gap-4">
        <Title order={1} className="font-bold text-2xl text-center">
          {CapitalizeFirst(channelName)}
        </Title>
        {/* <Text> {desc} </Text> */}
        <div className="flex gap-2 justify-center">
          {socials?.map((item) => {
            return (
              <Link to={item.url} className="text-gray-100">
                <img
                  title={item.name ?? "link"}
                  className={style.image}
                  src={
                    baseUrl + "/uploads/" + item?.logo
                    //blogDetailPage?.blogCoverPhoto[0].coverphotoUrl
                  }
                  alt=""
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;
