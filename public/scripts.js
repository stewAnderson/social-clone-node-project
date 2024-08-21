document.addEventListener("DOMContentLoaded", function () {
    const commentBtn = document.getElementById("commentBtn");
    const form = document.getElementById("commentForm");

    commentBtn.addEventListener("click", function () {
        form.style.display = (form.style.display === "none") ? "block" : "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const editBtn = document.getElementById("editBtn");
    const form = document.getElementById("editForm");

    editBtn.addEventListener("click", function () {
        form.style.display = (form.style.display === "none") ? "block" : "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const deletePostBtn = document.getElementById("deletePostBtn");
    const deleteOptions = document.getElementById("deleteOptions");

    deletePostBtn.addEventListener("click", function () {
        deleteOptions.style.display = (deleteOptions.style.display === "none") ? "block" : "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const deleteCommentBtns = document.querySelectorAll("[id^=deleteCommentBtn]");

    deleteCommentBtns.forEach(function (deleteCommentBtn) {
        const commentId = deleteCommentBtn.id.split("_")[1];
        const deleteCommentOptions = document.getElementById(`deleteCommentOptions_${commentId}`);

        deleteCommentBtn.addEventListener("click", function () {
            deleteCommentOptions.style.display = (deleteCommentOptions.style.display === "none") ? "block" : "none";
        });
    });
});
