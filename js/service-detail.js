// Function to get query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Service data
const services = {
    musculoskeletal: {
        title: "Musculoskeletal Physiotherapy",
        description: "Musculoskeletal physiotherapy focuses on diagnosing, treating, and preventing conditions affecting muscles, bones, joints, and soft tissues. It plays a crucial role in recovering from injuries such as sprains, fractures, and tendonitis while also addressing chronic pain conditions like arthritis and lower back pain. Techniques such as joint mobilization, soft tissue massage, and therapeutic exercises are commonly used to improve flexibility, strength, and posture. Electrotherapy and hydrotherapy aid in pain relief and rehabilitation, ensuring a smoother recovery process. Additionally, physiotherapists offer ergonomic advice and posture correction to help prevent musculoskeletal disorders in workplaces and daily activities. After surgical interventions, physiotherapy is essential in restoring movement and function, gradually reintegrating patients into their regular routines. Sports injuries and repetitive strain conditions also benefit from tailored rehabilitation programs. By enhancing mobility and reducing discomfort, musculoskeletal physiotherapy significantly improves quality of life.",
        details: "Musculoskeletal physiotherapy incorporates a wide range of treatments tailored to individual conditions. These therapies include manual techniques for pain relief, guided exercise programs for strength and mobility, and specialized interventions for post-operative rehabilitation.",
        treatmentDescription: "Our musculoskeletal physiotherapy includes personalized treatments to address pain and improve mobility.",
        treatments: [
            "Joint mobilization and soft tissue therapy",
            "Guided therapeutic exercises",
            "Electrotherapy for pain relief",
            "Hydrotherapy for enhanced mobility",
            "Post-surgical rehabilitation",
            "Sports injury management",
            "Posture correction and ergonomic guidance",
            "Chronic pain management strategies"
        ],
        benefits: [
            "Improved flexibility and mobility",
            "Reduced pain and discomfort",
            "Enhanced muscle strength",
            "Better posture and ergonomics",
            "Faster recovery post-injury or surgery",
            "Prevention of musculoskeletal disorders",
            "Increased functional independence",
            "Support for long-term joint health",
            "Personalized treatment plans",
            "Holistic approach to pain management",
            "Optimized performance for athletes",
            "Improved overall quality of life"
        ],
        mainImage: "image/Musculoskeletal-1920x900.jpg", // Replace with actual image path
        treatmentImage: "image/Musculoskeletal-600x500.jpg"
    },
    osteoarthritis: {
        title: "Osteoarthritis Management",
        description: "Osteoarthritis management is centered around reducing pain, maintaining joint function, and improving overall mobility. Regular physical activity and targeted exercises help strengthen the muscles supporting joints, reducing stress and minimizing discomfort. Weight management is also crucial, as excess weight exacerbates joint wear and tear. Physiotherapy techniques such as stretching, strengthening, and hydrotherapy support mobility and flexibility, while pain relief strategies include medications like NSAIDs and acetaminophen. Heat and cold therapy can help alleviate stiffness, allowing for greater movement and ease of function. Assistive devices like braces and orthotics provide added joint support, helping individuals remain active despite osteoarthritis challenges. In advanced cases, surgical interventions such as joint replacement may be necessary. Lifestyle modifications, including dietary adjustments, proper activity levels, and joint protection strategies, contribute significantly to long-term joint health. Additionally, mindfulness techniques and cognitive behavioral therapy can help manage chronic pain, improving overall well-being.",
        details: "Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti...",
        treatmentDescription: "Our osteoarthritis management focuses on reducing pain and enhancing joint function through targeted therapies.",
        treatments: [
            "Joint mobilization techniques",
            "Pain relief exercises",
            "Strength training",
            "Lifestyle adjustments",
            "Therapeutic modalities",
            "Joint protection strategies",
            "Flexibility exercises",
            "Postural correction"
        ],
        benefits: [
            "Reduced joint pain",
            "Improved mobility",
            "Slowed degeneration",
            "Enhanced joint stability",
            "Better quality of life",
            "Increased strength",
            "Reduced stiffness",
            "Improved daily function",
            "Lower risk of injury",
            "Enhanced flexibility",
            "Better posture",
            "Increased independence"
        ],
        mainImage: "image/Osteoarthritis-1920x900.jpg", // Replace with actual image path
        treatmentImage: "image/Osteoarthritis-600x500.jpg"
    },
    geriatric: {
        title: "Geriatric Physiotherapy",
        description: "Geriatric physiotherapy focuses on supporting older adults in maintaining mobility, independence, and overall health. It addresses age-related conditions such as arthritis, osteoporosis, and balance disorders that often lead to falls and injuries. Through targeted strength and coordination exercises, seniors can improve their stability and reduce the risk of falls. Flexibility and endurance training help maintain functional movement, ensuring they can carry out daily activities with ease. Manual therapy techniques, including massage and joint mobilization, relieve pain and stiffness, promoting comfort and flexibility. Hydrotherapy provides a gentle, low-impact rehabilitation method that benefits aging bodies. Post-surgical recovery, particularly after joint replacements, is an essential part of geriatric physiotherapy, helping individuals regain strength and confidence. Encouraging active aging through personalized exercise programs fosters independence and enhances quality of life. Additionally, movement-based therapy supports cognitive health by stimulating engagement and brain function. Overall, geriatric physiotherapy enhances physical and mental well-being, allowing seniors to enjoy a fulfilling and active lifestyle.",
        details: "Geriatric physiotherapy focuses on the unique needs of older adults, addressing age-related challenges...",
        treatmentDescription: "We provide tailored treatments to improve mobility and reduce fall risk in older adults.",
        treatments: [
            "Balance training",
            "Strength exercises",
            "Gait training",
            "Fall prevention strategies",
            "Mobility enhancement",
            "Pain management",
            "Coordination exercises",
            "Functional training"
        ],
        benefits: [
            "Improved balance",
            "Reduced fall risk",
            "Enhanced mobility",
            "Increased strength",
            "Better independence",
            "Pain reduction",
            "Improved coordination",
            "Enhanced confidence",
            "Better quality of life",
            "Improved posture",
            "Increased activity levels",
            "Reduced stiffness"
        ],
        mainImage: "image/Geriatric-1920x900.jpg", // Replace with actual image path
        treatmentImage: "image/Geriatric-600x500.jpg"
    },
    pain_management: {
        title: "Pain Management",
        description: "Pain management employs a variety of strategies to reduce, control, and cope with both acute and chronic pain. Medications such as NSAIDs, opioids, and muscle relaxants are commonly prescribed for relief, while physiotherapy plays a crucial role in improving mobility and reducing discomfort. Cognitive behavioral therapy aids in managing chronic pain by reshaping thought patterns and responses to pain stimuli. Alternative treatments, including acupuncture, chiropractic care, and massage therapy, offer non-medicated relief options for different pain conditions. Electrotherapy and nerve stimulation techniques, such as TENS, can help interrupt pain signals and provide long-term relief. Lifestyle changes, including dietary improvements and regular exercise, contribute significantly to pain reduction by promoting overall health. Heat and cold therapy are simple yet effective methods for managing inflammation and stiffness, particularly for musculoskeletal pain. In severe cases, surgical interventions may be required to address structural causes of pain. A multidisciplinary approach, combining various treatment strategies, ensures a comprehensive and tailored pain management plan.",
        details: "Pain management physiotherapy uses a combination of techniques to alleviate discomfort and improve function...",
        treatmentDescription: "Our pain management approach uses non-invasive techniques to help you live pain-free.",
        treatments: [
            "Manual therapy",
            "Therapeutic exercises",
            "Heat and cold therapy",
            "TENS application",
            "Soft tissue mobilization",
            "Postural correction",
            "Stretching routines",
            "Pain education"
        ],
        benefits: [
            "Reduced pain levels",
            "Improved mobility",
            "Better sleep quality",
            "Enhanced daily function",
            "Lower reliance on medication",
            "Increased activity levels",
            "Improved mood",
            "Better quality of life",
            "Reduced stiffness",
            "Enhanced flexibility",
            "Improved posture",
            "Increased independence"
        ],
        mainImage: "image/Pain-1920x900.jpg", // Replace with actual image path
        treatmentImage: "image/Pain-600x500.jpg"
    },
    electrotherapy: {
        title: "Electrotherapy",
        description: "Electrotherapy is a treatment method that utilizes electrical energy to aid in pain relief, muscle stimulation, and tissue healing. Techniques such as Transcutaneous Electrical Nerve Stimulation (TENS) and Electrical Muscle Stimulation (EMS) help relax muscle spasms, improve circulation, and prevent muscle atrophy in patients with limited mobility. Electrotherapy stimulates nerves and muscles, supporting rehabilitation after injuries or neurological disorders. It is particularly effective in managing chronic pain, including neuropathic pain, by blocking pain signals from reaching the brain. Additionally, post-surgical recovery benefits from electrotherapy, as it promotes faster tissue healing and reduces inflammation. Ultrasound therapy is another widely used technique that enhances blood flow and breaks down scar tissue to restore functional movement. Electrotherapy also improves range of motion, allowing patients to regain mobility with less discomfort. Some techniques support drug delivery by increasing medication absorption in targeted areas. Overall, electrotherapy plays a vital role in recovery, improving movement and quality of life through controlled electrical stimulation.",
        details: "Electrotherapy involves the use of electrical currents to stimulate nerves and muscles, aiding in recovery...",
        treatmentDescription: "We use advanced electrotherapy techniques to accelerate healing and reduce pain.",
        treatments: [
            "TENS therapy",
            "Ultrasound therapy",
            "Interferential therapy",
            "Muscle stimulation",
            "Iontophoresis",
            "Galvanic stimulation",
            "Pulsed electromagnetic therapy",
            "Biofeedback"
        ],
        benefits: [
            "Pain relief",
            "Improved circulation",
            "Faster muscle healing",
            "Reduced inflammation",
            "Enhanced muscle strength",
            "Better nerve function",
            "Reduced swelling",
            "Improved tissue repair",
            "Lower muscle tension",
            "Enhanced recovery",
            "Improved mobility",
            "Reduced stiffness"
        ],
        mainImage: "image/Electrotherapy-1920x900.jpg", // Replace with actual image path
        treatmentImage: "image/Electrotherapy-600x500.jpg"
    },
    exercise_therapy: {
        title: "Exercise Therapy",
        description: "Exercise therapy involves structured physical activities designed to restore function, improve mobility, and enhance overall well-being. These exercises help strengthen muscles, increase endurance, and improve flexibility, making movement easier and more efficient. By focusing on joint mobility, exercise therapy aids in reducing pain and stiffness associated with musculoskeletal conditions. It supports rehabilitation after injuries or surgeries, gradually reintroducing patients to normal activity levels. Balance and coordination training minimize the risk of falls, particularly in older adults. Aerobic exercises promote cardiovascular health, improving circulation and respiratory function. Resistance training builds muscle strength and stability, ensuring long-term physical health. Exercise programs are tailored to individual needs, addressing specific health concerns and optimizing recovery. Regular participation in exercise therapy enhances overall well-being by promoting movement confidence and physical resilience. By incorporating exercise into daily routines, individuals can maintain long-term health and prevent future injuries.",
        details: "Exercise therapy involves tailored exercise programs to improve strength, flexibility, and overall function...",
        treatmentDescription: "Our exercise therapy programs are designed to help you recover strength and mobility safely.",
        treatments: [
            "Strength training",
            "Flexibility exercises",
            "Cardiovascular conditioning",
            "Balance training",
            "Core stability exercises",
            "Functional training",
            "Range of motion exercises",
            "Postural correction"
        ],
        benefits: [
            "Increased strength",
            "Improved flexibility",
            "Better mobility",
            "Enhanced endurance",
            "Reduced pain",
            "Improved posture",
            "Better balance",
            "Increased confidence",
            "Enhanced daily function",
            "Lower injury risk",
            "Improved circulation",
            "Better overall fitness"
        ],
        mainImage: "image/Exercise-1920x900.jpg", // Replace with actual image path
        treatmentImage: "image/Exercise-600x500.jpg"
    }
};

// Get the service from the URL
const serviceParam = getQueryParam('service');
const service = services[serviceParam] || services.musculoskeletal; // Default to musculoskeletal if not found

// Update the page content
document.getElementById('service-title').textContent = service.title; // Update <h3> title
document.getElementById('service-category').textContent = service.title; // Update category
document.querySelector('.service-description').textContent = service.description; // Update description <p>
document.querySelector('.treatment-description').textContent = service.treatmentDescription; // Update treatment description
document.querySelector('.additional-details').textContent = service.details; // Update additional details

// Update images
document.getElementById('main-image').src = service.mainImage; // Update main image
document.getElementById('treatment-image').src = service.treatmentImage; // Update treatment image

// Update treatments list
const treatmentsList = document.querySelector('.row-cols-lg-2 .list.gap-1');
treatmentsList.innerHTML = service.treatments.map(treatment => `
    <li class="d-flex flex-row gap-2 align-items-center">
        <i class="fa-regular fa-circle-dot"></i>
        ${treatment}
    </li>
`).join('');

// Update benefits list
const benefitsList = document.querySelector('.row-cols-lg-3.p-0.mt-3');
benefitsList.innerHTML = service.benefits.map(benefit => `
    <li class="col mb-1 d-flex flex-row gap-2 align-items-center">
        <i class="fa-regular fa-circle-dot"></i>
        ${benefit}
    </li>
`).join('');

// Update the page title
document.title = `SP Physio Care - ${service.title}`;