function reservationDog(){
    window.location.href='./pages/reservation-dog.html';
};

function reservationCat(){
    window.location.href='./pages/reservation-cat.html';
};

function reservationBunny(){
    window.location.href='./pages/reservation-bunny.html';
};

function changeDogColor(){
    document.getElementById('dog').style.backgroundColor = '#a6a6a6';
}

function changeCatColor(){
    document.getElementById('cat').style.backgroundColor = '#a6a6a6';
}

function changeBunnyColor(){
    document.getElementById('bunny').style.backgroundColor = '#a6a6a6';
}

function resetColor(){
    document.getElementById('dog').style.backgroundColor = '#cccccc';
    document.getElementById('cat').style.backgroundColor = '#cccccc';
    document.getElementById('bunny').style.backgroundColor = '#cccccc';
}

function changeReservationColor(){
    document.getElementById('reservation-button').style.backgroundColor = '#a6a6a6';
}

function resetReservationColor(){
    document.getElementById('reservation-button').style.backgroundColor = '#cccccc';
}

function confirmationDog(){
    window.location.href='../pages/confirmation.html';

    var animalType = 'dog'
    var service = document.querySelector('input[name=service]:checked').value;
    var specialist = document.querySelector('input[name=specialist]:checked').value;

    sessionStorage.setItem("animalType",animalType);
    sessionStorage.setItem("service",service);
    sessionStorage.setItem("specialist",specialist);
}

function confirmationCat(){
    window.location.href='../pages/confirmation.html';
    sessionStorage.setItem("animalType","cat");
}

function confirmationBunny(){
    window.location.href='../pages/confirmation.html';
    sessionStorage.setItem("animalType","bunny");
}

function exportDate(){
    var date = document.querySelector('input[name=date]').value;
    sessionStorage.setItem("date", date);
    
    console.log("date: " + date);
}

function exportTime(){
    var time = document.querySelector('input[name=time]').value;
    sessionStorage.setItem("time", time);
    
    console.log("time: " + time);
}

function exportName(){
    var name = document.querySelector('input[name=name]').value;
    sessionStorage.setItem("name", name);
    
    console.log("name: " + name);
}

function exportEmail(){
    var email = document.querySelector('input[name=email]').value;
    sessionStorage.setItem("email", email);
    
    console.log("email: " + email);
}