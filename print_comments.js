function printComments(data) {  
    for (let i = 0; i < data.length; i++) {
        let commentText = data[i].body;

        //Create each comment elements
        let commentDiv = document.createElement("p");

        //Attach user name, time and content to elements
        let commentContent = document.createTextNode(commentText);


        commentDiv.appendChild(commentContent);

        comment = document.getElementById("commentContainer").appendChild(commentDiv);
        console.log(comment);
    }
}

// console.log(data[i]);
{/* <div class="comment_title">
<p class="username">user123</p>
<time datetime="2020-11-18 21:00" class="comment_time">posted 15 minutes ago</time>
</div>
<p class="comment_content">I like mine with a steaming bowl of oats.</p> */}

// let content = document.createTextNode("test");



        // let commentTitle = document.createElement("div");
        // commentTitle.className = "comment_title";

        // let userName = document.createElement("p");
        // userName.className = "username";

        // let time = document.createElement("time");
        // time.className = "comment_time";

        // let commentDiv = document.createElement("p");
        // commentDiv.className = "comment_content";

        // let userNameContent = document.createTextNode("username");
        // let timeContent = document.createTextNode("time");
        // let commentContent = document.createTextNode("comment");


        // commentTitle.appendChild(userNameContent);
        // // commentTitle.appendChild(timeContent);

        // // document.getElementByClassName("comment_container").appendChild(commentTitle);
        // // document.getElementByClassName("comment_container").appendChild(commentContent);
        // var element = document.getElementById("commentContainer");
        // element.appendChild(commentTitle);