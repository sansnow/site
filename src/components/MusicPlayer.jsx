import React, { useRef, useState } from 'react'

const MusicPlayer = () => {
    const osts = [
        {
            "fileName": "Once Upon a Time",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 01 Once Upon a Time.flac"
        },
        {
            "fileName": "MEGALOVANIA",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 100 MEGALOVANIA.flac"
        },
        {
            "fileName": "Ghost Fight",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 10 Ghost Fight.flac"
        },
        {
            "fileName": "Determination",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 11 Determination.flac"
        },
        {
            "fileName": "sans.",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 15 sans..flac"
        },
        {
            "fileName": "Nyeh Heh Heh!",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 16 Nyeh Heh Heh!.flac"
        },
        {
            "fileName": "Dogsong",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 21 Dogsong.flac"
        },
        {
            "fileName": "Bonetrousle",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 24 Bonetrousle.flac"
        },
        {
            "fileName": "Dummy!",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 36 Dummy!.flac"
        },
        {
            "fileName": "Spooktune",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 38 Spooktune.flac"
        },
        {
            "fileName": "Metal Crusher",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 50 Metal Crusher.flac"
        },
        {
            "fileName": "Spider Dance",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 59 Spider Dance.flac"
        },
        {
            "fileName": "Death by Glamour",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 68 Death by Glamour.flac"
        },
        {
            "fileName": "ASGORE",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 77 ASGORE.flac"
        },
        {
            "fileName": "Finale",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 80 Finale.flac"
        },
        {
            "fileName": "Hopes and Dreams",
            "filePath": "/music/toby fox - UNDERTALE Soundtrack - 87 Hopes and Dreams.flac"
        }
    ];

    const [currentSongIndex, ChangeCurrentSongIndex] = useState(Math.floor(Math.random() * osts.length));
    const [currentFileName, changeCurrentFileName] = useState(osts[currentSongIndex].fileName);
    const [currentFilePath, changeCurrentFilePath] = useState(osts[currentSongIndex].filePath);



    const audioTagRef = useRef();
    const playPauseBtn = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const PlayPauseMusic = () => {
        if (isPlaying) {
            audioTagRef.current.pause();
        }
        else {
            audioTagRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }


    const playNextSong = () => {
        if (currentSongIndex != (osts.length - 1)) {
            ChangeCurrentSongIndex(currentSongIndex + 1);
            changeCurrentFileName(osts[currentSongIndex].fileName)
            changeCurrentFilePath(osts[currentSongIndex].filePath)
            setIsPlaying(false)

        } else {
            ChangeCurrentSongIndex(0);
            changeCurrentFileName(osts[currentSongIndex].fileName)
            changeCurrentFilePath(osts[currentSongIndex].filePath)
            setIsPlaying(false)
        }
    };
    return (
        <div className='my-5'>
            <h1 className='text-2xl'>* a silly little music player</h1>
            <br />
            <h2 className='tracking-wider'>never heard of undertale before ? i bet you did <br /> but just don't know it was undertale.</h2>

            <br />


            <div className='border-8 w-full h-70 flex'>

                <div className='w-1/2 h-full p-5 flex flex-col justify-between'>
                    <div>
                        <h1 className='text-xl'>Currently Playing - </h1>
                        <br />
                        <h1 className='text-2xl' >* {currentFileName}</h1>

                    </div>

                    <audio ref={audioTagRef} src={currentFilePath}></audio>

                    <div className='flex items-center justify-between  xl:text-2xl '>
                        <h1 className='cursor-pointer text-cyan-400'>[ PREV ] </h1>
                        <h1 onClick={PlayPauseMusic} ref={playPauseBtn} className='cursor-pointer text-red-600'>{isPlaying ? "[ PAUSE ]" : "[ PLAY ]"} </h1>
                        <h1 onClick={playNextSong} className='cursor-pointer text-blue-600'>[ NEXT ] </h1>
                    </div>
                </div>

                <div className='border-l-8 w-1/2 h-full p-5'>

                </div>
            </div>

        </div>
    )
}

export default MusicPlayer