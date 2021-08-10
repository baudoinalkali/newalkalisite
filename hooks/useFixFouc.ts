import { useEffect } from "react";

const BLOCK_FOUC_DELAY = 250;

const useFixFouc = () => {
  useEffect(() => {
    /* Prevent fouc (flash of unstyled component) and transition firing on load for firefox */
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, BLOCK_FOUC_DELAY));
      const preventFoucStyleTag = document.head.querySelector("#prevent-fouc");
      preventFoucStyleTag?.remove();
    })();
  }, []);

  return null;
};

export default useFixFouc;
