import react from "react";

function Utilities() {
    return (




        function swapContent(id) {
            const main = document.getElementById('App__body');
            const original = document.getElementById(id);
            const clone = original.cloneNode(true);

            main.replaceWith(clone);






        }

    )
}

export default Utilities;