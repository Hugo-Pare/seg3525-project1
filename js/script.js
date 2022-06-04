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

function confirmation(){
    window.location.href='../pages/confirmation.html';
}
