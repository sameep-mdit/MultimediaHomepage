import React from "react";
import { Text, Modal } from "@mantine/core";

type ModelCard = {
  isActive: boolean;
  closeHandler: () => void;
  children?: React.ReactNode;
  title?: string;
};

const ModelCard = ({ isActive, closeHandler, children, title }: ModelCard) => {
  return (
    <Modal
      color="dark"
      title={
        <Text className="text-lg font-semibold leading-none cursor-default">
          Title: {title}
        </Text>
      }
      opened={isActive}
      onClose={closeHandler}
      fullScreen
      transitionProps={{ transition: "fade", duration: 200 }}
    >
      <div className="p-4 grid w-full h-full justify-items-center bg-gray-900">
        {children}
      </div>
    </Modal>
  );
};

export default ModelCard;
