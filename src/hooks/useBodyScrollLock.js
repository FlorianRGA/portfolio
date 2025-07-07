import { useRef, useEffect } from "react";
export default function useBodyScrollLock(isOpen, isMobile) {
  const scrollPos = useRef(window.scrollY);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    const nav = document.getElementsByTagName("nav")[0];
    console.log(scrollPos.current);
    if (!isMobile) {
      body.classList.remove("body--locked");
      nav.style.top = "";
      body.style.top = "";
      nav.style.position = "";
      return;
    }

    if (isOpen) {
      scrollPos.current = window.scrollY;
      nav.style.top = `${scrollPos.current}px`;
      nav.style.position = "relative";
      body.classList.add("body--locked");
      body.style.top = `-${scrollPos.current}px`;
    } else {
      body.classList.remove("body--locked");
      nav.style.top = "";
      body.style.top = "";
      nav.style.position = "fixed";
      window.scrollTo(0, scrollPos.current);
    }
  }, [isOpen, isMobile]);
}
