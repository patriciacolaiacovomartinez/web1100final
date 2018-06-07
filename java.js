// const wiki_link = 'https://en.wikipedia.org/wiki'
const news = 'https://newsapi.org/'
const searchInput = document.querySelector(".searchInput")
const search = document.querySelector(".search")
const output = document.querySelector(".output")

function NewsSearch() {
    // const api_url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchInput.value}&format=json&callback=?`

    const api_url = `https://newsapi.org/v2/everything?q=${searchInput.value}&from=2018-06-06&sortBy=popularity&apiKey=e923a9b3734c4ee1a3c25e0e01cae4d8`
    $.ajax({
        url: api_url,
        type: "GET",
        dataType: "json",
        success: (data) => {
            console.log(data)
           
            for (let i = 0; i < data[1].length; i++) {
                output.innerHTML += `
                <li class="news">
                <img src="${data[i][1][4]}" alt="">
                <a  href="${data[i][0][2]}">${data[i][]}</a>
                <p>${[i][1][1][2]}</p>
                </li>
                `
            }
        },
        error: (error) => {
            console.log("There's an error")

        }
    })

}

search.addEventListener('click', NewsSearch)