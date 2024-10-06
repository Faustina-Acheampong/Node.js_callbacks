function myName(callback) {
    setTimeout(() => {
        console.log('Hello, my name is Faustina Acheampong.');
        callback();
        }, 2000);
}

function myAge(callback) {
    setTimeout(() => {
        console.log('I am 43 years old.');
        callback();
        }, 3000);
}

function myLocation(callback) {
    setTimeout(() => {
        console.log('I was born in Ghana and live in Jönköping, Sweden.');
        callback();
        }, 4000);
}

function myHobbies(callback) {
    setTimeout(() => {
        console.log('My hobbies include reading, making jewelry and travelling.');
        callback();
        }, 5000);
}

function displayAboutMe() {
    myName(() => {
        myAge(() => {
            myLocation(() => {
                myHobbies(() => {
                    console.log('Thank you for visiting my page.');
                });
            });
        });
    });
}

displayAboutMe();