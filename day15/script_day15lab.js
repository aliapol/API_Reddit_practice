"use strict";
$(document).ready(() => {

    $.get("https://www.reddit.com/r/dogswithjobs/.json", (data) => {
        //shows just index 1-11. Skipping 0 bc its a pinned post
        for (let post of data.data.children.slice(1, 11 )) {
        
        $(".dogimages").append(`
        
            
                
                <a href ="${post.data.url}"><img src="${post.data.thumbnail}"></a>
                
                <p class="author">By ${post.data.author}<br>${post.data.title}</p>
                
                
        `);
        
        
    }
    });
});


