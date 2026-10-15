import React from 'react'

const Home = () => {

    const ascii_art_dlgs = [
        {
            ascii: `
⢰⠑⠉⠉⠊⢆⠀⠀⠀⠀
⡇⡈⡤⢁⠀⠈⠑⠢⠴⢱
⡇⠈⠉⠁⠀⠀⠀⠀⠀⢸
⢇⠀⠀⠀⠀⠀⠀⠀⠀⡜
⠘⠔⠹⡠⠋⠹⡠⠛⠔⠁
        `,
            dialogues: [
                "bhow bhow",
                "bhow bhow bhow bhow",
                "am i annoying?",
                "Hey! Hey! can i have some pie!"
            ],
        },
        {
            ascii: `
⠀⠀⢀⣤⣶⣶⣶⣶⣶⣶⣶⣤⠀⠀⠀
⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠀
⢰⣾⣿⠛⠉⠙⣿⠛⠛⠛⢿⣿⣿⣿⡀
⣾⣿⠉⠀⢸⡇⠀⠀⢸⡇⠀⣿⠿⢹⣿
⣿⣿⠀⠀⠈⢡⡀⣀⣬⠁⠀⢉⣴⣾⣿
⢿⡿⣿⣶⣖⣀⣉⠉⠀⣰⣶⣿⡿⢿⠿
⠘⠃⠙⠛⠛⢛⣯⣀⣀⣟⡛⠛⠇⠘⠀
⠀⠀⣤⠒⣶⢊⣛⢛⣛⢋⠛⣶⢢⡄⠀
⠀⢸⣸⣿⠀⠀⠀⠀⠀⠀⠀⢻⣇⣸⠀
⠀⢸⣭⣿⣾⣷⣿⣾⣷⣿⣿⣾⣯⣽⠀
⠀⠀⠀⣿⣿⣿⡟⠛⣿⣿⣿⣿⡇⠀⠀
⠀⠀⠀⠉⣭⣿⣏⠀⣿⣿⣿⣭⠁⠀⠀
        `,
            dialogues: [
                "hii there stranger ! , wanna play with me?",
                "stay determined!!",
                "...",
            ]
        },
        {
            ascii: `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣶⣶⣶⣶⣶⣶⣆⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⠋⠁⠀⣀⠀⢹⣿⣿⣿⠀⢀⡀⠀⠉⢻⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢹⣆⡀⠀⠉⠀⣾⡟⠙⣿⡄⠈⠁⠀⣀⣾⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣿⡟⢯⣭⣾⣿⣀⣀⣻⣿⣮⣽⠛⢿⣧⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠸⣧⣄⠒⢠⣙⢛⡛⣛⣛⢛⡋⡄⣠⣴⡟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣶⣦⡀⠙⠿⣷⣶⣭⣘⣃⣘⣃⣘⣥⣾⡿⠏⣡⣾⠟⠒⠀⠀⠀⠀
⠀⠀⠀⠀⠂⠈⠙⠛⢶⣄⠀⠀⠛⡛⠛⠋⣛⠛⠃⠀⢀⣠⡿⠃⠀⠀⢦⡀⠀⠀
⠀⠀⡠⠊⠀⠀⣴⠀⠀⠈⡟⠒⡤⠙⠿⠿⠁⠤⢶⠚⠉⠉⠀⢠⠁⠀⠀⠱⣄⠀
⠀⢠⠁⠀⠀⠀⣿⡀⣀⣀⡁⠤⡇⢰⣷⣶⡄⣴⢼⠀⠀⢀⣠⢿⠀⠀⠀⠀⢹⡄
⠰⢿⠀⠀⠀⢠⡉⠉⠀⠀⠀⡄⢺⢸⣿⣿⡇⡗⢺⢰⠈⠉⠀⠘⡆⠀⠀⠀⠀⡇
⠀⠈⠳⣄⡀⢸⡇⠀⠀⠀⠀⣡⢚⢸⣿⣿⠇⠗⣆⠆⠀⠀⠀⠀⡇⠀⠀⢀⡴⠃
⠀⠀⠀⠈⠃⠘⣷⣤⠀⠀⠀⢹⣾⣶⠒⠒⠀⢳⣧⣤⣄⣠⣄⣾⠃⢴⠆⠉⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⢉⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢰⠀⢠⡟⠀⠀⠀⠀⢀⢄⠀⠀⠀⢸⡇⠀⠀⠨⡆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡘⢀⣜⠇⠀⠀⠀⠀⢸⠸⡀⠀⠀⢸⣿⠀⠀⠀⢡⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡇⢸⣿⠀⠀⠀⠀⠠⡇⠀⡇⠀⠀⠈⣿⠀⠀⠀⢸⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⠛⠋⠤⠤⠤⠤⠄⠁⠀⠁⠤⠄⠠⠿⠧⠄⠛⠛⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣴⣶⣦⣄⠲⣶⠀⠀⠀⠀⠀⠀⠀⢠⣷⣶⡶⢂⣠⣴⣶⣤⡀⠀⠀
⠀⠀⠀⠀⠸⠿⠿⠿⠿⠧⠠⠄⠀⠀⠀⠀⠀⠀⠤⠤⠤⠐⠿⠿⠿⠿⠿⠃⠀⠀
        `,
            dialogues: [
                "heyy kiddo!",
                "you know, if she didn't make me promise her that day ....",
                "hey, that's okay",
                "i can't sell you this fried snow.",
            ]
        }, {
            ascii: `
⠀⠀⠀⠀⠀⠀⠀⢠⣤⣤⣤⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣀⠤⠛⠁⠀⠀⠀⠘⠛⠤⣀⠀⠀⠀
⠀⠀⠀⣶⠉⠀⠀⣀⣀⣀⣀⡀⠀⠀⢙⡆⠀⠀
⠀⠀⣸⠀⣀⡴⠛⠁⠈⠀⠁⠙⠛⣤⠀⢸⠀⠀
⠀⢸⡇⣄⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡀⣿⠀
⢠⣼⣧⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢣⣿⣤
⠸⣿⣿⠄⠀⠀⡖⢶⡂⠀⢰⡖⣶⠀⠀⢸⣿⣿
⢸⣿⣿⠂⠀⠀⡇⢽⡂⠀⢸⡇⣿⠀⠀⢸⣿⣿
⢨⣿⣿⡁⠀⠀⡇⣽⠂⠀⢸⡇⣿⠀⠀⢸⣿⣿
⠀⠀⢸⡁⠀⠀⠛⠛⠁⠀⠘⠛⠛⠀⠀⢸⡁⠀
⠀⠀⢸⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠄⠀
⠀⠀⢸⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠄⠀
⠀⠀⢸⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠂⠀
⠀⠀⢸⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡁⠀
⠀⠀⢸⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠄⠀
⠀⠀⠸⣁⠀⠀⣠⣀⠀⢀⣠⢄⡀⠀⠀⣸⠂⠀
⠀⠀⠀⠉⢶⡶⠁⠈⢷⡎⠁⠈⢱⠶⠾⠁⠀⠀
        `,
            dialogues: [
                "oh, i am REAL funny",
                "i usually come to the RUINS, because there's nobody around",
                " that time you tried to destroy me... but... you failed....",
                "now it's just some hairy guy that shows up once a month...",
            ]
        }
    ];

    const random_ascii_num = Math.floor(Math.random() * ascii_art_dlgs.length)
    const random_dialogue_num = Math.floor(Math.random() * ascii_art_dlgs[random_ascii_num].dialogues.length)

    const selected_ascii_obj = ascii_art_dlgs[random_ascii_num];
    const selected_ascii_dialogue = selected_ascii_obj.dialogues[random_dialogue_num];

    const isLong = selected_ascii_dialogue.length > 20;

    const mergestring = (s1, s2) => (s1 + " " + s2);

    return (
        <div className='min-h-[60vh] w-full relative flex items-center'>
            <div className='max-w-1/2 md:w-1/2 h-full flex items-center'>
                <div className='h-full w-full flex flex-col items-center '>
                    <pre className='w-fit opacity-80 '>
                        {selected_ascii_obj.ascii}
                    </pre>
                    <div className={mergestring('border-8 bg-black h-fit p-3 text-xl w-full', "")}>
                        * {selected_ascii_dialogue}
                    </div>
                </div>
            </div>

            <div className='w-full h-full py-10 px-6'>
                <div className="relative w-full h-full text-xl tracking-wider flex flex-col justify-between">
                    <div>
                        <h1>
                            Hi there !!
                        </h1>
                        <br />
                        <h1>
                            i am sansnow, a huge undertale fan and i sometimes program stuff.
                        </h1>

                        <br />
                        <br />
                        <h3 className='text-sm opacity-70 '>btw, if you haven't guessed, this site's ui is inspired by <a href="https://undertale.com/" className='underline'>undertale</a> .</h3>
                    </div>


                    <br />
                    <div className='w-full flex justify-between '>

                        <h1 className='text-2xl '>
                            <a target='_blank' href="https://github.com/sansnow" className='text-green-500'> <pre>[ GITHUB ]</pre></a>

                        </h1>
                        <img src="/walking_dog.gif" className='w-40 h-40 ' alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home