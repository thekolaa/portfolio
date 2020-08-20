import React from 'react'

const Spinner = () => {
    return (  
        <>
            <div className="
                d-flex justify-content-center  
                align-self-center 
                align-items-center 
                container__70vh">
                <div class="spinner-border" role="status" style={{ height: "150px", width:"150px", color: "#172734"}}>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </>
    );
}
 
export default Spinner;