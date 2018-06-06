const news_link = 'https://en.wikipedia.org/wiki'
const randomEndpoint = '/Special:Random'
const searchTerm = document.querySelector(".searchTerm")
const search = document.querySelector(".search")
const random = document.querySelector(".random")
const output = document.querySelector(".output")

function wikiSearch() {
    const api_url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm.value}&format=json&callback=?`
    $.ajax({
        url: api_url,
        type: "GET",
        dataType: "json",
        success: (data) => {
            console.log(data)
            //data[1] is the titles
            //data[2] is the description
            //data[3] is the link
            for (let i = 0; i < data[1].length; i++) {
                output.innerHTML += `
                <li class="item">
                <a  href="${data[3][i]}">${data[1][i]}</a>
                <p>${data[2][i]}</p>
                </li>
                `
            }
        },
        error: (error) => {
            console.log("There's an error")

        }
    })

}

search.addEventListener('click', wikiSearch)
random.addEventListener('click', function (e){
    window.open(`${wiki_link}${randomEndPoint}`)
})


