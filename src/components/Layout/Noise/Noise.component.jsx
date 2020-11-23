import React, { useRef, useEffect } from "react"

let viewWidth, viewHeight, ctx

let patternSize = 100,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 1,
  patternAlpha = 16

let patternPixelDataLength = patternSize * patternSize * 4,
  patternCanvas,
  patternCtx,
  patternData,
  frame = 0

const Noise = () => {
  const canvasRef = useRef(null)

  const initCanvas = () => {
    viewWidth = canvasRef.current.width = canvasRef.current.clientWidth
    viewHeight = canvasRef.current.height = canvasRef.current.clientHeight
    ctx = canvasRef.current.getContext("2d")
    ctx.scale(patternScaleX, patternScaleY)
  }

  const initGrain = () => {
    patternCanvas = document.createElement("canvas")
    patternCanvas.width = patternSize
    patternCanvas.height = patternSize
    patternCtx = patternCanvas.getContext("2d")
    patternData = patternCtx.createImageData(patternSize, patternSize)
  }

  const update = () => {
    let value
    for (let i = 0; i < patternPixelDataLength; i += 4) {
      value = (Math.random() * 255) | 0
      patternData.data[i] = value
      patternData.data[i + 1] = value
      patternData.data[i + 2] = value
      patternData.data[i + 3] = patternAlpha
    }
    patternCtx.putImageData(patternData, 0, 0)
  }

  const draw = () => {
    ctx.clearRect(0, 0, viewWidth, viewHeight)
    ctx.fillStyle = ctx.createPattern(patternCanvas, "repeat")
    ctx.fillRect(0, 0, viewWidth, viewHeight)
  }

  useEffect(() => {
    initCanvas()
    initGrain()

    const loop = () => {
      if (++frame % patternRefreshInterval === 0) {
        update()
        draw()
      }
      requestAnimationFrame(loop)
    }

    requestAnimationFrame(loop)

    const handleResize = () => {
      viewWidth = canvasRef.current.width = canvasRef.current.clientWidth
      viewHeight = canvasRef.current.height = canvasRef.current.clientHeight
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} />
}

export default Noise
