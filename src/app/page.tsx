'use client'
import React, { useState } from 'react'
import palavras from './data'
import { ArrowPathIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * palavras.length)
    return palavras[randomIndex]
  }

  const [currentWord, setCurrentWord] = useState(getRandomWord())
  const [showTraducao, setShowTraducao] = useState(false)
  const [showPronuncia, setShowPronuncia] = useState(false)

  const handleNewWord = () => {
    setCurrentWord(getRandomWord())
    setShowTraducao(false)
    setShowPronuncia(false)
  }

  return (
    <div className="bg-slate-500 w-full h-screen flex justify-center items-center">
      <div className="h-[450px] w-[550px] bg-white border rounded-md justify-center flex flex-col items-center">
        <div className="flex flex-col p-2">
          <p>Palavra</p>
          <div className="flex flex-row ">
            <form className="max-w-sm mx-auto ">
              <input
                type="text"
                id="disable-input"
                aria-label="disable input"
                className=" bg-gray-100 border border-gray-300 text-black-600 font-bold text-sm rounded-lg block w-[300px] p-2.5 cursor-not-allowed "
                value={currentWord.palavra}
              ></input>
            </form>
            <div className="pl-2 flex justify-center items-center">
              <button
                className="p-2 bg-blue-500 text-white rounded-md transform transition-transform duration-150 active:scale-95"
                onClick={handleNewWord}
              >
                <ArrowPathIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-2">
          <p>Tradução</p>
          <div className="flex flex-row">
            <form className="max-w-sm mx-auto">
              <input
                type="text"
                id="disable-input"
                aria-label="disable input"
                className=" bg-gray-100 border border-gray-300 text-black-600 font-bold text-sm rounded-lg block w-[300px] p-2.5 cursor-not-allowed "
                value={showTraducao ? currentWord.traducao : ''}
              ></input>
            </form>
            <div className="pl-2 flex justify-center items-center">
              <button
                className="p-2 bg-blue-500 text-white rounded-md transform transition-transform duration-150 active:scale-95"
                onClick={() => setShowTraducao((prev) => !prev)}
              >
                <ArrowPathIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-2">
          <p>Pronúncia</p>
          <div className="flex flex-row">
            <form className="max-w-sm mx-auto">
              <input
                type="text"
                id="disable-input"
                aria-label="disable input"
                className=" bg-gray-100 border border-gray-300 text-black-600 font-bold text-sm rounded-lg block w-[300px] p-2.5 cursor-not-allowed "
                value={showPronuncia ? currentWord.pronunciacao : ''}
              ></input>
            </form>
            <div className="pl-2 flex justify-center items-center">
              <button
                className="p-2 bg-blue-500 text-white rounded-md transform transition-transform duration-150 active:scale-95"
                onClick={() => setShowPronuncia((prev) => !prev)}
              >
                <ArrowPathIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
