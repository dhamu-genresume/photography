// import { useEffect, useRef, useState } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:5000"); // Connect to signaling server

// function CaptureStream() {
//   const videoRef = useRef(null);
//   const peerConnection = useRef(new RTCPeerConnection({
//     iceServers: [{ urls: "stun:stun.l.google.com:19302" }] // Google's free STUN server
//   }));

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//       .then((stream) => {
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//         stream.getTracks().forEach((track) => {
//           peerConnection.current.addTrack(track, stream);
//         });
//       });

//     peerConnection.current.onicecandidate = (event) => {
//       if (event.candidate) {
//         socket.emit("candidate", event.candidate);
//       }
//     };

//     socket.on("answer", (answer) => {
//       peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
//     });

//     socket.on("candidate", (candidate) => {
//       peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
//     });

//     peerConnection.current.createOffer()
//       .then((offer) => peerConnection.current.setLocalDescription(offer))
//       .then(() => socket.emit("offer", peerConnection.current.localDescription));

//   }, []);

//   return (
//     <div>
//       <h2>Sender (Streaming Video)</h2>
//       <video ref={videoRef} autoPlay playsInline />
//     </div>
//   );
// }

// export default CaptureStream;

import React from 'react'

const CaptureStream = () => {
  return (
    <div>CaptureStream</div>
  )
}

export default CaptureStream
