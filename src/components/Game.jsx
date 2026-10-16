import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'

const Game = () => {

    const gameBoardRef = useRef();
    const ctxRef = useRef();
    const scoreTextRef = useRef();
    const resetBtnRef = useRef();

    useEffect(() => {

        const gameWidth = gameBoardRef.current.width;
        const gameHeight = gameBoardRef.current.height;
        const boardBackground = "forestgreen";
        const padle1Color = "lightblue";
        const padle2Color = "red";
        const paddleBorder = "black";
        const ballColor = "yellow";
        const ballBorderColor = "black";
        const ballRadius = 12.5;
        const paddleSpeed = 50;

        let intervalId;
        let ballSpeed = 1;

        let ballX = gameWidth / 2;
        let ballY = gameHeight / 2;

        let ballXDirection = 0;
        let ballYDirection = 0;

        let player1Score = 0;
        let player2Score = 0;

        let paddle1 = {
            width: 25,
            height: 100,
            x: 0,
            y: 0
        }

        let paddle2 = {
            width: 25,
            height: 100,
            x: gameWidth - 25,
            y: gameHeight - 100
        }


        const canvas = gameBoardRef.current;


        if(!canvas) return;

        ctxRef.current = canvas.getContext("2d");

        const ctx = ctxRef.current;


    }, [])

    return (
        <div className='w-screen bg-black text-white min-h-screen py-4 px-10'>
            <Navbar />

            <h1 className='text-2xl my-4'>Game</h1>

            <div className='gameContainer w-full h-[80vh] '>
                <canvas id='gameBoard' ref={gameBoardRef} className='border-4 ' width={600} height={500} >

                </canvas>
                <div className='flex items-center gap-3  w-fit my-4 p-4'>
                    <div ref={scoreTextRef} id="scoreText" className='text-2xl my-2 border-4 p-2'> 0 : 0 </div>
                    <button ref={resetBtnRef} id='resetBtn' className='text-2xl flex items-center gap-4 border-4 cursor-pointer text-red-500 p-2'>
                        <img src="/icons/Soul.webp" className='inline-block' alt="" />
                        <span>
                            RESET
                        </span>


                    </button>
                </div>



            </div>
        </div>
    )
}

export default Game