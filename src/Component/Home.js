import React, { useEffect, useState } from 'react'
import Wave from 'react-wavify'
import { Button } from "react-bootstrap"
import './Home.css'



const Home = () => {
    const [one, setOne] = useState(1)
    const [two, setTwo] = useState(2)
    const [three, setThree] = useState(3)
    const [four, setFour] = useState(4)
    const [five, setFive] = useState(5)
    const [six, setSix] = useState(6)
    const [seven, setSeven] = useState(7)
    const [eight, setEight] = useState(8)
    const [nine, setNine] = useState(9)
  
 

    const increCountOne=()=>{
        setOne(one+1)
    }
    const increCountTwo=()=>{
        setTwo(two+2)
    }
    const increCountThree=()=>{
        setThree(three+3)
    }
    const increCountFour=()=>{
        setFour(four+4)
    }
    const increCountFive=()=>{
        setFive(five+5)
    }
    const increCountSix=()=>{
        setSix(six+6)
    }
    const increCountSeven=()=>{
        setSeven(seven+7)
    }
    const increCountEight=()=>{
        setEight(eight+8)
    }
    const increCountNine=()=>{
        setNine(nine+9)
    }

return (
    <div >
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center", height: "245px" }}>
            <div style={{ color: "white", fontSize: "50px" }}>Welcome !
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Button className="box" onClick={() => increCountOne()} style={{ backgroundColor: "white", textAlign: "center", fontSize: "100px" }}>{one}</Button>
                <Button className="box" onClick={() => increCountTwo()} style={{ backgroundColor: "blue", textAlign: "center", fontSize: "100px" }}>{two}</Button>
                <Button className="box" onClick={() => increCountThree()} style={{ backgroundColor: "green", textAlign: "center", fontSize: "100px" }}>{three} </Button>
                <Button className="box" onClick={() => increCountFour()} style={{ backgroundColor: "red", textAlign: "center", fontSize: "100px" }}>{four} </Button>
                <Button className="box" onClick={() => increCountFive()} style={{ backgroundColor: "orange", textAlign: "center", fontSize: "100px" }}> {five}</Button>
                <Button className="box" onClick={() => increCountSix()} style={{ backgroundColor: "", textAlign: "center", fontSize: "100px" }}> {six}</Button>
                <Button className="box" onClick={() => increCountSeven()} style={{ backgroundColor: "pink", textAlign: "center", fontSize: "100px" }}>{seven} </Button>
                <Button className="box" onClick={() => increCountEight()} style={{ backgroundColor: "aquarine", textAlign: "center", fontSize: "100px" }}>{eight}</Button>
                <Button className="box" onClick={() => increCountNine()} style={{ backgroundColor: "brown", textAlign: "center", fontSize: "100px" }}> {nine}</Button>
            </div>

        </div>

    </div>

)
}
export default Home