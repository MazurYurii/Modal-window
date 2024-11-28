import './ModalWindow.css';

export const ModalWindow = ({call, onDestroy}) => {
    if(!call) {
        return null;
    }

    return(
        <div className='modal' onClick={onDestroy}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <i className='close' onClick={onDestroy}>X</i>
                <h1>Delite ?</h1>
                <div className="btns">
                    <button className='accept'>Delite</button>
                    <button className='reject'>Close</button>
                </div>
            </div>
        </div>
    )
}