import { articleCreate } from "../Article_create/articleCreate.js";
import { articles, authors,tags } from "../data.js";

function articleModalLoader(articleID){

    //Match article
    let [article_detail] = articles.filter(arti=>articleID === arti.article_id)

    console.log(article_detail);

    // Match author
    let [article_author] = authors.filter(author=>article_detail.author_id === author.authour_id)

    console.log(article_author)

    //Match tag
    let [article_tag] = tags.filter(tag=>tag.tag_id === article_detail.tag_id)

    console.log(article_tag)


    const content_main = document.getElementById("content-main");
    content_main.appendChild(articleCreate(article_detail,article_author,article_tag))

    // articleDetailModal.addEventListener("click",)
}

export default articleModalLoader