function register(){
    waitforfivesecond();
    console.log(`register end`);
    
}

function sendEmail(){
    waitforfivesecond();
    console.log(`send email end`);
    
}

function login(){
    waitforfivesecond();
    console.log(`login end`);
    
}

function getData(){
    waitforfivesecond();
    console.log(`get data end`);
    
}

function displayData(){
    waitforfivesecond();
    console.log(`display data end`);
    
}

function waitforfivesecond(){
    const ms = new Date().getTime()+5000;
    let ct = new Date().getTime();
    while(ct<ms){
        ct = new Date().getTime();
    }

}

register();
sendEmail();
login();
getData();
displayData();
console.log(`call other application`);
