import { createPortal } from "react-dom";
import styles from "./index.module.scss";
import clsx from "clsx";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  visible: boolean;
  bgClassName?: string;
  modalClassName?: string;
  closeByEscape?: boolean;
  closeOutside?: boolean;
  onClose?: () => void;
}
export const Modal = ({
  children,
  visible = false,
  bgClassName,
  modalClassName,
  closeByEscape = true,
  closeOutside = true,
  onClose = () => {},
}: Props) => {
  const backdropRef = useRef(null);
  useEffect(() => {
    if (!onClose || !visible) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (e.target === backdropRef.current) {
        onClose();
      }
    };

    if (closeByEscape) {
      window.addEventListener("keydown", onKeyDown);
    }

    if (closeOutside) {
      window.addEventListener("click", onClickOutside);
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("click", onClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (!visible) return null;
  return createPortal(
    <div
      className={clsx(styles.modal, bgClassName)}
      data-no-scroll
      ref={backdropRef}
    >
      <div className={clsx(styles.modalContent, modalClassName)}>
        {children}
      </div>
    </div>,
    document.body
  );
};
