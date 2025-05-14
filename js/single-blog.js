function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function renderBlogPost() {
    const blogId = parseInt(getQueryParam('blog_id'));
    const blog = blogs.find(b => b.id === blogId);

    if (!blog) {
        document.getElementById('banner-title').textContent = "Blog Not Found";
        document.getElementById('blog-title').textContent = "Blog Not Found";
        document.getElementById('blog-content').innerHTML = "<p>The blog post you are looking for does not exist.</p>";
        document.getElementById('blog-image').style.display = "none";
        document.getElementById('blog-date').textContent = "";
        document.getElementById('blog-author').textContent = "";
        document.title = "SP Physio Care - Blog Not Found";
        return;
    }

    document.getElementById('banner-title').textContent = blog.title;
    document.getElementById('blog-title').textContent = blog.title;
    document.getElementById('blog-date').textContent = blog.date;
    document.getElementById('blog-author').textContent = blog.author;
    document.getElementById('blog-image').src = blog.image;
    document.getElementById('blog-image').alt = blog.title;

    const content = `
        <p>${blog.content}</p>
        <div>
            <h6>Physiotherapy Benefits</h6>
            <ul class="row row-cols-1 row-cols-lg-3 p-0 mt-3">
                <li class="col mb-1 d-flex flex-row gap-2 align-items-center">
                    <i class="fa-regular fa-circle-dot"></i>
                    Reduces pain and inflammation
                </li>
                <li class="col mb-1 d-flex flex-row gap-2 align-items-center">
                    <i class="fa-regular fa-circle-dot"></i>
                    Improves posture and alignment
                </li>
                <li class="col mb-1 d-flex flex-row gap-2 align-items-center">
                    <i class="fa-regular fa-circle-dot"></i>
                    Enhances mobility and flexibility
                </li>
                <li class="col mb-1 d-flex flex-row gap-2 align-items-center">
                    <i class="fa-regular fa-circle-dot"></i>
                    Strengthens supporting muscles
                </li>
                <li class="col mb-1 d-flex flex-row gap-2 align-items-center">
                    <i class="fa-regular fa-circle-dot"></i>
                    Prevents future injuries
                </li>
                <li class="col mb-1 d-flex flex-row gap-2 align-items-center">
                    <i class="fa-regular fa-circle-dot"></i>
                    Promotes faster recovery
                </li>
                <li class="col mb-1 d-flex flex-row gap-2 align-items-center">
                    <i class="fa-regular fa-circle-dot"></i>
                    Boosts overall confidence
                </li>
                <li class="col mb-1 d-flex flex-row gap-2 align-items-center">
                    <i class="fa-regular fa-circle-dot"></i>
                    Improves breathing efficiency
                </li>
                <li class="col mb-1 d-flex flex-row gap-2 align-items-center">
                    <i class="fa-regular fa-circle-dot"></i>
                    Supports long-term wellness
                </li>
                <li class="col mb-1 d-flex flex-row gap-2 align-items-center">
                    <i class="fa-regular fa-circle-dot"></i>
                    Reduces dependency on medications
                </li>
                <li class="col mb-1 d-flex flex-row gap-2 align-items-center">
                    <i class="fa-regular fa-circle-dot"></i>
                    Enhances quality of life
                </li>
                <li class="col mb-1 d-flex flex-row gap-2 align-items-center">
                    <i class="fa-regular fa-circle-dot"></i>
                    Provides personalized care
                </li>
            </ul>
        </div>
        <p>
            At SP Physio Care, we tailor our physiotherapy programs to meet your unique needs, ensuring you achieve the best possible outcomes. Whether you’re dealing with chronic pain, recovering from an injury, or looking to improve your overall mobility, our expert team is here to guide you every step of the way. Contact us today to learn more about how physiotherapy can benefit you.
        </p>
    `;
    document.getElementById('blog-content').innerHTML = content;
    document.title = `SP Physio Care - ${blog.title}`;
}

document.addEventListener('DOMContentLoaded', renderBlogPost);