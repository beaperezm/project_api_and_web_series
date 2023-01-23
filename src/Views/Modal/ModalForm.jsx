import React, { useState } from 'react';
import '../../styles/Modal/ModalForm.scss';

function ModalForm({ title, body }) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      {show ? <div className="modal">
        <h2>{title}</h2>
        <div className="content">{body}</div>
        <div className="actions">
          <button className="toggle-button" onClick={handleClose}>Cerrar</button>
        </div>
      </div> : null}
    </>
  );
}

export default ModalForm;