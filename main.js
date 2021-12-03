let selectedCategories = [];

// Handles category selection
const onSelectCategory = (element) => {
    if (element.target) {
        selectedCategories.push(element.target.value);
        element.target.classList.toggle("selected-pill");
    }
    else {
        selectedCategories.push(element.attributes.value.value);
        element.classList.toggle("selected-pill");
    }
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
}

// Creates a new category on click of btn
const onCreateCategoryBtnClick = () => {
    const newCategoryValue = document.getElementById("additional-category-input").value;
    const categoryParentDiv = document.getElementById("bookmark pills");
    const newCategoryPill = document.createElement("div");
    newCategoryPill.classList.add("category-pill")
    newCategoryPill.value = newCategoryValue;
    newCategoryPill.innerHTML = newCategoryValue;
    newCategoryPill.id = "x"

    categoryParentDiv.appendChild(newCategoryPill);

    document.getElementById("x").addEventListener('click', onSelectCategory.bind(newCategoryPill))

    document.getElementById("additional-category-input").value = "";
}

// Displays field to add new category on click
const onAddNewCategoryBtnClick = () => {
    document.getElementById("additional-category-container").classList.add("additional-category-container-active");
    document.getElementById("add-new-category-pill").classList.add("add-new-category-pill-hidden");
}