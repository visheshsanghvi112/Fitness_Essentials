const firebaseConfig = {
    apiKey: "AIzaSyAdwK0j4z_EdY979zPmg_QuItCVfB_xL4Y",
    authDomain: "gymform-8c397.firebaseapp.com",
    databaseURL: "https://gymform-8c397-default-rtdb.firebaseio.com",
    projectId: "gymform-8c397",
    storageBucket: "gymform-8c397.appspot.com",
    messagingSenderId: "128478061719",
    appId: "1:128478061719:web:cc97c7c7abe4baf1c835d2",
    measurementId: "G-MV786BV7K4"
};


firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("email");
    var subject = getElementVal("subject");
    var msgContent = getElementVal("message");

    console.log(name, emailid, subject, msgContent);

    saveMessages(name, emailid, subject, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, subject, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        subject: subject,
        msgContent: msgContent,
    });

    alert("Message Submitted!!");

    document.getElementById("contactForm").reset();
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};