import { Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import { LOGO_IMG } from "../Navbar";

import style from "./style.module.scss";

const FOOTER_LINK_LIST = [
  { name: "Homepage", link: "/" },
  { name: "Campaign", link: "/contact" },
  { name: "Videos", link: "/videos" },
  { name: "Blogs", link: "/blogs" },
];

const FooterPage = () => {
  return (
    <div className="grid bg-black px-16">
      <div className="grid gap-8 sm:grid-cols-2 content-start  text-gray-50 p-6  text-sm">
        {/* </div> <div className="flex-1 px-4 py-1 text-orange-800 flex justify-between font-bold md:px-[20vh]   items-center bg-black sticky top-0 z-50"> */}
        <div className="grid gap-2 px-4 flex-1 top-0 py-2 ">
          <div className="flex gap-4 items-center h-full ">
            <img src={LOGO_IMG} alt="" className="h-10 w-auto" />
            <Text className="text-4xl font-bold  hover:text-yellow-300">
              Mr.Wanderer
            </Text>
          </div>

          <Text className="max-w-lg px-16 text-sm font-thin  text-gray-300 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui
            nostrum nemo possimus tenetur quis at praesentium corporis odit
            distinctio beatae dicta, ipsa quasi natus enim rem repellendus.
          </Text>
        </div>
        <div className="grid gap-4 grid-cols-3">
          <div className="flex flex-col items-start w-full gap-1">
            <Title order={5}>Links</Title>
            <div className="grid gap-2 mt-2">
              {FOOTER_LINK_LIST?.map((item) => {
                return (
                  <Link
                    key={item.name + item.link}
                    to={item.link}
                    className={style.link}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="w-full items-start flex flex-col gap-1">
            <Title order={5} className="font-semibold">
              Social Links
            </Title>
            <div className="grid gap-2 mt-2">
              <a
                className={style.link}
                href="https://www.facebook.com/"
                target="_blank"
              >
                Facebook
              </a>

              <a
                className={style.link}
                href="https://www.instagram.com/"
                target="_blank"
              >
                Instagram
              </a>

              <a
                className={style.link}
                href="https://www.Twitter.com/"
                target="_blank"
              >
                Twitter
              </a>

              <a
                className={style.link}
                href="https://www.Linkedin.com/"
                target="_blank"
              >
                Linked In
              </a>
            </div>
          </div>
          <div className="w-full items-start flex flex-col justify-start gap-1">
            <Title order={5} className="font-semibold">
              Other
            </Title>
            <div className="grid gap-2">
              <div className={style.link}> User Agreement</div>
              <div className={style.link}>Terms & Conditions</div>
              <div className={style.link}>Privacy Policies</div>
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
