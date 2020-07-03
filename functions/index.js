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
      from: 'NoName <no-reply@noname.com.co>',
      to: email,
      subject: `Hola ${nombre}`,
      html: `<h3>Hola ${nombre},</h3>
            <br>
            <p>Somos Diana y Andrés,  Business Builders de NoName.  ¡Nos emociona que nos hayas escrito!</p>
            <p>Como pudiste leer en nuestra página web, nuestra misión es ayudar a empresas a escalar a otro nivel con talento multidisciplinario que trabaje sin tregua y con creatividad para lograr que las cosas pasen en las Pymes de Colombia.</p>
            <ul>
              <li>Como nuestro trabajo es intensivo y de gran profundidad, nuestra capacidad de aliarnos con empresas es limitado cada año. No somos masivos.</li>
              <li>Nuestro propósito superior es ayudar a construir país y por esta razón nuestro foco se centra en empresas colombianas.</li>
              <li>Buscamos Pymes que tengan gran potencial, que generen valor único y que tengan ganas de crecer. ¿A dónde quisieras llegar con tu empresa?</li>
            </ul>
            <p>Respóndenos este correo y cuéntanos: ¿cuál es tu empresa?, ¿qué vendes? ¿Cuáles fueron tus ventas a Diciembre 2019? y todo lo que quieras que sepamos!</p>
            <p>¡Muchas gracias por tomarte el tiempo en escribirnos!</p>
            <p>Quedamos pendientes de tu respuesta.</p>
            <br>
            <div>
              <span>
                <p>Diana Trujillo</p>
                <p>Business Builder – Generación de Negocios</p>
                <p>dianatrujillo@noname.com.co</p>
                <p>Cel: 3152862730</p>
              </span>
              <span>
                <p>Andrés Sanín</p>
                <p>Business Builder – Generación de Negocios</p>
                <p>andressanin@noname.com.co</p>
                <p>Cel: 3146814782</p>
              </span>
            </div>            
            `
    })
    .then( res => console.log('mensaje enviado con exito'))
    .catch(e => console.log('error'))
}


function sendNotificationMail2( email, nombre, website, numero, mensaje ) {
  return transport
    .sendMail({
      from: `${nombre} ${email}`,
      to: 'dianatrujillo@noname.com.co, andressanin@noname.com.co',
      replyTo: email,
      subject: `Nuevo mensaje de ${nombre}`,
      html: `Has recibido un nuevo mensaje de <b>${nombre}</b> , con website: <b>${website}</b> ,
             número de contacto: <b>${numero}</b>, correo: <b>${email}</b> y su dolor es el siguiente: <b>${mensaje}</b>.` 
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
