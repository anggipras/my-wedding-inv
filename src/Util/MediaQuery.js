import { useMediaQuery } from "react-responsive";

export default function MediaQuery() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  return {
    isMobile,
    isDesktop,
  };
}
