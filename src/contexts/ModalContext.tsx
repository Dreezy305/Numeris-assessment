/* eslint-disable react-refresh/only-export-components */
import { CloseOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
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

  //   bodyStyle={{ height: "300px", overflowY: "auto" }}

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
        styles={{
          content: { position: "relative" },
        }}
        cancelButtonProps={{ style: { position: "absolute" } }}
        className="px-4"
        closeIcon={
          <div className="bg-white">
            <CloseOutlined />
          </div>
        }
      >
        <>{modalContent}</>
      </Modal>
    </ModalContext.Provider>
  );
};
