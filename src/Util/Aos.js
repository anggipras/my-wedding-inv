import Aos from "aos";

export function AoS() {
  Aos.init({
    duration: 1000,
  });
  Aos.refresh();
}
