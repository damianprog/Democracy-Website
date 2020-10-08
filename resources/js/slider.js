(() => {
    const blogPostsSlider = document.querySelector(".blog-posts-slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const startSliding = () => {
        const sliderStyle = getComputedStyle(blogPostsSlider);     
        const leftValue = sliderStyle.getPropertyValue("left");

        leftValue == "0px" ? next() : prev();
    };

    let slideInterval = setInterval(startSliding, 10000);

    restartSlideInterval = () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(startSliding, 10000);
    };

    prev = () => {
        blogPostsSlider.style.left = "0";
        prevBtn.style.color = "#f26200";
        nextBtn.style.color = "#757575";
        restartSlideInterval();
    }

    next = () => {
        blogPostsSlider.style.left = "calc(-100% - 20px)";
        nextBtn.style.color = "#f26200";
        prevBtn.style.color = "#757575";
        restartSlideInterval();
    }

    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);
})();