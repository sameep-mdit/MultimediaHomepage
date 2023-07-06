import React from "react";
import style from "./style.module.scss";

import { Text, Title, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const FOOTER_LINK_LIST = [
  { name: "Homepage", link: "/" },
  { name: "Campaign", link: "/contact" },
  { name: "Videos", link: "/videos" },
  { name: "Blogs", link: "/blogs" },
];

const FooterPage = () => {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <div className="grid bg-black">
      <div className="grid gap-8 sm:grid-cols-2 content-start  text-gray-50 p-6  text-sm">
        <div className="grid">
          <div onClick={refresh}>
            <Text className="font-bold text-orange-500	text-3xl cursor-pointer">
              LOGO
            </Text>
          </div>
          <Text className="max-w-lg  text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui
            nostrum nemo possimus tenetur quis at praesentium corporis odit
            distinctio beatae dicta, ipsa quasi natus enim rem repellendus.
          </Text>
        </div>
        <div className="grid gap-4 grid-cols-3">
          <div className="flex flex-col items-start w-full gap-1">
            <Title order={5}>Links</Title>
            {FOOTER_LINK_LIST?.map((item) => {
              return (
                <Link
                  key={item.name + item.link}
                  to={item.link}
                  className=" no-underline hover:bg-blue-700  text-gray-300"
                >
                  <Text>{item.name}</Text>
                </Link>
              );
            })}
          </div>

          <div className="w-full items-start flex flex-col gap-1">
            <Title order={5} className="font-semibold">
              Social Links
            </Title>
            <div>
              <Anchor href="https://www.facebook.com/" target="_blank">
                <Text className="text-gray-300">Facebook</Text>
              </Anchor>

              <Anchor href="https://www.instagram.com/" target="_blank">
                <Text className="text-gray-300">Instagram</Text>
              </Anchor>

              <Anchor href="https://www.Twitter.com/" target="_blank">
                <Text className="text-gray-300">Twitter</Text>
              </Anchor>

              <Anchor href="https://www.Linkedin.com/" target="_blank">
                <Text className="text-gray-300">Linked In</Text>
              </Anchor>
            </div>
          </div>
          <div className="w-full items-start flex flex-col justify-start gap-1">
            <Title order={5} className="font-semibold">
              Other
            </Title>
            <div className="text-gray-300">
              <Text>User Agreement</Text>
              <Text>Terms & Conditions</Text>
              <Text>Privacy Policies</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid justify-items-center gap-1 text-xs ">
        <div className="flex w-full bg-black text-gray-400 justify-center p-1 ">
          <Icon className="mt-1" icon="mingcute:copyright-line" />
          <Text>2023 Mr.Wanderer. All Rights Reserved.</Text>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
