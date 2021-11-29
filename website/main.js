let selectedCategories = [];
const onSelectCategory = (element) => {
    selectedCategories.push(element.attributes.value.value);
}

const onLoadBody = () => {
    let fileData = null;
    fetch("data.json").then(response => response.json()).then(data => {
        fileData = data;
    })
}

