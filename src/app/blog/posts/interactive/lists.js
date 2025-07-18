"use client"

import { useState, useEffect } from "react"
import Bunny from "@/assets/svg/bunny.svg"
import Plant from "@/assets/svg/plant.svg"
import Headphones from "@/assets/svg/headphones.svg"
import Dumbbell from "@/assets/svg/dumbbell.svg"
import Quotes from "@/assets/svg/quotes.svg"
import Popcorn from "@/assets/svg/popcorn.svg"
import Tomatoes from "@/assets/svg/tomatoes.svg"
import Airplane from "@/assets/svg/airplane.svg"
import "@/app/globals.css"

export default function InteractiveScene() {
  const [activeItem, setActiveItem] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    // Check immediately on mount
    checkScreenSize()

    // Set up event listener for window resize
    window.addEventListener("resize", checkScreenSize)

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Content for each popup
  const itemContent = {
    bunny: {
      title: "Best Coco Pictures",
      description: "from 2024 and 2025",
    },
    plant: {
      title: "Lessons Learned",
      description: "throughout 2024 and 2025.",
    },
    headphones: {
      title: "My Favorite Songs",
      description:
        "from 2024 and 2025 (because Spotify wrapped really doesn't get me).",
    },
    dumbbell: {
      title: "Goals",
      description: "AKA Resolutions",
    },
    quotes: {
      title: "Quotes",
      description: "that inspired me thoughout 2024 and 2025.",
    },
    popcorn: {
      title: "My Favorite Movies",
      description: "the ultimate list ",
    },
    tomatoes: {
      title: "Favorite Recipes",
      description: "what I ate all 2024 and 2025.",
    },
    airplane: {
      title: "Travel",
      description: "where I went in 2024 and 2025.",
    },
  }

  const handleItemClick = (item) => {
    setActiveItem(item)
  }

  const handleClosePopup = () => {
    setActiveItem(null)
  }

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className=" text-center text-5xl font-bold mb-4">whoops!</h2>
        <h2 className="text-2xl font-bold text-center mb-4">
          you need a wider screen to view this content...
        </h2>
        <h1 className="text-xl italic text-center">
          try viewing on a computer or turning your device sideways
        </h1>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-[min(92vw,1100px)] mx-auto h-[60vh] min-h-[400px] max-h-[600px] px-4">
      {/* Container with aspect ratio */}
      <div className="absolute bottom-[-14%] left-[-1%] z-11 w-[clamp(450px,35vw,550px)]">
        <Bunny
          className="w-full h-auto cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => handleItemClick("bunny")}
          preserveAspectRatio="xMidYMid meet"
        />
      </div>
      <div className="absolute top-[-2%] left-[-11%] z-10 w-[clamp(430px,30vw,520px)]">
        <Plant
          className="w-full h-auto -rotate-90 cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => handleItemClick("plant")}
        />
      </div>
      <div className="absolute bottom-[-7%] right-[18%] z-10 w-[clamp(440px,34vw,530px)]">
        <Headphones
          className="w-full h-auto cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => handleItemClick("headphones")}
        />
      </div>
      <div className="absolute bottom-[2%] right-[-10%] z-10 w-[clamp(435px,30vw,510px)]">
        <Dumbbell
          className="w-full h-auto -rotate-90 cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => handleItemClick("dumbbell")}
        />
      </div>
      <div className="absolute top-[0%] right-[-10%] transform -translate-x-1/2 z-11 w-[clamp(200px,16vw,280px)]">
        <Quotes
          className="w-full h-auto cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => handleItemClick("quotes")}
        />
      </div>
      <div className="absolute top-[22%] left-[13%] z-11 w-[clamp(300px,18vw,380px)]">
        <Popcorn
          className="w-full h-auto cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => handleItemClick("popcorn")}
        />
      </div>
      <div className="absolute top-[-7%] left-[19%] z-10 w-[clamp(340px,28vw,460px)]">
        <Tomatoes
          className="w-full h-auto -rotate-7 cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => handleItemClick("tomatoes")}
        />
      </div>
      <div className="absolute top-[0%] right-[12%] z-10 w-[clamp(445px,30vw,480px)]">
        <Airplane
          className="w-full h-auto cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => handleItemClick("airplane")}
        />
      </div>

      {/* Popup Modal */}
      {activeItem && (
        <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-foreground p-8 rounded-lg max-w-md border border-background relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2
              px-1.5 border border-background rounded-full
              bg-secondary text-background text-xs
              hover:translate-y-[-0.25rem] hover:shadow-[0_0.25rem_0_0_#CC6378] transition duration-300"
            >
              ✕
            </button>
            <h2 className="text-2xl text-background font-bold mb-2">
              {itemContent[activeItem].title}
            </h2>
            <p className="text-[#3a4631] mb-4">
              {itemContent[activeItem].description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

//don't just put the interactive lists at the bottom of interactive/[slug]/page.js
//because this is a specific post that needs its own layout and styling
//this structure allows me to drop in any interactive post without havvinf to make a whole new page

// tooltip styling but it's clunky and I don't like how it looks

// import Tippy from "@tippyjs/react"
// import "tippy.js/dist/tippy.css"

// <Tippy
// className="!bg-foreground !text-background"
// content="travel"
// placement="top"
// arrow={false}
// offset={[-30, 0]}
// >
// </Tippy>
