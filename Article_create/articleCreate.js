// import { articles } from "../data.js";

export function articleCreate(article_detail,article_author,article_tag){
        console.log(article_detail)
        console.log(article_author);
        let article_wrapper = document.createElement("div");
        article_wrapper.classList.add("modal");
        let backdrop = document.createElement("div")
        backdrop.classList.add("backdrop")
        backdrop.setAttribute("id","backdrop")
        let  article = document.createElement("div")
        article.classList.add("article__detail-wrapper")
        article.innerHTML = `
                <section class="article__detail">
                <div class="article__header">
                <button class="button btn--close" id="close-modal"><i class="fas fa-times fas fa-camera fa-2x" style="color:#DDDDDD;pointer-events: none"></i></button>
                <picture class="cover-img">
                        <img src=${article_detail.img} alt="">  
                </picture>

                <div class="heading">
                        <h1>
                        <a href="#">${article_detail.heading}</a>
                        </h1>
                        <dl class="article-info">
                        <dt class="article-detail">Chi tiết</dt>
                        <dd class="article-date">Thứ 2, 19 tháng 7 2021</dd>
                        <span>Viết bởi</span>
                        <dd class="article-author">${article_author.author}</dd>
                        </dl>
                        </div>
                </div>
                <article class="article__body">
                        <p>${article_detail.intro}</p>
                        <br>
                        ${article_detail.body}
                </article>
        </section>
        `
        backdrop.appendChild(article);
        article_wrapper.appendChild(backdrop);


        console.log(article_wrapper);
        return article_wrapper
}