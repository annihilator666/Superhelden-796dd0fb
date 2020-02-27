const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

function requestJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        let response = request.response;
        processResponse(response);
    }
}
function sendRequest() {
    requestJSON(requestUrl);
}

function processResponse(response) {
    
    console.log(response);
    document.querySelector("#squadName").innerText = response.squadName;
    document.querySelector("#homeTown").innerText = response.homeTown;
    document.querySelector("#formed").innerText = response.formed;
    document.querySelector("#secretBase").innerText = response.secretBase;
    document.querySelector("#active").innerText = response.active;
    let tableMembers = document.querySelector("#member-table");
    for(i in response.members){
        let newRow = tableMembers.insertRow(-1);
        let newMemberName = newRow.insertCell(0);
        let newMemberAge = newRow.insertCell(1);
        let newMemberID = newRow.insertCell(2);
        let newMemberPower = newRow.insertCell(3);
        let newName = document.createTextNode(response.members[i].name);
        let newAge = document.createTextNode(response.members[i].age);
        let newID = document.createTextNode(response.members[i].secretIdentity);
        
        for(a in response.members[i].powers){
            let newPower = document.createTextNode(response.members[i].powers[a]+", ");
            newMemberPower.appendChild(newPower);
        }
        newMemberName.appendChild(newName);
        newMemberAge.appendChild(newAge);
        newMemberID.appendChild(newID);
        
    };
    
    
}

sendRequest();