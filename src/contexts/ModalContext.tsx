/* eslint-disable react-refresh/only-export-components */
import { Modal } from "antd";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface ModalContextType {
  openModal: (
    content: ReactNode,
    title?: string | ReactNode,
    width?: number,
    closable?: boolean | false
  ) => void;
  closeModal: () => void;
  setTitle?: any;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const modalRef: any = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [modalTitle, setModalTitle] = useState<ReactNode | string>("");
  const [modalWidth, setModalWidth] = useState<number | any>(520);
  const [isClosable, setClosable] = useState<boolean>(false);

  const openModal = useCallback(
    (
      content: ReactNode,
      title: ReactNode,
      width?: number | any,
      closable?: boolean | false
    ) => {
      setModalContent(content);
      setModalTitle(title);
      setIsVisible(true);
      if (width) {
        setModalWidth(width);
      }
      setClosable(closable as boolean);
    },
    []
  );

  const closeModal = useCallback(() => {
    setIsVisible(false);
    setModalContent(null);
    setModalTitle("");
    setClosable(false);
  }, []);

  const setTitle = useCallback((newTitle?: ReactNode | string) => {
    if (newTitle) {
      setModalTitle(newTitle);
    } else {
      setModalTitle(null);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Access the modal mask (overlay)
      const modalMask: any = document.querySelector(".ant-modal-mask");

      console.log(modalMask, "j");

      if (modalMask) {
        // Create a custom close button
        const customCloseBtn: any = document.createElement("div");
        customCloseBtn.className = "custom-close-btn";
        customCloseBtn.innerHTML = `
          <span role="img" aria-label="close" class="anticon anticon-close text-2xl">
            <svg
              fill-rule="evenodd"
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="close"
              width="2em"
              height="2em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
            </svg>
          </span>
        `;

        // Add click event to the button to close the modal
        customCloseBtn.onclick = closeModal();

        // Style the button (e.g., position it in the top right corner of the mask)
        customCloseBtn.style.position = "fixed";
        customCloseBtn.style.top = "-15%";
        customCloseBtn.style.right = "1%";
        customCloseBtn.style.zIndex = "1050"; // Higher z-index to appear on top

        // Append the button to the modal mask
        modalMask.current.appendChild(customCloseBtn);
      }

      // Cleanup: Remove the custom close button when modal is closed
      return () => {
        const existingCustomCloseBtn =
          document.querySelector(".custom-close-btn");
        if (existingCustomCloseBtn) {
          existingCustomCloseBtn.remove();
        }
      };
    }
  }, [closeModal, isVisible]);

  console.log(modalRef);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, setTitle }}>
      {children}
      <Modal
        open={isVisible}
        title={modalTitle}
        onCancel={closeModal}
        onClose={closeModal}
        destroyOnClose
        centered={false}
        footer={null}
        width={modalWidth}
        closable={isClosable}
        bodyProps={{}}
        maskClosable
        styles={
          {
            // content: { position: "relative" },
          }
        }
        cancelButtonProps={{ style: { position: "absolute" } }}
        className="px-4 custom-modal"
        // closeIcon={
        //   <div className="bg-white custom-close-btn">
        //     <CloseOutlined />
        //   </div>
        // }
      >
        {/* <div className="bg-white custom-close-btn" onClick={closeModal}>
          <CloseOutlined className="text-2xl" />
        </div> */}
        <>{modalContent}</>
      </Modal>
    </ModalContext.Provider>
  );
};
