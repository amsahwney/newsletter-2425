"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import AuthCheck from "@/components/AuthCheck"
import "@/app/globals.css"

// HomePage is the main page of the application that displays a grid of links to different sections.
export default function HomePage() {
  return (
    <AuthCheck>
      <div className="min-h-screen p-4 md:p-0">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 md:gap-0 md:h-screen">
          <GridSquare
            title="amrita's lists"
            href="/blog/interactive/lists"
            color="bg-background hover:bg-secondary"
          />
          <GridSquare
            title="monthly highlights"
            href="/blog/highlights"
            color="bg-background hover:bg-secondary"
          />
          <GridSquare
            title="archives"
            href="/blog"
            color="bg-background hover:bg-secondary"
          />
        </div>
      </div>
    </AuthCheck>
  )
}

// GridSquare is a component that renders a square with a title and a link to a page.
// I could put this in a separate file, but I think it's fine to keep it here for now.
function GridSquare({ title, href, color }) {
  return (
    <Link href={href}>
      <div
        className={`${color} min-h-[calc(100vh/3)] h-full md:h-full flex flex-col items-start justify-center border border-[#706A5D] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:z-10 relative p-6 group`}
      >
        <h2
          className="text-2xl font-bold text-foreground 
                    group-hover:text-3xl 
                    group-hover:[text-shadow:_0_0.25rem_0_#706A5D] 
                    transition-all duration-300"
        >
          {title}
        </h2>
      </div>
    </Link>
  )
}

// LATER
// add text animations
// possible images to square backgrounds or text takes up the whole square in a cool way
// see deepseek potential issues to improve UI
// add a cool cursor?
