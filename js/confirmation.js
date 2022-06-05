var services = [['Coupe de griffes','Brossage','Toilletage Complet'],['Coupe de griffes','Toillettage félin','Pension pour chat'],['Coupe de griffes','Brossage','Pension pour lapin']];
var specialists = ['Marie-Soleil Simard','Maxime Grenon','Charles-Antoine Bussière'];
var animalType = sessionStorage.getItem("animalType");
var serviceVal = sessionStorage.getItem("service");
var specialistVal = sessionStorage.getItem("specialist");
var date = sessionStorage.getItem('date');
var time = sessionStorage.getItem('time');

var animalVal;

window.onload = function(){
    if(animalType === 'dog'){
        document.getElementById('head').innerText = 'Confirmation pour chien';
        animalVal = 0;
    }
    else if(sessionStorage.getItem("animalType") === 'cat'){
        document.getElementById('head').innerText = 'Confirmation pour chat';
        animalVal = 1;
    }
    else{
        document.getElementById('head').innerText = 'Confirmation pour lapin';
        animalVal = 2;
    }

    // name

    if((sessionStorage.getItem("name") != "") && (sessionStorage.getItem("name") != null)){
        document.getElementById('name').innerText = 'Merci ' + sessionStorage.getItem("name") + ' de faire affaire avec le Vétérinaire Gatineau-Ottawa !';
    }
    else{
        document.getElementById('name').innerText = 'Merci ----- de faire affaire avec le Vétérinaire Gatineau-Ottawa !';
    }

    // service and specialist
    console.log("service : " + serviceVal);
    console.log("specialist : " + specialistVal);

    if((serviceVal != undefined) && (specialistVal != undefined)){
        document.getElementById('service-specialist').innerText = 'Vous avez réserver le service de : ' + services[animalVal][serviceVal] + " avec le/la spécialiste : "+ specialists[specialistVal];
    }
    else if((serviceVal == undefined) && (specialistVal != undefined)){
        document.getElementById('service-specialist').innerText = 'Vous avez réserver le service de : ----- avec le/la spécialiste : ' + specialists[specialistVal];
    }
    else if((serviceVal != undefined) && (specialistVal == undefined)){
        document.getElementById('service-specialist').innerText = 'Vous avez réserver le service de : ' + services[animalVal][serviceVal] + ' avec le/la spécialiste : -----';
    }
    else{
        document.getElementById('service-specialist').innerText = 'Vous avez réserver le service de : ----- avec le/la spécialiste : -----';   
    }

    // date and time

    if(((date != null) && (date != "")) && ((time != null) && (time != ""))){
        document.getElementById('date-time').innerText = 'Votre réservation est le : ' + date + ' à ' + time;
    }
    else if(((date == null) || (date == "") && ((time != null) && (time != "")))){
        document.getElementById('date-time').innerText = 'Votre réservation est le : ----- à ' + time;
    }
    else if(((date != null) && (date != "") && ((time == null) || (time == "")))){
        document.getElementById('date-time').innerText = 'Votre réservation est le : ' + date + ' à -----';
    }
    else{
        document.getElementById('date-time').innerText = 'Votre réservation est le : -----  à -----';
    }
}