let data = {};

// Renders links inside the table dynamically 
const renderLinks = (linkObj) => {
    const tableEl = document.getElementById("links");
    tableEl.innerHTML = null;

    if (linkObj.length) {
        linkObj.forEach(l => {
            const linkRowEl = document.createElement("tr");
            linkRowEl.classList.add("table-row")
            const linkValueEl = document.createElement("td")
            const linkValue = document.createElement("a");
            linkValue.href = l.link;
            linkValue.target = "_blank"
            linkValue.classList.add("link")
            linkValue.innerHTML = l.link;
            linkValueEl.appendChild(linkValue);
            const linkNameEl = document.createElement("td")
            linkNameEl.innerHTML = l.recommender
            const linkNotesEl = document.createElement("td")
            linkNotesEl.innerHTML = l.notes

            linkRowEl.appendChild(linkValueEl);
            linkRowEl.appendChild(linkNameEl)
            linkRowEl.appendChild(linkNotesEl);

            tableEl.appendChild(linkRowEl);
        });
    }
    else {
        tableEl.innerHTML = "Oops! Looks like you haven't saved anything like that yet. 😕"
    }
}

// Fetches data from data.json
fetch("./data.json").then(response => response.json()).then(linkData => {
    data = linkData;
    renderLinks(linkData.links)
})

// Performs a simple search on the links data on click of the search btn
const onSearchBtnClick = () => {
    const searchQuery = document.getElementById("search-bar").value;

    const filteredLinks = [];
    data.links.forEach((item) => {
        if (item.link === searchQuery || item.recommender === searchQuery || item.notes === searchQuery) {
            filteredLinks.push(item);
        }
    })

    renderLinks(filteredLinks);
}

