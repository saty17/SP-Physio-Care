function renderRecentBlogPosts() {
    const blogContainer = document.getElementById('recent-blog-posts');

    // Sort blogs by date (newest first)
    const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Select the two most recent blogs
    const recentBlogs = sortedBlogs.slice(0, 2);

    // Render the recent blogs
    blogContainer.innerHTML = recentBlogs.map(blog => `
        <div class="col">
            <div class="card p-3 bg-accent-color-1 rounded-4 with-border-bottom">
                <img src="${blog.image}" class="img-fluid" alt="${blog.title}">
                <div class="d-flex flex-column gap-3 p-3 text-white">
                    <div class="d-flex flex-row gap-4">
                        <div class="d-flex align-items-center gap-2">
                            <i class="fa-regular fa-calendar"></i>
                            ${blog.date}
                        </div>
                        <div class="d-flex align-items-center gap-2">
                            <i class="fa-regular fa-user"></i>
                            ${blog.author}
                        </div>
                    </div>
                    <h6 class="font-1">${blog.title}</h6>
                    <p>${blog.excerpt}</p>
                    <div>
                        <a href="single_blog.html?blog_id=${blog.id}" class="btn text-white p-0 font-1 fw-semibold">
                            READ MORE
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Render recent blog posts when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('recent-blog-posts')) {
        renderRecentBlogPosts();
    }
});