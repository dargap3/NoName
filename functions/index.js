const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp()
require('dotenv').config()

const {SENDER_EMAIL,SENDER_PASSWORD} = process.env;

const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_PASSWORD
  }
});

exports.sendNotification = functions.firestore.document('mensajes/{docId}').onCreate((snap, context) => {
  const data = snap.data();
  const nombre = data.nombre;
  const email = data.email;
  const website = data.website;
  const numero = data.numero;
  const mensaje = data.mensaje;

  return sendNotificationMail(email, nombre), sendNotificationMail2(email, nombre, website, numero, mensaje)
})

function sendNotificationMail( email, nombre ) {
  return transport
    .sendMail({
      from: 'Fred Fo foo@example.com',
      to: email,
      subject: 'prueba',
      html: 'hola hola no soy carola'
    })
    .then( res => console.log('mensaje enviado con exito'))
    .catch(e => console.log('error'))
}


function sendNotificationMail2( email, nombre, website, numero, mensaje ) {
  return transport
    .sendMail({
      from: 'Fred Fo foo@example.com',
      to: 'juandgirald@gmail.com, dguerrac15@gmail.com',
      replyTo: email,
      subject: `Nuevo mensaje de ${nombre}`,
      html: `Has recibido un nuevo mensaje de ${nombre}, con website: ${website},
             número de contacto: ${numero}, correo: ${email} y su dolor es el siguiente: ${mensaje}.` 
    })
    .then( res => console.log('mensaje enviado con exito'))
    .catch(e => console.log('error'))
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
