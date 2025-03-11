function goToMenu() {
    window.location.href = "/Accueil/index.html";
  }

  function goToCours() {
    window.location.href = "/Cours/cours.html";
}

  function loadVideo(container) {
    let videoId = container.parentElement.getAttribute("data-video-id");
    let iframe = document.createElement("iframe");
    
    iframe.setAttribute("width", "560");
    iframe.setAttribute("height", "315");
    iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    iframe.setAttribute("allowfullscreen", "true");

    container.parentElement.replaceChild(iframe, container);
}