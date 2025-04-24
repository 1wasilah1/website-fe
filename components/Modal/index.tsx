import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import popUpImage from "../../public/images/popup/popup.png";

export default function ModalContent({ emitClickEvent }) {
  function handleClick(status) {
    emitClickEvent(status);
  }

  return (
    <div
      className="relative bg-slate-400 z-[9999]"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      id="modal"
    >
      <div
        className="fixed inset-0 bg-gray-500/90 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lgtext-left transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="flex justify-end">
              <MdOutlineClose
                className="text-black cursor-pointer"
                fontSize={32}
                onClick={() => handleClick(false)}
                id="modal-close"
              />
            </div>
            <div className="justify-items-center w-full relative">
              <Image
                id="modal-image"
                src={popUpImage}
                alt="Pop Up"
                className="w-full h-full top-0 left-0 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
