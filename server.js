const config = require("./config");
const express = require("express");

const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
  res.send("someone tried to get the users");
});

app.use("/api/users", require("./routes/api/users"));

const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const { PORT } = config;

// Chat room implementation has a default room
// that a client will automatically join.
// Each client can only be in one room at a time-
// when a new room is joined, the old one is automatically
// left. The "rooms" object below will have properties
// that are the name of each room, each containing an array
// of the client ids in that room.

const defaultRoom = "default";
const rooms = {};

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("message", ({ name, message, room }) => {
    if (room === defaultRoom) {
      console.log("the room was empty");
      io.to(defaultRoom).emit("message", { name, message });
    } else {
      console.log(`it was sent to ${room}`);
      io.to(room).emit("message", { name, message });
    }
  });

  socket.on("join-room", (room) => {
    // Leave previous room when joining new room
    for (const r in rooms) {
      if (rooms[r].includes(socket.id)) {
        rooms[r].splice(rooms[r].indexOf(socket.id), 1);
        socket.leave(r);
        console.log(`socket ${socket.id} has left room ${r}`);
        break;
      }
    }

    // See if room already exists. If so, add new id.
    // If not, create it.
    if (rooms.hasOwnProperty(room)) {
      rooms[room].push(socket.id);
    } else {
      rooms[room] = [socket.id];
    }

    socket.join(room);
    console.log(`socket ${socket.id} has joined room ${room}`);
    console.log(rooms);
  });

  socket.on("disconnect", () => {
    // Leave all rooms before disconnect
    for (const r in rooms) {
      if (rooms[r].includes(socket.id)) {
        rooms[r].splice(rooms[r].indexOf(socket.id), 1);
        socket.leave(r);
        console.log(`socket ${socket.id} has left room ${r}`);
      }
    }
    console.log("Client disconnected");
  });
});

http.listen(PORT, function () {
  console.log(`listening on Port ${PORT}`);
});
