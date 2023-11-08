import { useState } from "react";


const ButtonColorPick = () => {

    const [buttonColor, setButtonColor] = useState("#3d7c40");
    const [showModal, setShowModal] = useState(false);

    const handleColorChange = (color: string) => {
        setButtonColor(color);
    }

    const handleShowModal = () => {
        setShowModal(true);
    }

    return (
            <div className="m-3">
                <h2> Ejemplo 3</h2>

                {/*Componente Padre*/}
                <button variant="primary" style={{backgroundColor: buttonColor}}
                onClick={handleShowModal}> </button>

                {/*Componente Hijo*/}
                {showModal && <ModalColorPick
                show={showModal}
                onHide={()=> setShowModal(false)}
                handleColorChange={handleColorChange} />}
                
            </div>
    
  )
}

export default ButtonColorPick