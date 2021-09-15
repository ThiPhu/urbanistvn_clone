import {topics, authors } from "../data.js"

 function articleLoaders(){
    const topic_parent = document.getElementById("topic")
    const topic_translate = {'latest':'Mới nhất','coop':'Đồng sáng tạo','art':'Nghệ thuật','life':'Đời sống','culinary':'Ăn uống','heritage':'Di sản','travel':'Du lịch'}
    topics.forEach((topic)=>{
        //Match topic to get topic_translate key in order to translate to VNmese
        let key_translate =  Object.keys(topic_translate).find(topice=> topice === topic.topic)

        // Create topic wrapper
        let topic_wrapper = document.createElement("div")
        topic_wrapper.classList.add("topic-wrapper")
        // Append topic wrapper to topic parent
        topic_parent.appendChild(topic_wrapper)

        //create topic element
        let topic_element = document.createElement("section")
        topic_element.setAttribute('id',`topic-${topic.topic}`)
        topic_element.innerHTML = `
            <h1 class="topic__header">${topic_translate[key_translate]}</h1>`

        //Append topic element to topic wrapper
        topic_wrapper.appendChild(topic_element)

        // Create topic body
        let topic_element_body = document.createElement("div")
        topic_element_body.classList.add("topic__body","grid",`layout_${topic.layout}`)
        // Append topic body to topic parent
        topic_element.appendChild(topic_element_body)
        topic.articles.forEach((article)=>{
            // Match author
            let article_author
            authors.forEach((author)=>{
                if (author.authour_id === article.authour_id){
                    // return author
                    article_author = author
                } 
            })
            console.log(article_author.author)
            //Create article
            let article_element = document.createElement("a")
            article_element.classList.add("topic__article")
            article_element.innerHTML = `
                <article>
                <div class="article__author">
                    <figure class="author__avatar">
                        <img  src="${article_author.avatar}" alt="${article_author.author}">
                    </figure>
                    <div class="author__about">
                        <p><span>${article_author.author}</span> - <span>${article.tag}</span></p>
                    </div>   
                </div>
                <picture class="article__img">
                    <img src="${article.img}" alt="${article.heading}">
                </picture>
                <div class="article__heading">
                    <h3 class="heading__title">${article.heading}</h3>
                    <p class="heading__subTitle">${article.subHeading}</p>
                </div>
            </article>`
            // Append article element to topic element
            topic_element_body.appendChild(article_element)    
        })
    })
}

export default articleLoaders