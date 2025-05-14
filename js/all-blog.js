// Blog data
const blogs = [
    {
        id: 1,
        title: "Neck Pain and Treatment with Physiotherapy",
        date: "May 10, 2025",
        author: "SP Physio Care",
        excerpt: "Learn how physiotherapy can effectively treat neck pain caused by poor posture, stress, or injury.",
        image: "image/blog1.jpg", // Replace with actual image path
        content: "Neck pain is a common issue that can stem from various causes, including poor posture, stress, or injuries. Physiotherapy offers a non-invasive solution to alleviate pain and improve mobility. In this article, we explore the causes of neck pain, the role of physiotherapy in treatment, and practical tips to prevent future discomfort. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum ultrices nisi, at congue sapien lobortis..."
    },
    {
        id: 2,
        title: "What Your Back Pain is Trying to Tell You",
        date: "May 8, 2025",
        author: "SP Physio Care",
        excerpt: "Back pain can signal underlying issues. Discover what your body is trying to tell you and how physiotherapy can help.",
        image: "image/blog2.jpg", // Replace with actual image path
        content: "Back pain is often a symptom of deeper issues, such as muscle imbalances, poor posture, or even stress. In this blog, we dive into the common causes of back pain, how to interpret the signals your body is sending, and how physiotherapy can provide long-term relief. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum ultrices nisi, at congue sapien lobortis..."
    },
    {
        id: 3,
        title: "Physiotherapy Tips for Improving Your Posture",
        date: "May 5, 2025",
        author: "SP Physio Care",
        excerpt: "Good posture is key to overall health. Here are physiotherapy tips to help you stand tall and pain-free.",
        image: "image/blog3.jpg", // Replace with actual image path
        content: "Poor posture can lead to a host of problems, including back pain, neck pain, and reduced mobility. In this article, we share expert physiotherapy tips to improve your posture, strengthen your core, and maintain a healthy spine. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum ultrices nisi, at congue sapien lobortis..."
    },
    {
        id: 4,
        title: "5 Months of Chiropractor, Here’s What Happened",
        date: "May 2, 2025",
        author: "SP Physio Care",
        excerpt: "A patient shares their 5-month journey with chiropractic care and its impact on their mobility and pain.",
        image: "image/blog4.jpg", // Replace with actual image path
        content: "Chiropractic care can be a game-changer for those dealing with chronic pain or mobility issues. In this blog, a patient shares their 5-month experience with a chiropractor, detailing the improvements in their mobility, pain levels, and overall quality of life. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum ultrices nisi, at congue sapien lobortis..."
    },
    {
        id: 5,
        title: "Why We Need Female Mentors in Physiotherapy",
        date: "April 28, 2025",
        author: "SP Physio Care",
        excerpt: "Female mentors play a crucial role in physiotherapy. Learn why diversity in mentorship matters.",
        image: "image/blog5.jpg", // Replace with actual image path
        content: "Diversity in mentorship is essential for the growth of the physiotherapy field. In this article, we discuss the importance of female mentors in physiotherapy, the unique perspectives they bring, and how they inspire the next generation of therapists. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum ultrices nisi, at congue sapien lobortis..."
    },
    {
        id: 6,
        title: "Your Guide to Learning About Musculoskeletal Physiotherapy",
        date: "April 25, 2025",
        author: "SP Physio Care",
        excerpt: "A comprehensive guide to understanding musculoskeletal physiotherapy and its benefits for pain relief.",
        image: "image/blog6.jpg", // Replace with actual image path
        content: "Musculoskeletal physiotherapy is a specialized field that focuses on treating issues related to joints, muscles, and bones. In this comprehensive guide, we break down what musculoskeletal physiotherapy is, how it works, and the benefits it offers for pain relief and mobility. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum ultrices nisi, at congue sapien lobortis..."
    }
];

// Function to render blog posts
function renderBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    blogContainer.innerHTML = blogs.map(blog => `
        <div class="col mb-3">
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

// Render blog posts when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('blog-posts')) {
        renderBlogPosts();
    }
});