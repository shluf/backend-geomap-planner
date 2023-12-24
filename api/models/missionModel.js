const mongoose = require("mongoose")
const Schema = mongoose.Schema

const missionSchema = new Schema({  
  mission: {
    type: String
  },
  geojson:{
  type: {
    type: String,
  },
  features: [
      {
          type: {
            type: String,
          },
          geometry: {
              type: {
                type: String
              },
              coordinates: {
                type: Array
              }
          },
          properties: {
              type: mongoose.Schema.Types.Mixed,
          }
      }
  ]
  },
  dateCreated: {
            type: Date,
            default: Date.now,
        }
})

module.exports = mongoose.model('Mission', missionSchema)