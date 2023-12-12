export default function useHandleSectionHash() {
  const sections = document.querySelectorAll("section[section-id]");
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
        (scrollPosition < sectionTop + sectionHeight)
    ) {
      let newHash = section.getAttribute("section-id");


      if (newHash !== `${window.location.hash}`) {
        console.log(`changing ${window.location.hash} -> ${newHash}`);
        window.history.replaceState(
          null,
          null,
          newHash === "" ? " " : newHash
        );
      }
    }
  });
}
