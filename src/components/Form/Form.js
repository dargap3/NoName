import React, { useState } from 'react';
import { Picker } from "emoji-mart";

import "emoji-mart/css/emoji-mart.css";
import './form.styles.scss';

const Form = () => {
  const [ nombre, setNombre ] = useState('');
  const [ sitioweb, setSitioweb ] = useState('');
  const [ celular, setCelular ] = useState('');
  const [ mensaje, setMensaje ] = useState('');
  
 /*  const [formData, setFormData] = useState({}); */

  const [emojiPickerState, SetEmojiPicker] = useState(false);

  /* let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        title="Pick your emoji…"
        emoji="point_up"
        onSelect={emoji => setMensaje(mensaje + emoji.native)}
      />
    );
  } */

  function triggerPicker(event) {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  }

/*   const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      nombre: '',
      sitioweb: '',
      celular: '',
      mensaje: '',
    });
  } */

  return (
    <>
      <form /* onSubmit={handleSubmit} */>
        <section className={'form__contain'}>
          <p>
          <label htmlFor='nombre'>
            Tu nombre:
          </label>
            <input
              type="text"
              name="nombre"
              id='nombre'
              onChange={ event => setNombre(event.target.value) }
              value={nombre}
            />
          </p>
          <label htmlFor='sitio web o instagram'>
            Website o instagram de tu empresa:
          </label>
            <input
              type="url"
              name="sitioweb"
              id='sitio web o instagram'
              onChange={ event => setSitioweb(event.target.value) }
              value={sitioweb}
            />
          <label htmlFor="celular">
            Tu número de contacto:
          </label>
            <input
              type="tel"
              name="celular"
              id='celular'
              onChange={ event => setCelular(event.target.value) }
              value={celular}
            />
          <label htmlFor="mensaje">
            ¿Cuál es la oportunidad o dolor principal de tu empresa?
          </label>
            <textarea
              type="text"
              name="mensaje"
              id='mensaje'
              rows='2'
              onChange={ event => setMensaje(event.target.value) }
              value={mensaje}
            ></textarea>
        </section>
        <section className={'form__buttons'}>
          
          {
            emojiPickerState 
          && 
            <Picker
              
              theme='light'
              onSelect={emoji => setMensaje(mensaje + emoji.native)}
            /> 
          }
          
          <button 
            className={'button--emoji'}
            onClick={triggerPicker}
          >
            Emoji
          </button>
          <button 
            className={'button--submit'} 
            type="submit"
          >
            Enviar
          </button>
        </section>
      </form>
    </>
  );
}

export default Form;