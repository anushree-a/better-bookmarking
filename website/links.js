fetch("data.json").then(response => response.json()).then(linkData => {
    const tableEl = document.getElementById("links");

    linkData.links.forEach(l => {
        const linkRowEl = document.createElement("tr");
        const linkValueEl = document.createElement("td")
        const linkValue = document.createElement("a");
        linkValue.href = l.link;
        linkValue.target = "_blank"
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
})
