import Pagination from "./Pagination";
import { useEffect, useState } from "react";

export default function Browse({ memes, setCurrMeme, setBrowse }) {
    const [pages, setPages] = useState();
    const [currPage, setCurrPage] = useState(1);

    useEffect(() => {
        // TODO: Change this magic number to a env variable
        setPages(Math.floor(memes.length / 25));
        console.log(currPage);
    });

    function changePage(newPage) {
        if (newPage > pages || newPage <= 0) return;
        setCurrPage(newPage);
    }

    return (
        <section className="my-12 px-12 lg:px-44">
            <h1 className="text-4xl mb-4 text-algae dark:text-white">
                Top meme templates
            </h1>
            <main>
                <ul className="columns-1 md:columns-2 lg:columns-3 -mx-4">
                    {memes.map((meme, i) => {
                        return (
                            <li
                                key={meme.id}
                                className="cursor-pointer p-4"
                                onClick={() => {
                                    setCurrMeme(meme);
                                    setBrowse(false);
                                }}
                            >
                                <img
                                    src={meme.url}
                                    alt={meme.name}
                                    loading="lazy"
                                />
                            </li>
                        );
                    })}
                </ul>
            </main>
            <Pagination
                onClickCaptured={() => console.log("CLICKED")}
                pages={pages}
                currPage={currPage}
                onPaginationChanged={changePage}
            />
        </section>
    );
}
