import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import Modal from '../Modal/Modal';

const SmallTalk = ({media}) => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);

  const {id, imagen, video} = {...media}

  return (
    <div key={id} className={'right__image'}>
      <img 
        src={imagen}
        alt={''}
        onClick={ () => setIsModalOpen(true) }
        className={'carru_image'} 
      /> 
      <Modal modalIsOpen={modalIsOpen} closeModal={onCloseModal} closeable={false} className={'small-talks-modal'}>
        <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
          <div style={{height: '100%', left: '0', position: 'absolute', top: '0', width: '100%'}}>
            <ReactPlayer 
              url={video} 
              height= '100%' 
              width= '100%'
              controls
            />
          </div>
        </div>
      </Modal> 
    </div>
  )
}

export default SmallTalk;