import { SwipeModalPublicMethods } from "@birdwingo/react-native-swipe-modal";
import { useRef, useState } from "react";

type modalProps = {
  title: string;
};

export const useBottomSheet = () => {
  const modalRef = useRef<SwipeModalPublicMethods>(null);
  const showModal = () => modalRef?.current?.show();
  const hideModal = () => modalRef?.current?.hide();
  const [modalTitle, setModalTitle] = useState<modalProps>({
    title: "",
  });

  return {
    modalRef,
    showModal,
    hideModal,
    modalTitle,
    setModalTitle,
  };
};
