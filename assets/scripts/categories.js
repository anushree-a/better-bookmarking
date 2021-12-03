const selectedCategories = JSON.parse(localStorage.getItem('selectedCategories'));

const categoriesContainerEl = document.getElementById("category-blocks");

// Populating page with category blocks based on the chosen categories
if (selectedCategories.length) {
    selectedCategories.forEach(category => {
        const categoryBlockDivEl = document.createElement("div");
        categoryBlockDivEl.classList.add("category-block-link");
        const categoryBlockLinkEl = document.createElement("a");
        categoryBlockLinkEl.classList.add("category-block")
        categoryBlockLinkEl.innerHTML = category;
        categoryBlockLinkEl.href = "links.html";
        categoryBlockDivEl.appendChild(categoryBlockLinkEl)

        categoriesContainerEl.appendChild(categoryBlockDivEl);
    });
}