import { useState } from "react";

const useDisclouse = () => {
  const [isOpen, setOpen] = useState(false); //for model

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return { onClose, onOpen, isOpen };
};

export default useDisclouse;
