import React from 'react';
import { useState } from "react"
import Wave from 'react-wavify'
import { Button } from 'react-bootstrap'
import Modal from './Modal'



const Wase = () => {

    const [see, setSee] = useState(false);

    return (
        <div >
            <div style={{ display: "flex", flexDirection: "column", textAlign: "center", height: "245px" }}>
                <Button style={{ color: "green", fontSize: "50px" }} onClick={() => setSee(true)} >Hello</Button>
                {see && (<Modal closeModal={_ => setSee(false)}><div className="center" >
                    <p style={{ fontSize: "30px", fontFamily: "sans-serif", fontWeight: "bold" }}>THANK YOU FOR VISITING THIS PAGE</p>

                </div></Modal>)}
               <p style={{textAlign:"center",fontSize:"60px",fontWeight:"bold",color:"white"}}>Multiple of numbers</p>
        
            </div>

        </div>

    )
}
export default Wase