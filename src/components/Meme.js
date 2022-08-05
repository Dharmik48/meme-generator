import { useEffect, useState } from "react";
import InputBox from "./InputBox";
import MemeImg from "./MemeImg";
import DownloadBtn from "./DownloadBtn";
import RandomImg from "./RandomImg";

export default function Meme({ memes, currMeme, setCurrMeme }) {
    const [Text1, setText1] = useState("Text1");
    const [Text2, setText2] = useState("Text2");
    const [Text3, setText3] = useState("Text3");
    const [Text4, setText4] = useState("Text4");
    const [Text5, setText5] = useState("Text5");

    useEffect(() => {
        Object.keys(currMeme).length === 0 &&
            setCurrMeme(memes[Math.floor(Math.random() * memes.length + 1)]);
    }, []);

    return (
        <section className="py-20 mx-12 flex gap-14 flex-col lg:flex-row-reverse lg:mx-44">
            <div className="flex flex-col gap-8 flex-1">
                <form className="flex flex-col gap-8 h-min">
                    {currMeme.box_count === 1 && 
                    <div className="flex flex-col gap-8 h-min"><InputBox placeholder={"Text1"} text={Text1} setText={setText1}/></div>}
                    {currMeme.box_count === 2 && 
                    <div className="flex flex-col gap-8 h-min">
                        <InputBox placeholder={"Text1"} text={Text1} setText={setText1}/>
                        <InputBox placeholder={"Text2"} text={Text2} setText={setText2}/>
                    </div>}
                    {currMeme.box_count === 3 && 
                    <div className="flex flex-col gap-8 h-min">
                        <InputBox placeholder={"Text1"} text={Text1} setText={setText1}/>
                        <InputBox placeholder={"Text2"} text={Text2} setText={setText2}/>
                        <InputBox placeholder={"Text3"} text={Text3} setText={setText3}/>
                    </div>}
                    {currMeme.box_count === 4 && 
                    <div className="flex flex-col gap-8 h-min">
                        <InputBox placeholder={"Text1"} text={Text1} setText={setText1}/>
                        <InputBox placeholder={"Text2"} text={Text2} setText={setText2}/>
                        <InputBox placeholder={"Text3"} text={Text3} setText={setText3}/>
                        <InputBox placeholder={"Text4"} text={Text4} setText={setText4}/>
                    </div>}
                    {currMeme.box_count === 5 && 
                    <div className="flex flex-col gap-8 h-min">
                        <InputBox placeholder={"Text1"} text={Text1} setText={setText1}/>
                        <InputBox placeholder={"Text2"} text={Text2} setText={setText2}/>
                        <InputBox placeholder={"Text3"} text={Text3} setText={setText3}/>
                        <InputBox placeholder={"Text4"} text={Text4} setText={setText4}/>
                        <InputBox placeholder={"Text5"} text={Text5} setText={setText5}/>
                    </div>}
                </form>
                <DownloadBtn />
                <RandomImg memes={memes} setCurrMeme={setCurrMeme} />
                <p className="text-algae dark:text-white">
                    Hint: You can drag and move around the text!
                </p>
            </div>
            <MemeImg
                memeData={currMeme}
                text1={Text1}
                text2={Text2}
                text3={Text3}
                text4={Text4}
                text5={Text5}
            />
        </section>
    );
}
