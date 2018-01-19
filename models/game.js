// models/game.js
const mongoose = require('../config/database')
// const User = require('./user')
const { Schema } = mongoose

// const gridSize = 9

// const squareSchema = new Schema({
//   // symbol: { type: String, required: true },
//   playerId: { type: Schema.Types.ObjectId, ref: 'users' },
//   symbol: { type: String, default: "" }
//   // visible: { type: Boolean, default: false },
//   // won: { type: Boolean, default: false },
// });

const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'users' }
  // pairs: [String],
});

const gameSchema = new Schema({
  // cards: [cardSchema],
  players: [playerSchema],
  grid: { type: [Schema.Types.ObjectId], ref: 'users', default: new Array(9)},
  turn: { type: Number, default: 0 }, // player index
  // started: { type: Boolean, default: false },
  winnerId: { type: Schema.Types.ObjectId, ref: 'users' },
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  // lastCard: { type: Number },
  // draw: { type: Boolean, default: false },
});

module.exports = mongoose.model('games', gameSchema)
