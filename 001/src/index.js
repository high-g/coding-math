import './style.scss'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

//context.fillRect(0, 0, width, height)

for(let i=0; i<100; i+=1) {
  context.beginPath()
  context.moveTo(Math.random() * width, Math.random() * height)
  context.lineTo(Math.random() * width, Math.random() * height)
  context.stroke()
}