import React from 'react'
import Wave from 'react-wavify'

const Page = () => {

    return (
        <div  >
            <div style={{display:"flex"}}>
            <Wave fill="url(#gradient)"
            
              paused={false}
              options={{
                height: 10,
                amplitude: 60,
                speed: 0.15,
                points: 10
              }}
        >
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="60%" stopColor="blue" />
                        <stop offset="90%" stopColor="white" />
                    </linearGradient>
                </defs>
            </Wave>
        </div>
        </div>
    )
}
export default Page