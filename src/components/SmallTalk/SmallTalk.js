import React, { useState } from 'react';

import Modal from '../Modal/Modal';
import WistiaEmbed from '../WistiaEmbed/WistiaEmbed';


const SmallTalk = ({media}) => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);

  return (
    <div key={media.id} className={'right__image'}>
      <img 
        src={media.imagen}
        alt={''}
        onClick={ () => setIsModalOpen(true) }
        className={'carru_image'} 
      /> 
      <Modal modalIsOpen={modalIsOpen} closeModal={onCloseModal} closeable={false} className={'small-talks-modal'}>
        <WistiaEmbed hashedId={media.video} playerColor="#000" />
      </Modal> 
    </div>
  )
}

export default SmallTalk;