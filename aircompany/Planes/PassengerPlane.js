const Plane = require('./Plane')

class PassengerPlane extends Plane {

  constructor (model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
    super(model, maxSpeed, maxFlightDistance, maxLoadCapacity)
    this.passengersCapacity = passengersCapacity
  }
  
  getPassengersCapacity () {
    return this.passengersCapacity
  }
}

module.exports = PassengerPlane
