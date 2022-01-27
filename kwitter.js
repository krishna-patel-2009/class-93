function addUser()
{
    addUser = document.getElementById("user_name").value ;
    localStorage.getItem("user_name", user_name);

    window.location = "kwitter_room.html";
}