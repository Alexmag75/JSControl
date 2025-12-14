const boxPost=document.createElement('div');
boxPost.classList.add('box-Post');

const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get('userPost.id'));
const userId = urlParams.get('userId');

async function printPostComments() {
    let post=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json())
        .then(UserPosts => {

             const titlePost=document.createElement('h3');
             titlePost.innerText=`UserId: ${UserPosts.Id=userId}`
            const PostID=document.createElement('h3');
            PostID.innerText=`Post UserId: ${UserPosts.Id=postId}`
            const PostTitle=document.createElement('p');
            PostTitle.innerText=`Title: ${UserPosts[postId%10-1].title}`
            const PostBody=document.createElement('p');
            PostBody.innerText=`Comments: ${UserPosts[postId%10-1].body}`


            boxPost.append(titlePost,PostID,PostTitle,PostBody)
            document.body.appendChild(boxPost);
        })

    let comment=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(value => value.json())
        .then(comments => {
            const titleComment=document.createElement('div');
            titleComment.classList.add('titleComment');
            titleComment.innerText=`Сomments to the post`;
            const boxComments = document.createElement('div');
            boxComments.classList.add('boxComments');
            for (let comment of comments) {
                const commentContainer = document.createElement('div');
                commentContainer.classList.add('commentContainer');
                commentContainer.innerText = comment.body;
                boxComments.appendChild(commentContainer);
            }
            document.body.append(titleComment,boxComments);
        })}
printPostComments();