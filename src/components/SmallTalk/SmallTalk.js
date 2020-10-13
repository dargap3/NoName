import React, { useState } from 'react';
import Modal from '../Modal/Modal';


const SmallTalk = ({data}) => {
  const [modalIsOpen, setIsModalOpen] = useState(false);

  const onCloseModal = () => setIsModalOpen(false);

  return (
    <div key={data.id} className={'right__image'}>
      <img 
        src={data.imageSrc}
        alt={''}
        onClick={ () => setIsModalOpen(true) }
        className={'carru_image'} 
      /> 
      <Modal modalIsOpen={modalIsOpen} closeModal={onCloseModal} closeable={false} className={'small-talks-modal'}>
        <iframe style={{width: '100%', height: '100%'}} src={data.videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </Modal> 
    </div>
  )
}

export default SmallTalk;