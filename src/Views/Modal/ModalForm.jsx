import React, { useState } from 'react';
import '../../styles/Modal/ModalForm.scss';

function ModalForm({ title, body }) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      {show ?
        <div className="modalBackground">
          <div className='modalContainer'>
            <h2 className='titleModal'>{title}</h2>
            <div className="bodyModal">{body}</div>
            <div className="footerModal">
              <button  onClick={handleClose}>Cerrar</button>
            </div>
          </div>
        </div>

        : null}
    </>
  );
}

export default ModalForm;