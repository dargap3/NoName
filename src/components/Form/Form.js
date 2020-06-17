import React, { useState, useEffect } from 'react';
import { Picker } from "emoji-mart";

import "emoji-mart/css/emoji-mart.css";
import './form.styles.scss';

const Form = () => {
  const initialFormData = {
      nombre: '',
      sitioweb: '',
      celular: '',
      mensaje: '',
  }

  const [ width, setWidth ] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);  //componentDidMount y componentDidUpdate
    return () => {
      window.removeEventListener('resize', handleResize); // componentWillUnMount
    }
  }, [width]);

  const [formData, setFormData] = useState(initialFormData);
  const [emojiPickerState, SetEmojiPicker] = useState(false);
  const [display, setDisplay] = useState(false);

  const updateInput = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const triggerPicker = event => {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  }

  const handleSubmit = event => {
    event.preventDefault()
    /* sendEmail() */
    setFormData({
      nombre: '',
      sitioweb: '',
      celular: '',
      mensaje: '',
    });
    setDisplay(!display);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className={'form__contain'}>
          <p>
          <label htmlFor='nombre'>
            Tu nombre:
          </label>
            <input
              type="text"
              name="nombre"
              id='nombre'
              onChange={updateInput}
              value={formData.nombre || ''}
            />
          </p>
          <label htmlFor='sitio web o instagram'>
            Website o instagram de tu empresa:
          </label>
            <input
              type="url"
              name="sitioweb"
              id='sitio web o instagram'
              onChange={updateInput}
              value={formData.sitioweb || ''}
            />
          <label htmlFor="celular">
            Tu número de contacto:
          </label>
            <input
              type="tel"
              name="celular"
              id='celular'
              onChange={updateInput}
              value={formData.celular || ''}
            />
          <label htmlFor="mensaje">
            ¿Cuál es la oportunidad o dolor principal de tu empresa?
          </label>
            <textarea
              type="text"
              name="mensaje"
              id='mensaje'
              rows='5'
              onChange={updateInput}
              onClick={ event => {SetEmojiPicker(false)}}
              value={formData.mensaje || ''}
            ></textarea>
        </section>
        
          { 
            emojiPickerState 
            && 
            <Picker
              title=''
              emoji=''
              i18n={{
                search: 'Buscar',
                notfound: 'No encontramos tu Emoji',
                skintext: 'Escoge el tono de piel',
                categories: {
                  search: 'Resultados',
                  recent: ' ',
                  smileys: ' ',
                  people: ' ',
                  nature: ' ',
                  foods: ' ',
                  activity: ' ',
                  places: ' ',
                  objects: ' ',
                  symbols: ' ',
                  flags: ' ',
                  custom: ' ',
                },
              }}
              style={{
                width: '100%', 
                backgroundColor: '#F4F3F1',
                marginTop: '0.5em',
                borderColor: '#000',
              }}
              onSelect={ emoji => {
                setFormData({
                  ...formData,
                  mensaje: formData.mensaje + emoji.native,
                });
              }}
            />
          }
        
        <section className={'form__buttons'}>
          { 
            width > 1000 
          && 
            <button 
              className={'button--emoji'}
              onClick={triggerPicker}
            >
              Emoji
            </button>
          }
          
          <button 
            className={'button--submit'} 
            type="submit"
          >
            Enviar
          </button>
          
        </section>
      </form>
      <div  className={`send-message ${ display ? '' : 'display' }`}>
        <h3>¡Ya estamos en contacto! 
          <span
            style={{marginLeft: '8px'}}
            role='img' 
            aria-label='horn celebration'
          >
            🎉
          </span>
        </h3>
        <p>Todas las semanas revisamos nuevas empresas que están buscando escalar. Te aseguramos que haremos todo lo posible por ponernos en contacto contigo lo antes posible.
          <span
              style={{marginLeft: '8px'}}
              role='img' 
              aria-label='people running'
            >
            🏃‍♀️🏃‍♂️💨
          </span>
        </p>
      </div>
    </>
  );
}

export default Form;