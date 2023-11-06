const usersURL = "https://jsonplaceholder.typicode.com/users";
const postsURL = "https://jsonplaceholder.typicode.com/posts";
fetch(usersURL)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Problem with fetching users. Status code Error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        const usersdata = document.getElementById("users");
        data.forEach((user, index) => {
            let userDiv = document.createElement("div");
            userDiv.classList.add("user");
            userDiv.innerHTML = `<h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <div class="posts"></div>`;
            usersdata.append(userDiv);

            fetch(postsURL + `?userId=${user.id}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `Problem with fetching posts. Status code Error: ${response.status}`
                        );
                    }
                    return response.json();
                })
                .then((data) => {
                    let userPosts = document.querySelectorAll(".posts");
                    let postsHeader = document.createElement("header");
                    postsHeader.innerHTML = "<h2>Posts</h2>";
                    userPosts[index].append(postsHeader);
                    data.forEach((post) => {
                        let postDiv = document.createElement("div");
                        postDiv.classList.add("post");
                        postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
                        userPosts[index].append(postDiv);
                    });
                })
                .catch((err) => {
                    console.log(err.message);
                });
        });
    })
    .catch((err) => {
        console.log(err.message);
    });
