import { useEffect } from 'react'

const LectorCodigoBarras = () => {
  const abrirCamara = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        const video = document.getElementById('video')
        video.srcObject = stream
        video.onloadeddata = (ev) => video.play()
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    abrirCamara()
  }, [])
  return (
    <div>
      <video id="video" width="400" height="400" ></video>
    </div>
  )
}

export default LectorCodigoBarras
