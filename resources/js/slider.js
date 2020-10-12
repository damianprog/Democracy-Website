(() => {
    const blogPostsSlider = document.querySelector(".blog-posts-slider");
    const blogButtons = document.querySelectorAll(".blog-buttons span");
    let lastClickedButton = blogButtons[0];

    blogButtons.forEach((button, i) => {
        button.addEventListener("click", () => {
            blogPostsSlider.style.left = `calc(${i} * (-100% - 20px))`
            lastClickedButton.style.color = "#757575";
            button.style.color = "#f26200";
            lastClickedButton = button;
        });
    });
})();