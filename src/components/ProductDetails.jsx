import { useState } from "react";
import TextDetails from "./TextDetails";

const Text = () => {
    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(!show);
    }

return (
    <div>
        <button className="contact-us" onClick={handleShow}>{show === true ? "Ocultar" : "Contáctanos"}</button>
        {show === true && <TextDetails/>}
    </div>
)
};

export default Text;