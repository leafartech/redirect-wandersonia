'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'

export default function Home() {
  const [steps, setSteps] = useState(0)
  let time = 0
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      time++;
      if (time >= 10) {
        clearInterval(interval);
      }
    }, 500);

    const animationInterval = setInterval(() => {
      setSteps((prevState) => {
        if (prevState < 100) {
          return prevState + 1;
        }
        clearInterval(animationInterval);
        return prevState;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(animationInterval);
    };
  }, []);

  const barStyle = {
    width: `${steps}%`,
    transition: "width 0.5s ease-in-out" // Adicionando a animação ease-in-out
  };

  if (barStyle.width === '100%') {
    setTimeout(() => {
      router.push('https://sendflow.pro/i/kGHkVbueVehwAFzusjV3')
    }, 500)
  }

  return (
    <main className="w-full h-screen flex items-center justify-center bg-white">
      <div className="relative flex flex-col text-center items-center justify-center sm:h-[444px] px-4 sm:px-12 rounded-full">
        <img
          src="./images/logo.png"
          alt=""
          className="-translate-y-6 w-56 w-56 sm:w-64 sm:h-64 object-contain rounded-full" />
        <div>
          <h2 className="text-3xl font-semibold">Aguarde um momento,</h2>
          <p className="text-zinc-700 leading-5 sm:text-base text-sm">Estamos procurando o melhor grupo para você...</p>
        </div>
        <div className="relative flex justify-center items-center rounded-full w-full h-8 mt-4 bg-gray-200 overflow-hidden">
          <div className={`absolute left-0 h-full bg-orange-600`} style={barStyle}></div>
          {barStyle.width === '100%' && (
            <svg viewBox="25 25 50 50" className="z-10 absolute">
              <circle r="20" cy="50" cx="50"></circle>
            </svg>
          )}
        </div>
      </div>
    </main>
  )
}