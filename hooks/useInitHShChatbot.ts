import { useEffect } from "react";

const useInitHShChatbot = ({ delayLoad = 5000 }) => {
  useEffect(() => {
    const timerId = setTimeout(function () {
      // @ts-ignore
      window.HubSpotConversations?.widget?.load?.();
    }, delayLoad);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return null;
};

export default useInitHShChatbot;
