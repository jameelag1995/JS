const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

const ol = document.createElement("ol");

users.forEach( user => {
    const li = document.createElement('li');
    li.innerText = `${user.firstName} ${user.lastName}`;
    li.setAttribute("data-id", Math.floor(Math.random() * 1000000));
    ol.appendChild(li);
});
ol.style.listStyleType = "none";
document.body.appendChild(ol);