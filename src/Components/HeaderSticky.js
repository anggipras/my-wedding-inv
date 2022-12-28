import "../App.css";
import { useEffect } from "react";

function HeaderSticky() {
  useEffect(() => {
    window.onscroll = () => {
      let header = document.getElementById("headerSticky");
      let hideHeader = document.getElementById("event-date");
      let sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        if (window.pageYOffset > hideHeader.offsetHeight) {
          header.classList.add("hideHeader");
        } else {
          header.classList.remove("hideHeader");
        }
      } else {
        header.classList.remove("sticky");
      }
    };
  }, []);

  return (
    <div className="header-sticky" id="headerSticky">
      <div className="header-sticky-title">The Wedding Of</div>
      <div className="header-sticky-content">Anggi & Golda</div>
    </div>
  );
}

export default HeaderSticky;
