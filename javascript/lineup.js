function toggleDisplay(year) {
    if (year.nextElementSibling.classList.value == "lineupContainer") {
        year.nextElementSibling.classList.toggle("hide")
        setTimeout(() => {
            year.nextElementSibling.classList.toggle("notDisplay")
        }, 500);
    } else {
            year.nextElementSibling.classList.toggle("notDisplay")
        setTimeout(() => {
            year.nextElementSibling.classList.toggle("hide")
        }, 100);
    }
}

async function lookup(year){
    // document.querySelector('.results').innerHTML=""
    let request = await fetch(`/lineup/${year}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
    await request.json()
    .then(async(response) => {
        if(response.results){
            let results = document.querySelector('.results')
            results.innerHTML = `<p style='text-align: center;'>No events in this year.</p>`

        } else {
            let resultsData = ""
            let results = document.querySelector('.results')
            for (var i=0; i < response.length; i++){
                resultsData += `<div class="year${response[i].year}">`
                resultsData += `<h1 class="year" onclick="toggleDisplay(this)">LINE-UP ${response[i].performing_on}</h1>`
                resultsData += `<div class="lineupContainer"><h1>${response[i].name}</h1>`
                resultsData += `<div class="artist"><div><img src="${response[i].image}" alt=""></div><div>`
                resultsData += ` <div class="artistDetails">`
                for (var z=0; z < (response[i].attributes).split(",").length; z++){
                    resultsData += ` <div><div>${(response[i].attributes).split(",")[z]}</div></div>`
                }
                resultsData += `</div></div></div></div>`
            }
            results.innerHTML = resultsData
        }
        
    })
}