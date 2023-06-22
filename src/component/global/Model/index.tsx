import React from "react";
import { Text } from "@mantine/core";

type ModelCard = {
  isActive: boolean;
  closeHandler: () => void;
  children?: React.ReactNode;
  title?: string;
};

const ModelCard = ({ isActive, closeHandler, children, title }: ModelCard) => {
  return isActive ? (
    <section className="fixed top-0 left-0 overflow-hidden z-50 w-screen h-screen">
      <div className="flex justify-center items-center h-full w-full relative">
        <div
          className="absolute w-full h-full bg-black opacity-75 cursor-default"
          onClick={closeHandler}
        ></div>
        <div className="z-30 rounded grid">
          {children}
          {title && (
            <Text className="text-white cursor-default text-center font-normal ">
              Title: {title}
            </Text>
          )}
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default ModelCard;
