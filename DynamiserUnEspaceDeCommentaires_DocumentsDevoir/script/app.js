function champCompleted(){
    // verification des champs vide ou non
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("laste-name").value;
    let commentaire = document.getElementById("message-max").value;

    if (firstName !== "" && lastName !== "" && commentaire !== ""){
        function submitCommentaire(){}
        function addComment(){}

    } else {
        let errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Tous les champs doivent étre remplis";
    }
}

function submitCommentaire (){}

function addComment(){
    // ajout du nouveau commentaire
    let newComment = document.createElement("div");
    newComment.innerHTML = <h3>firsteNAme + lastName</h3>/<P>commentaire</P>;

    let listComment = document.getElementById("comment-list");
    listComment.appendChild("newComment");

    // réinisialiser les champs : 
    document.getElementById().value = "";
}
