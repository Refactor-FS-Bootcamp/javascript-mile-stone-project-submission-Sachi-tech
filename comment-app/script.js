let addComment = document.getElementById('add-btn');
let username = document.getElementById('username');
let userComment = document.getElementById('comment-text');



addComment.addEventListener("click", (e) => {
    if(username.value == '' || userComment.value == ''){
        return alert("Please add username and comment details");
    }

    let comments = localStorage.getItem("comments");
    if(comments == null){
        cmntsObj = [];
    }else{
        cmntsObj = JSON.parse(comments);
    }

    let myObj = {
        username : username.value,
        comment : userComment.value
        
    }
    cmntsObj.push(myObj);
    localStorage.setItem("comments", JSON.stringify(cmntsObj));
    username.value = "";
    userComment.value = "";
    showDetails();
})

// Show Comments On The Page

function showDetails(){
    let comments = localStorage.getItem("comments");
    if(comments == null){
        cmntsObj = [];
    }else{
        cmntsObj = JSON.parse(comments);
    }

    let html = '';
    cmntsObj.forEach(function(element, index){
        html += `
            <div id="comment">
                <h2 class="comment-counter">Comment ${index + 1}</h2>
                <h3 class="username">${element.username}</h3>
                <p class="user-comment">${element.comment}</p>
                <button class="like-btn" id="like"><i class="fa-solid fa-thumbs-up" id="input1"></i></button>
                <input type="number" id="input1" value="0" name="">
                <button class="dislike-btn"  id="dislike"><i class="fa-solid fa-thumbs-down" id="input2"></i></button>
                <input type="number" id="input2" value="0" name="">
                <button class="delete-btn" id="${index}" onclick="deleteComment(this.id)"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
    });

    let commentElm = document.getElementById("comments");
    if(cmntsObj.length != 0){
        commentElm.innerHTML = html;
    }else{
        commentElm.innerHTML = "No Comments Yet! Add a comment using the form above.";
    }
}    

//Function to delete notes
function deleteComment(index){
    let confirmDel = confirm("You are deleting this comment.")
    if(confirmDel == true){
        let comments = localStorage.getItem("comments");
        if(comments == null){
            cmntsObj = [];
        }else{
            cmntsObj = JSON.parse(comments);
        }
        cmntsObj.splice(index, 1);
        localStorage.setItem("comments", JSON.stringify(cmntsObj));
        
    }
}


showDetails();



