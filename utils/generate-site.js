const manager = (data) => {
    return `
    <div class="col">    
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${data.getName()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${data.getRole()}</li>
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">Email: ${data.getEmail()}</li>
            <li class="list-group-item">Office Number:${data.getOfficeNumber()}</li>
        </ul>
    </div>
    </div>`
} 

const engineer = (data) => {
    return`
    <div class="col">    
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${data.getName()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${data.getRole()}</li>
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">Email: ${data.getEmail()}</li>
            <li class="list-group-item">Github Username: [${data.githubInfo()}] (https://github.com/${data.githubUsername})</li>
        </ul>
    </div>
    </div>`
}

const intern = (data) => {
    return`
    <div class="col">    
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${data.getName()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${data.getRole()}</li>
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">Email: ${data.getEmail()}</li>
            <li class="list-group-item">School: ${data.getSchool()}</li>
        </ul>
    </div>
    </div>`
}

const generateCards = (array) => {
    var cardHTML = [];
    for (var i = 0; i < array.length; i ++) {
        switch (array[i].getRole()){
            case "Manager":
                cardHTML.push(manager(array[i]));
                break;
            case "Engineer":
                cardHTML.push(engineer(array[i]));
                break;
            case "Intern":
                cardHTML.push(intern(array[i]));
                break;
            default: 
            break;
}
          

    }
    cardHTML = cardHTML.join("");
return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>

    <body>
        <h1>MY TEAM</h1>



    
    <div class="container">
       <div class="row">
        ${cardHTML}

       </div>

 
    </div>
    </body>
</html>

`

}

module.exports = generateCards;