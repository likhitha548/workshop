var users=[
    {
        name:"John Doe",
        gender:"male",
        image:"../images/john.png"
    },
    {
        name:"Jane Doe",
        gender:"female",
        image:"../images/jane.png"
    }
];

let curid = 0;
function toggle(){
    // toggle curid from 0->1 & 1-> 0
    curid = (curid + 1) % 2;
    //toggle the rendered user detail
    document.getElementById("user").src = users[curid].image;
    document.getElementById("name").innerText = users[curid].name;
    document.getElementById("gender").innerText = users[curid].gender;
}