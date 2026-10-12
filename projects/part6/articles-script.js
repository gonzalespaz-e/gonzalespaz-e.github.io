//https://gonzalespaz-e.github.io/projects/part6/articles.json

const base_url = "https://gonzalespaz-e.github.io/projects/part6/";

const getArticles = async () => {
    const url = `${base_url}articles.json`;
    const response = await fetch(url);
    return response.json();
};

const showArticles = async () => {
    const articles = await getArticles();

    articles.forEach((article) => {
        document.querySelector("#article-list").append(displayArticle(article));
    });
};

const displayArticle = (article) => {
    const section = document.createElement("section");
    section.classList.add("article-block");
    section.classList.add("columns");

    const img = document.createElement("img");
    img.src = base_url + article.img_name;
    img.alt = article.title;
    img.classList.add("article-image");
    section.append(img);

    const text = document.createElement("div");
    text.classList.add("article-text");
    section.append(text);

    const kicker = document.createElement("h3");
    kicker.classList.add("article-kicker");
    kicker.innerHTML = "Article";
    text.append(kicker);

    const title = document.createElement("h3");
    title.classList.add("article-title");
    title.innerHTML = article.title;
    text.append(title);

    const byline = document.createElement("h4");
    byline.classList.add("article-byline");
    byline.innerHTML = `${article.publisher} &middot; ${article.author} &middot; ${article.date}`;
    text.append(byline);

    const summary = document.createElement("p");
    summary.classList.add("article-summary");
    summary.innerHTML = article.summary;
    text.append(summary);

    const linkHolder = document.createElement("p");
    const link = document.createElement("a");
    link.classList.add("article-link");
    link.href = article.url;
    link.target = "_blank";
    link.innerHTML = "Read Article";
    linkHolder.append(link);
    text.append(linkHolder);

    return section;
};

showArticles();
