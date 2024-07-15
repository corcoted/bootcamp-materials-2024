window.revealMenuToolHandler = function (handler) {
  return function (event) {
    event.preventDefault();
    handler();
    Reveal.getPlugin("menu").closeMenu();
  };
};

window.RevealMenuToolHandlers = {
  fullscreen: revealMenuToolHandler(function () {
    const element = document.documentElement;
    const requestMethod =
      element.requestFullscreen ||
      element.webkitRequestFullscreen ||
      element.webkitRequestFullScreen ||
      element.mozRequestFullScreen ||
      element.msRequestFullscreen;
    if (requestMethod) {
      requestMethod.apply(element);
    }
  }),
  speakerMode: revealMenuToolHandler(function () {
    Reveal.getPlugin("notes").open();
  }),
  keyboardHelp: revealMenuToolHandler(function () {
    Reveal.toggleHelp(true);
  }),
  overview: revealMenuToolHandler(function () {
    Reveal.toggleOverview(true);
  }),
  toggleChalkboard: revealMenuToolHandler(function () {
    RevealChalkboard.toggleChalkboard();
  }),
  toggleNotesCanvas: revealMenuToolHandler(function () {
    RevealChalkboard.toggleNotesCanvas();
  }),
  downloadDrawings: revealMenuToolHandler(function () {
    RevealChalkboard.download();
  }),
<<<<<<< HEAD
  togglePdfExport: revealMenuToolHandler(function () {
    PdfExport.togglePdfExport();
  }),
=======
>>>>>>> b15cd9ae81126c43ea9081346b6d3df3e5fe1eff
};
