const apiKey = 'aced9dfb35a44f9480721f2f2a6d248f';

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews(){
    try{
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apiKey}`
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    } catch(error){
        console.error("error fetching random news", error)
        return[]
    }
}

function displayBlogs(articles){
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement(div);
        blogCard.classList.add(blog-Card);
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h2");
        title.textContent = article.title;
        const description = article.createElement("p");
        description.textContent = article.description;


        blogCard.appendChild("img");
        blogCard.appendChild("title");
        blogCard.appendChild("description");

        blogContainer.appendChild(blogCard);
    });
}

(async ()=>{
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles)
    } catch(error){
        console.error("error fetching random news", error)
    }
})();