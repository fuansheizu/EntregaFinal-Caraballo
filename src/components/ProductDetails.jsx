import { useState } from "react";
import TextDetails from "./TextDetails";

const Text = () => {
    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(!show);
    }

return (
    <div>
        <button onClick={handleShow}>{show === true ? "Ocultar" : "Mostrar"}</button>
        {show === true && <TextDetails/>}
    </div>
)
};

export default Text;