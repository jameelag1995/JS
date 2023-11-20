const usernameInput = document.getElementById('username');
const searchBtn = document.getElementById('search-btn');
const userInfoDiv = document.getElementById('user-info');
const url = 'https://api.github.com/users/'
usernameInput.addEventListener('keypress',e =>{
    if(e.key == 'Enter'){
        fetchUserData(usernameInput.value);
    }
})

searchBtn.addEventListener('click',e =>{
    fetchUserData(usernameInput.value);

})
const fetchUserData = async (username) =>{
    try{
        const response = await fetch(url + username);
        console.log(response);
        if (!response.ok){
            throw new Error ('Error fetching user data');
        }
        const result = await response.json();
        console.log(result);
        showUser(result);
    }
    catch(err){
        console.log(err);
    }
}

const showUser = (userInfo)=>{
    userInfoDiv.innerHTML = '';
    const userImg = document.createElement('img');
    userImg.src = userInfo.avatar_url;
    const userName = document.createElement('h3');
    userName.innerText = userInfo.name;
    const userRepos = `public repos: ${userInfo.public_repos}`;
    userInfoDiv.append(userImg,userName,userRepos);
}