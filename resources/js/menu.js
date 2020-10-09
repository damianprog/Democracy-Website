(() => {
    const menuContainer = document.querySelector("nav div");

    document.querySelectorAll("nav span").forEach(icon => {
        icon.addEventListener("click", () => {
            const menuOffsetRight = getComputedStyle(menuContainer).getPropertyValue("right");
            menuContainer.style.right = menuOffsetRight == "-300px" ? "0" : "-300px";
        })
    });
})();