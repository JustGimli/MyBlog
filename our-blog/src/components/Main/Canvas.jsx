import React, { useEffect, useState } from "react";
import { Circle } from "react-konva";

const Canvas = () => {

    
    const [isUpdate, setIsUpdate] = useState(true);
    const [balls, setBall] = useState([]); // Нужно поменять на object`

    const ballsNumber = 50;

    
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    function randomData(windowWidth, windowHeight) {
        let angel = getRandom(Math.PI / 3, Math.PI - Math.PI / 3);
        let speed = getRandom(0.5, 1.5);
        let x = getRandom(5, windowWidth - 5);
        let y = 300;
        let radius = getRandom(1, 2);
    
        return [x, y, radius, speed, angel]
    }

    useEffect(() => {
        
        if (isUpdate) {

            for (let i = 0; i < ballsNumber; i++) {
                let [x, y, radius, speed, angel] = randomData(window.innerWidth, window.innerWidth);
    
                let ballData = {
                    'x': x,
                    'y': y,
                    'speed': speed,
                    'radius': radius,
                    'angel': angel
                }
                setBall([balls.push(ballData)]);
                
            }
            setIsUpdate(false);
            
        } else {
            for (let i = 0; i < balls.length; i++) {
                let ball = balls[i];
                let x = ball.x;
                let y = ball.y;

                x += Math.cos(ball.angel) * ball.speed;
                y += Math.sin(ball.angel) * ball.speed;

    
                let ballData = {
                    'x': x,
                    'y': y,
                    'speed': ball.speed,
                    'radius': ball.radius,
                    'angel': ball.angel
                }
                
            }
        }
        

    }, [])

    return (
        <>
           
            
            
                    {
                        
                        balls.map((ball, idx) => {
                            {console.log(balls[20]) }    
                            <Circle
                                
                                x={ball.x - ball.radius} y={ball.y - ball.radius} width={ball.radius * 2} height={ball.radius * 2}
                                fill={"white"}
                                key = {idx}
                                // shadowBlur={10}
                                // onClick={this.handleClick}
                            />
                        })
                    }
            


        </>
    )
  
}

export default Canvas
