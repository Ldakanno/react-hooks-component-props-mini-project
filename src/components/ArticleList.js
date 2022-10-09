import React from "react";
import Article from "./Article.js";

function ArticleList({ posts }) {
    const article = posts.map( post => {
        return <Article key={post.id} title={post.title} preview={post.preview} date={post.date}/>
    })
    return (
        <main>
            {article}
        </main>
    )
}


export default ArticleList;