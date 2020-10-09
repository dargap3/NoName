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
      from: `NoName <${SENDER_EMAIL}>`,
      to: email,
      subject: `Hola ${nombre}`,
      html: `<p>Soy Miguel Piedrahita, director general de NoName Colombia y te hablo en nombre de todo el equipo. </p>
            <p>¡Nos emociona que nos hayas escrito y que hayas tenido la generosidad de dejarnos una nota expresando tu interés. Gracias igualmente por contarnos más de ti.</p>
            <p>Como pudiste leer en nuestra página web, nuestra razón de existir es hacer todo lo humanamente posible para que las mejores PyMes de Colombia dejen de ser PyMes y se conviertan, más pronto que tarde, en las empresas del futuro de nuestro querido país. Lo hacemos poniendo a disposición nuestro talento humano multidisciplinario para hacer que las cosas pasen.</p>
            <p>Nos parece fundamental que conozcas más detalles adicionales sobre nosotros:</p>
            <ol>
              <li>Nuestro propósito superior es ayudar a construir país y por esta razón nuestro foco se centra en empresas colombianas. 🇨🇴</li>
              <li>Buscamos Pymes que tengan gran potencial, que generen valor único y que tengan ganas de crecer con calidad. En ingresos, en márgenes, en liquidez, en reconocimiento de marca, en creación de empleo directo, digno y de calidad. En creación de valor ampliado. 📈</li>
              <li>Como nuestro trabajo es intensivo y de gran profundidad, nuestra capacidad de aliarnos, en cuanto a cantidad de alianzas con empresas es muy limitada. Por esta razón, nuestro aliado prospecto debe sumar ingresos anuales por encima de COP 5.000 millones. 💰</li>
            </ol>
            <p>Por favor responde este correo contándonos: ¿cuál es tu empresa?, ¿qué vendes? ¿cuáles fueron tus ventas aproximadas el año pasado? y en general, todo lo que quieras que sepamos! Solo compártenos lo que te haga sentir cómodo(a). Nuestro objetivo no es conocer información confidencial por conocerla. Solo porque te sientes con la tranquilidad de suministrar esta información.</p>
            <p>Al escribirnos, quedaste inscrito en nuestras bases de datos, para enviarte información interesante, newsletters e invitarte a algunos eventos. De igual forma te invitamos a seguirnos en redes para estar en contacto:</p>
            <p>
              <span><a href='https://www.instagram.com/nonamecolombia/'>Instagram</a> - </span>
              <span><a href='https://www.linkedin.com/company/noname-colombia'>LinkedIn</a> - </span>
              <span><a href='https://twitter.com/noname_colombia'>Twitter</a></span>
            </p>
            <p>¡Muchas gracias por tomarte el tiempo en escribirnos!</p>
            <p>Quedamos pendientes de tu respuesta.</p>
            <br>
            <p>NoNamers✌️</p>    
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
