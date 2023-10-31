fetch('/users')
.then((response)=>{
    if(!response.ok){ throw new Error(`Status code Error: ${response.status}`)};
    return response.json();
})
.then((data)=>{
    const usersdata = document.getElementById('users');
    data.foreach(user =>{
        let userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `<h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <div class="posts"></div>`;
        usersdata.append(userDiv);

        fetch(`posts?userId=${user.id}`)
        .then((response)=>{
            if(!response.ok){
                throw new Error(`Status code Error: ${response.status}`);
            }
            return response.json();
        })
        .then((data)=>{
            let userPosts = document.querySelector('.posts');
            let postsHeader = document.createElement('header');
            postsHeader.innerHTML = '<h2>Posts</h2>';
            userPosts.append(postsHeader);
            data.foreach((post)=>{
                let postDiv = document.createElement('div');
                postDiv.classList.add('post');
                postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
                userPosts.append(postDiv);
            })


        })
        .catch((err)=>{
            console.log(`Error fetching posts`);
            console.log('Error',err);
        })
    })
})
.catch((err)=>{
    console.log('Error Fetching Users');
    console.log('Error',err);
})