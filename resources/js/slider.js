(() => {
    const blogPosts = document.querySelector(".blog-posts-slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    prev = () => {
        blogPosts.style.left = "0";
        prevBtn.style.color = "#f26200";
        nextBtn.style.color = "#757575";
    }

    next = () => {
        blogPosts.style.left = "-102%";
        nextBtn.style.color = "#f26200";
        prevBtn.style.color = "#757575";
    }

    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);
})();