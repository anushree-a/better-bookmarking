let selectedCategories = [];
const onSelectCategory = (element) => {
    element.classList.toggle("selected-pill");
    selectedCategories.push(element.attributes.value.value);
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
}
