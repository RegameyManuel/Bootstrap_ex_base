function updateScreenSizeLabel() {
    var width = window.innerWidth;
    var label = "Taille de l'écran: " + width + "px - ";

    if (width >= 1400) {
        label += "xxl";
    } else if (width >= 1200) {
        label += "xl";
    } else if (width >= 992) {
        label += "lg";
    } else if (width >= 768) {
        label += "md";
    } else if (width >= 576) {
        label += "sm";
    } else {
        label += "xs";
    }

    document.getElementById("screen-size-label").textContent = label;
}

// Mettre à jour le label lorsque la page est chargée
updateScreenSizeLabel();

// Mettre à jour le label lorsque la fenêtre est redimensionnée
window.onresize = updateScreenSizeLabel;