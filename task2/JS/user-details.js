    const detailsContainer = document.getElementById('user-details-container');
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(users => users.json())
        .then(user => {
            const Id=document.createElement('h3');
            Id.innerText=`User Id: ${user.id}`
            const Name=document.createElement('h3');
            Name.innerText=`Name: ${user.name}`
            const userName=document.createElement('h4');
            userName.innerText=`UserName: ${user.username}`
            const userMail=document.createElement('p');
            userMail.innerText=`Email: ${user.email}`
            const userSait=document.createElement('p');
            userSait.innerText=`WebSait: ${user.website}`
            const userPhone=document.createElement('p');
            userPhone.innerText=`Phone: ${user.phone}`
            const userCompany=document.createElement('p');
            userCompany.innerText=`Company: ${user.company.name} ${user.company.catchPhrase}, ${user.company.bs}`
            const userAddress=document.createElement('p');
            userAddress.innerText=`Address: ${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode} geo: ${user.address.geo.lat},${user.address.geo.lng}`

        detailsContainer.append(Id,Name,userName,userMail,userSait,userPhone,userCompany,userAddress);

        })
        document.body.appendChild(detailsContainer);

            const btnUserPost=document.createElement('button');
            let postsLoaded = false; //флаг для определения выведены ли посты

            btnUserPost.classList.add('btnPost');
            btnUserPost.innerText=`post of current user`
            btnUserPost.addEventListener('click', (event)=>{

                if (postsLoaded){ return;}

                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                    .then(value => value.json())
                    .then(usersPosts => {
                        postsLoaded = true;
                        const boxPost=document.createElement('div');
                        boxPost.classList.add('boxPost');
                        for(let userPost of usersPosts) {
                                const postBtn=document.createElement('div');
                                postBtn.classList.add('postBtn');

                                const post=document.createElement('div');
                                post.classList.add('post');
                                post.innerText=userPost.title;

                                const btnUserPost=document.createElement('button');
                                btnUserPost.classList.add('btnPost');
                                btnUserPost.innerText=`post-details`
                                btnUserPost.addEventListener('click', (event)=>{
                                    window.location.href = `post-details.html?userPost=${userPost.id}&userId=${userId}`;
                                })
                                postBtn.append(post,btnUserPost);
                                boxPost.appendChild(postBtn);
                            }
                           document.body.appendChild(boxPost);
                    })
            })
        document.body.appendChild(btnUserPost);





