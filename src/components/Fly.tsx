import "./Fly.scss"
import fly from "../assets/fly.svg"
import React, { useEffect, useRef } from "react"
import _ from "lodash"

// Make fly move around the screen

const Fly = () => {
  const [alive, setAlive] = React.useState(true)
  const [deathAnimation, setDeathAnimation] = React.useState(false)
  const flyRef = useRef<HTMLImageElement>(null)
  const body = document.body
  const defaultRandomX = Math.random() * (body.clientWidth - 100)
  const defaultRandomY = Math.random() * (body.clientHeight - 100)

  const moveFly = _.throttle(function () {
    const fly = flyRef.current

    if (!fly || !body) return

    const flyWidth = fly.clientWidth
    const flyHeight = fly.clientHeight

    const bodyWidth = body.clientWidth
    const bodyHeight = body.clientHeight

    const x = Math.random() * (bodyWidth - flyWidth)
    const y = Math.random() * (bodyHeight - flyHeight)

    fly.style.left = `${x}px`
    fly.style.top = `${y}px`

    setTimeout(() => {
      const x1 = Math.random() * (bodyWidth - flyWidth)
      const y1 = Math.random() * (bodyHeight - flyHeight)

      fly.style.left = `${x1}px`
      fly.style.top = `${y1}px`
    }, 100)

    setTimeout(() => {
      const x2 = Math.random() * (bodyWidth - flyWidth)
      const y2 = Math.random() * (bodyHeight - flyHeight)

      fly.style.left = `${x2}px`
      fly.style.top = `${y2}px`
    }, 200)
  }, 66)

  useEffect(() => {
    if (!alive) return
    // loop moveFly every x seconds between 5 and 15
    const interval = setInterval(() => {
      moveFly()
    }, Math.random() * 10000 + 5000)

    return () => clearInterval(interval)
  }, [alive, moveFly])

  useEffect(() => {
    // run moveFly on mouseover event
    const fly = flyRef.current
    if (!fly) return

    fly.addEventListener("mouseover", moveFly)

    return () => fly.removeEventListener("mouseover", moveFly)
  }, [deathAnimation, moveFly])

  useEffect(() => {
    // fly is squashed when clicked
    const fly = flyRef.current
    if (!alive || !fly) return

    if (deathAnimation) {
      fly.classList.add("squash")
      setTimeout(() => {
        // fly.classList.remove("squash")
        setAlive(false)
      }, 300)
    } else {
      fly.classList.remove("squash")
      setAlive(true)
    }
  }, [alive, deathAnimation])

  const DontCheat = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault()
      e.stopPropagation()

      alert("Don't cheat!")
    }
  }

  if (!alive) return null

  return (
    <div
      onKeyDown={DontCheat}
      tabIndex={0}
      className='fly'
      ref={flyRef}
      style={{ top: `${defaultRandomY}px`, left: `${defaultRandomX}px` }}
    >
      <img src={fly} onClick={() => setDeathAnimation(true)} alt='fly' style={{ display: alive ? "block" : "none" }} />
    </div>
  )
}

export default Fly
