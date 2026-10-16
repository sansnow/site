import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

const Game = () => {
  const gameBoardRef = useRef();
  const ctxRef = useRef();
  const gameControlsRef = useRef();

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const [isGamePaused, setIsGamePaused] = useState(true);

  useEffect(() => {
    const gameWidth = gameBoardRef.current.width;
    const gameHeight = gameBoardRef.current.height;
    const boardBackground = "black";
    const paddle1Color = "blue";
    const paddle2Color = "red";
    const paddleBorder = "white";
    const ballColor = "purple";
    const ballBorderColor = "white";
    const ballRadius = 12.5;
    const paddleSpeed = 50;

    let intervalId;
    let ballSpeed = 1;

    let ballX = gameWidth / 2;
    let ballY = gameHeight / 2;

    let ballXDirection = 0;
    let ballYDirection = 0;

    let paddle1 = {
      width: 25,
      height: 100,
      x: 0,
      y: 0,
    };

    let paddle2 = {
      width: 25,
      height: 100,
      x: gameWidth - 25,
      y: gameHeight - 100,
    };

    const canvas = gameBoardRef.current;

    if (!canvas) return;

    ctxRef.current = canvas.getContext("2d");

    const ctx = ctxRef.current;

    const gameStart = () => {
      createBall();
      nextTick();
    };
    const nextTick = () => {
      intervalId = setTimeout(() => {
        clearBoard();
        drawPaddles();
        moveBall();
        drawBall(ballX, ballY);
        checkCollision();
        nextTick();
      }, 10);
    };
    const clearBoard = () => {
      ctx.fillStyle = boardBackground;
      ctx.fillRect(0, 0, gameWidth, gameHeight);
    };
    const drawPaddles = () => {
      ctx.strokeStyle = paddleBorder;

      ctx.fillStyle = paddle1Color;
      ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
      ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

      ctx.fillStyle = paddle2Color;
      ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
      ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    };
    const createBall = () => {
      ballSpeed = 1;
      if (Math.round(Math.random()) == 1) {
        ballXDirection = 1;
      } else {
        ballXDirection = -1;
      }

      if (Math.round(Math.random()) == 1) {
        ballYDirection = 1;
      } else {
        ballYDirection = -1;
      }

      ballX = gameWidth / 2;
      ballY = gameHeight / 2;
      drawBall(ballX, ballY);
    };
    const moveBall = () => {
      ballX += ballSpeed * ballXDirection;
      ballY += ballSpeed * ballYDirection;
    };
    const drawBall = () => {
      ctx.fillStyle = ballColor;
      ctx.strokeStyle = ballBorderColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
    };
    const checkCollision = () => {
      if (ballY <= ballRadius) {
        ballY = ballRadius;
        ballYDirection = 1;
      }
      if (ballY >= gameHeight - ballRadius) {
        ballY = gameHeight - ballRadius;
        ballYDirection = -1;
      }

      if (
        ballXDirection === -1 &&
        ballX <= paddle1.x + paddle1.width + ballRadius
      ) {
        if (ballY > paddle1.y && ballY < paddle1.y + paddle1.height) {
          ballX = paddle1.x + paddle1.width + ballRadius;
          ballXDirection = 1;
          ballSpeed += 1;
          return;
        }
      }
      if (ballXDirection === 1 && ballX >= paddle2.x - ballRadius) {
        if (ballY > paddle2.y && ballY < paddle2.y + paddle2.height) {
          ballX = paddle2.x - ballRadius;
          ballXDirection = -1;
          ballSpeed += 1;
          return;
        }
      }

      if (ballX <= ballRadius) {
        setPlayer2Score((prevScore) => prevScore + 1);

        createBall();
        return;
      }
      if (ballX >= gameWidth + ballRadius) {
        setPlayer1Score((prevScore) => prevScore + 1);
        createBall();
        return;
      }
    };
    const changeDirection = (event) => {
      const keyPressed = event.keyCode;
      const paddle1Up = 87;
      const paddle1Down = 83;
      const paddle2Up = 38;
      const paddle2Down = 40;

      switch (keyPressed) {
        case paddle1Up:
          if (paddle1.y > 0) {
            paddle1.y -= paddleSpeed;
          }
          break;
        case paddle1Down:
          if (paddle1.y < gameHeight - paddle1.height) {
            paddle1.y += paddleSpeed;
          }
          break;
        case paddle2Up:
          if (paddle2.y > 0) {
            paddle2.y -= paddleSpeed;
          }
          break;
        case paddle2Down:
          if (paddle2.y < gameHeight - paddle2.height) {
            paddle2.y += paddleSpeed;
          }
          break;
      }
    };
    const resetGame = () => {
      setPlayer1Score(0);
      setPlayer2Score(0);

      paddle1.y = 0;
      paddle2.y = gameHeight - paddle2.height;

      clearTimeout(intervalId);
      gameStart();
      setIsGamePaused(false);
    };

    if (isGamePaused) {
    } else {
      gameStart();
    }

    window.addEventListener("keydown", changeDirection);
    gameControlsRef.current = { resetGame };

    return () => {
      clearTimeout(intervalId);
      window.removeEventListener("keydown", changeDirection);
      gameControlsRef.current = null;
    };
  }, [isGamePaused]);

  return (
    <div className="w-screen bg-black text-white min-h-screen py-4 px-10">
      <Navbar />

      <h1 className="text-2xl my-4">Let's Play Ping Pong!!</h1>

      <div className="gameContainer w-full h-[80vh] ">
        <canvas
          id="gameBoard"
          ref={gameBoardRef}
          className="border-4 "
          width={600}
          height={500}
        ></canvas>
        <div className="flex items-center gap-3  w-fit my-4 p-4">
          <div id="scoreText" className="text-2xl my-2 border-4 p-2">
            {" "}
            {player1Score} : {player2Score}{" "}
          </div>

          <button
            className="text-2xl flex items-center gap-4 border-4 cursor-pointer text-yellow-500 p-2"
            onClick={() => setIsGamePaused((prev) => !prev)}
          >
            <img src="/icons/Orange_Attack_Soul.webp" alt="" />
            <span>{isGamePaused ? "PLAY" : "STOP"}</span>
          </button>

          <button
            onClick={() => gameControlsRef.current?.resetGame()}
            className="text-2xl flex items-center gap-4 border-4 cursor-pointer text-red-500 p-2"
          >
            <img src="/icons/Soul.webp" className="inline-block" alt="" />
            <span>RESET</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
