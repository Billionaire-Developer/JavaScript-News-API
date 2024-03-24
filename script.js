const apikey = 'aced9dfb35a44f9480721f2f2a6d248f'

const blogContainer = document.getElementById("blog-container");

function fetchRandomNews(){
    try{
        const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}'
        const response = await fetch(apiUrl)
    } catch(error){
        console.error("error fetching file", error)
        return[]
    }
}