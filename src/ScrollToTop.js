import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({scrollOptions=undefined}) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, ...scrollOptions});
  }, [pathname, scrollOptions]);

  return null;
}
