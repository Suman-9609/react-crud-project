import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Model = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="min-h-[370px] max-w-[80%] bg-white z-50 relative p-4 m-auto">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="text-xl self-end cursor-pointer"
              />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="h-screen w-screen absolute top-0 left-0 z-40 backdrop-blur"
          ></div>
        </>
      )}
    </>,
    document.getElementById("modal-root")
 );
};

export default Model;
