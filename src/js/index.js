
(function () {
  function clearNavLinksState(links) {
    return links.map((link) => link.classList.remove("app__nav_link--active"));
  }

  function handleNavLinkClick(links, target) {
    clearNavLinksState(links);
    window.setTimeout(() => {
      target.classList.add("app__nav_link--active");
    }, 50);
    return 0;
  }

  const NAV_LINKS = [...document.querySelectorAll(`.app__nav_link`)];
  NAV_LINKS.forEach((clickedLink) => {
    clickedLink.addEventListener("click", () => {
      handleNavLinkClick(NAV_LINKS, clickedLink);
    });
  });
})();