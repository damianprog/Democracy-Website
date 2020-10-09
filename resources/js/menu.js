(() => {
    const menuContainer = document.querySelector(".hamburger-menu div");

    document.querySelectorAll(".hamburger-menu span").forEach(icon => {
        icon.addEventListener("click", () => {
            const menuOffsetRight = getComputedStyle(menuContainer).getPropertyValue("right");
            menuContainer.style.right = menuOffsetRight == "-300px" ? "0" : "-300px";
        })
    });
})();