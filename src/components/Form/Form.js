import React, { useState } from 'react';

import './form.styles.scss';

const Form = () => {
  const [formData, setFormData] = useState({});

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
              rows='2'
              onChange={updateInput}
              value={formData.mensaje || ''}
            ></textarea>
        </section>
        <section className={'form__buttons'}>
          <button className={'button--emoji'} type="submit">Emoji</button>
          <button className={'button--submit'} type="submit">Enviar</button>
        </section>
      </form>
    </>
  );
}

export default Form;