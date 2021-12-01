fetch("data.json").then(response => response.json()).then(linkData => {
    const tableEl = document.getElementById("links");

    linkData.links.forEach(l => {
        const linkRowEl = document.createElement("tr");
        const linkValueEl = document.createElement("td")
        linkValueEl.innerHTML = l.link
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
