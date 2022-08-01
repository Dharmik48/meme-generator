import Pagination from "./Pagination";
import { useEffect, useState } from "react";

export default function Browse({ memes, setCurrMeme, setBrowse }) {
    const MEMES_PER_PAGE = 25;

    const [pages, setPages] = useState();
    const [currPage, setCurrPage] = useState(1);
    const [currMemes, setCurrMemes] = useState(memes.slice(currPage * 25));

    useEffect(() => {
        setPages(Math.floor(memes.length / MEMES_PER_PAGE));
        // Set currentMemes based on the current page
        setCurrMemes(
            memes.slice(
                (currPage - 1) * MEMES_PER_PAGE,
                currPage * MEMES_PER_PAGE
            )
        );
    }, [currPage, memes]);

    function changePage(newPage) {
        if (newPage > pages || newPage <= 0) return;
        setCurrPage(() => newPage);
    }

    return (
        <section className="my-12 px-12 lg:px-44">
            <h1 className="text-4xl mb-4 text-algae dark:text-white">
                Top meme templates
            </h1>
            <main>
                <ul className="columns-1 md:columns-2 lg:columns-3 -mx-4">
                    {currMemes.map((meme, i) => (
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
                    ))}
                </ul>
            </main>
            <Pagination
                pages={pages}
                currPage={currPage}
                onPaginationChanged={changePage}
            />
        </section>
    );
=======
import { useState } from 'react';

export default function Browse({ memes, setCurrMeme, setBrowse }) {
  const [memeSearch, setMemeSearch] = useState('');

  const renderMemes = memes
    .slice(0, 25)
    .filter((meme) => {
      if (memeSearch === '') {
        return meme;
      } else if (
        meme.name.toLowerCase().includes(memeSearch.toLocaleLowerCase())
      ) {
        return meme;
      }
      return null;
    })
    .map((meme) => {
      return (
        <li
          key={meme.id}
          className="cursor-pointer p-4"
          onClick={() => {
            setCurrMeme(meme);
            setBrowse(false);
          }}
        >
          <img src={meme.url} alt={meme.name} loading="lazy" />
        </li>
      );
    });

  return (
    <section className="my-12 px-12 lg:px-44">
      <h1 className="text-4xl mb-4 text-algae dark:text-white">
        Top meme templates
      </h1>
      <input
        onChange={(event) => setMemeSearch(event.target.value)}
        className="p-8 text-4xl text-black placeholder:text-zinc-400 dark:text-white bg-transparent border-zinc-400 dark:border-white border-4 rounded-2xl dark:placeholder:text-white flex-1 lg:text-xl lg:border-2 lg:py-4 lg:px-6 lg:rounded-lg"
        type="text"
        placeholder="Search Meme"
      />
      <main>
        <ul className="columns-1 md:columns-2 lg:columns-3 -mx-4">
          {renderMemes}
        </ul>
      </main>
    </section>
  );
}
