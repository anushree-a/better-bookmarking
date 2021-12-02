let selectedCategories = [];
const onSelectCategory = (element) => {
    console.log(element)
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