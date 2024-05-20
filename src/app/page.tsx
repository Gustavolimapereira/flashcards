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
      <div className="h-[650px] w-[650px] bg-white border rounded-md justify-center flex flex-col items-center">
        <div className="flex flex-row p-6">
          <p className="m-1 p-2 font-bold">{currentWord.palavra}</p>
          <div className="flex justify-center items-center">
            <button
              className="p-2 bg-blue-500 text-white rounded-md transform transition-transform duration-150 active:scale-95"
              onClick={handleNewWord}
            >
              <ArrowPathIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <button
          className="p-2 bg-blue-500 text-white rounded-md transform transition-transform duration-150 active:scale-95"
          onClick={() => setShowTraducao((prev) => !prev)}
        >
          <ArrowPathIcon className="w-5 h-5" />
        </button>

        {showTraducao && <p>{currentWord.traducao}</p>}

        <button
          className="p-2 bg-blue-500 text-white rounded-md transform transition-transform duration-150 active:scale-95"
          onClick={() => setShowPronuncia((prev) => !prev)}
        >
          <ArrowPathIcon className="w-5 h-5" />
        </button>

        {showPronuncia && <p>{currentWord.pronunciacao}</p>}
      </div>
    </div>
  )
}
