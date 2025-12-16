const boxPost=document.createElement('div');
boxPost.classList.add('box-Post');

const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get('userPost'));
const userId = urlParams.get('userId');

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json())
        .then(userPosts => {

            const titlePost = document.createElement('h3');
            titlePost.innerText = `UserId: ${userId}`
            const postID = document.createElement('h3');
            postID.innerText = `Post UserId: ${postId}`
            const postTitle = document.createElement('p');
            const postBody = document.createElement('p');

            for (let post of userPosts) {
                if (post.id === postId) {
                    postTitle.innerText = `Title: ${post.title}`
                    postBody.innerText = `Comments: ${post.body}`
                }
            }
            boxPost.append(titlePost, postID, postTitle, postBody)
            document.body.appendChild(boxPost);

            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(value => value.json())
                .then(comments => {
                    const titleComment = document.createElement('div');
                    titleComment.classList.add('titleComment');
                    titleComment.innerText = `Сomments to the post`;
                    const boxComments = document.createElement('div');
                    boxComments.classList.add('boxComments');
                    for (let comment of comments) {
                        const commentContainer = document.createElement('div');
                        commentContainer.classList.add('commentContainer');
                        commentContainer.innerText = comment.body;
                        boxComments.appendChild(commentContainer);
                    }
                    document.body.append(titleComment, boxComments);
                })
        })

