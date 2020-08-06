const Plane = require('./Plane')

class ExperimentalPlane extends Plane {
  constructor (model, maxSpeed, maxFlightDistance, maxLoadCapacity, experimentalType, classificationLevel) {
    super(model, maxSpeed, maxFlightDistance, maxLoadCapacity)
    this.experimentalType = experimentalType
    this.classificationLevel = classificationLevel
  }
}

module.exports = ExperimentalPlane
