// const { instrument } = require('@socket.io/admin-ui')
// const { v4: uuidv4 } = require('uuid')
// uuidv4()
// const io = require('socket.io')(3000, {
//     cors: {
//         origin: ["http://localhost:5173", "https://admin.socket.io/" ],
//         methods: ["GET", "POST"],
//         allowedHeaders: ["Access-Control-Allow-Origin"],
// }})
// console.log("set")
// var contestants=[]

// io.on('connection', socket => {

//     socket.on('joinNewRoom', () => {
//         const r=uuidv4()
//         socket.join(r)
//         // io.join(r)
//         io.emit("receive",socket.id)
//         socket.broadcast.emit("createOpponent",contestants)
//     })
//     socket.on("startGame",(id)=>{
//         contestants.push(id)
//         console.warn("receive",contestants) 
//         io.emit("createOpponent",contestants)
//     })
//     socket.on('sendMessage', (message,sender) => {
//         socket.broadcast.emit("receive",message+"  00000000  "+sender)
//     })
//     socket.on('characterPosition',(sender,qno,position)=>{
//         socket.broadcast.emit("receive","sender: "+sender+"; question: "+qno+"; position: "+position)
//         io.emit("editOpponent",sender,qno,position)
//         socket.broadcast.emit("announcement",sender,qno,position)
//     })

// })
// instrument(io, { auth: false })
// // (asd(m))
//         // socket.broadcast.emit("receive",'socket')
//         // io.emit("receive",'socket11')
//         // socket.emit("receive",'socket1111')


const { instrument } = require('@socket.io/admin-ui')
const { v4: uuidv4 } = require('uuid')
uuidv4()

const io = require("socket.io")(3000, {
    cors: {
      origin: ["http://localhost:5173", "https://admin.socket.io/"],
      methods: ["GET", "POST"]
    },


  });
  
console.log("set")
contestants=[]
io.on('connection', socket => {

    socket.on('send-message', (message) => {
        const r=uuidv4()
        socket.join(r)
        socket.broadcast.emit("receive",'socket')
        io.emit("receive",'socket11')
        console.log(r)
    })
    socket.on('joinNewRoom', () => {
                const r=uuidv4()
                socket.join(r)
                // io.join(r)
                // io.emit("receive",socket.id)
                socket.broadcast.emit("createOpponent",contestants)
            })
            socket.on("startGame",(id)=>{
                contestants.push(id)
                console.warn("receive",contestants) 
                io.emit("createOpponent",contestants)
            })
            socket.on('sendMessage', (message,sender) => {
                socket.broadcast.emit("receive",message+"  00000000  "+sender)
            })
            socket.on('characterPosition',(sender,qno,position)=>{
                socket.broadcast.emit("receive","sender: "+sender+"; question: "+qno+"; position: "+position)
                io.emit("editOpponent",sender,qno,position)
                socket.broadcast.emit("announcement",sender,qno,position)
            })
})
instrument(io, { auth: false })


