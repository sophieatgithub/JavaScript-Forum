function printComments(data) {  
    for (let i = 0; i < data.length; i++) {
        let userNameText = data[i].username;
        let commentText = data[i].body;

        let dateObject = data[i].time;
        let dateText = new Date(dateObject.year, dateObject.month, dateObject.day, dateObject.hour);

        //Create each comment elements
        let commentTitle = document.createElement("div");
        let userName = document.createElement("p");
        let dateElement = document.createElement("p");
        let commentDiv = document.createElement("p");
        let lineBreak = document.createElement("br");

        //Attach the class name to the elements
        commentTitle.className = "comment_title";
        userName.className = "username";
        dateElement.className = "comment_time";
        commentDiv.className = "comment_content";


        //Link json data to a variable
        let usernameContent = document.createTextNode(userNameText);
        let dateContent = document.createTextNode(dateText);
        let commentContent = document.createTextNode(commentText);

        console.log(dateContent);

        //Attach json variable to element
        userName.appendChild(usernameContent);
        dateElement.appendChild(dateContent);
        commentDiv.appendChild(commentContent);

        //Attach username and date to comment title div
        commentTitle.appendChild(userName);
        commentTitle.appendChild(dateElement);

        //Attach newly created elemnent to container div
        commenttitle = document.getElementById("commentContainer").appendChild(commentTitle);
        comment = document.getElementById("commentContainer").appendChild(commentDiv);
        linebreak = document.getElementById("commentContainer").appendChild(lineBreak);
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