// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
    const faqContainer = document.querySelector(".faq-content");

    faqContainer.addEventListener("click", (event) => {
        const groupHeader = event.target.closest(".faq-group-header");
        if (!groupHeader) return;
        const group = groupHeader.parentElement;

        // Toggle body visibility
        const groupBody = group.querySelector(".faq-group-body");
        groupBody.classList.toggle("open");
        
        // Toggle icon
        const groupIcon = groupHeader.querySelector("i");
        groupIcon.classList.toggle("fa-plus");
        groupIcon.classList.toggle("fa-minus");

        // Close other FAQ bodies
        const allGroups = faqContainer.querySelectorAll(".faq-group");
        allGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherBody = otherGroup.querySelector(".faq-group-body");
                const otherIcon = otherGroup.querySelector(".faq-group-header i");
                otherBody.classList.remove("open");
                otherIcon.classList.remove("fa-minus");
                otherIcon.classList.add("fa-plus");
            }
        });
    });
});