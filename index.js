const list = document.getElementsByClassName("list")[0];
const newReminder = document.getElementById("newReminder");
console.log(list[0])

let user = {
    "username":"Sindhu",
    "gender" : "Female"
}

function createReminder(id, message)
{

    if(!message && message.length > 50)
    {
        alert("Reminder too long, please reduce size");
        return; 
    }
    else if (!message)
    {
        alert("Enter a reminder");
        return;
    }
    const li = document.createElement("li");
    li.id = id; 
    li.className = "reminder"
    const div = document.createElement("div");
    div.className = "text";
    div.innerText = message; 

    const actionContainer = document.createElement("div");
    actionContainer.className = "actions";

    const Check  = document.createElement("button");
    Check.className = "Check";
    Check.innerText = "Finish";

    const Delete = document.createElement("button");
    Delete.className = "Delete";
    Delete.innerText = "Delete"

    actionContainer.appendChild(Check);
    actionContainer.appendChild(Delete);
    console.log(list);

    Check.addEventListener("click", function()
    {
        if(li.id == id)
        {
            div.style.textDecoration = "line-through";
        }
    });

    Delete.addEventListener("click", function()
    {
        if(li.id == id) {
            list.removeChild(li);
        }
    });
    li.appendChild(div);
    li.appendChild(actionContainer);

    return li;
}

newReminder.addEventListener("click", function ()
{
    let message = prompt("Please enter a Reminder");
    let id = Math.floor(Math.random() *100);
    let reminder = createReminder(id, message);
    list.appendChild(reminder);
    //console.log(list);
    console.log(list);
});

fetch("index.php",{
    "method" : "POST",
    "headers":{
        "Content-Type" : "application/json; charset=utf-8"
    },
    "body":  JSON.stringify(user)
}).then(function(response){
    return response.json();
}).then(function(data){
console.log(data);
})

