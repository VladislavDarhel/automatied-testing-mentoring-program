const PassengerPlane = require('./Planes/PassengerPlane')
const MilitaryPlane = require('./Planes/MilitaryPlane')
const MilitaryType = require('./models/MilitaryType')
const ExperimentalPlane = require('./Planes/ExperimentalPlane')


class Airport {
    constructor (planes) {
        this.planes = planes
      }
    
  getPassengerPlanes () {  
    const passengerPlanes = []
    this.planes.forEach(plane => {
      if (plane instanceof PassengerPlane) {
        passengerPlanes.push(plane)
      }
    })
    return passengerPlanes
  }

  getMilitaryPlanes () {
    const militaryPlanes = []
    this.planes.forEach(plane => {
      if (plane instanceof MilitaryPlane) {
        militaryPlanes.push(plane)
      }
    })
    return militaryPlanes
  }

  getExperimentalPlanes () {
    const experimentalPlanes = []
    this.planes.forEach(plane => {
      if (plane instanceof ExperimentalPlane) {
        experimentalPlanes.push(plane)
      }
    })
    return experimentalPlanes
  }

  getPassengerPlaneWithMaxPassengersCapacity () {
    const passengerPlanes = this.getPassengerPlanes()
    let planeWithMaxCapacity = passengerPlanes[0]
    for (let i = 0; i < passengerPlanes.length; i++) {
      if (passengerPlanes[i].getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()) {
        planeWithMaxCapacity = passengerPlanes[i]
      }
    }
    return planeWithMaxCapacity
  }

  getTransportMilitaryPlanes () {
    const transportMilitaryPlanes = []
    const militaryPlanes = this.getMilitaryPlanes()
    for (let i = 0; i < militaryPlanes.length; i++) {
      if (militaryPlanes[i].getMilitaryType() === MilitaryType.TRANSPORT) {
        transportMilitaryPlanes.push(militaryPlanes[i])
      }
    }
    return transportMilitaryPlanes
  }

  getBomberMilitaryPlanes () {
    const bomberMilitaryPlanes = []
    const militaryPlanes = this.getMilitaryPlanes()
    for (let i = 0; i < militaryPlanes.length; i++) {
      if (militaryPlanes[i].getMilitaryType() === MilitaryType.BOMBER) {
        bomberMilitaryPlanes.push(militaryPlanes[i])
      }
    }
    return bomberMilitaryPlanes
  }

  sortByMaxFlightDistance () {
    return this.planes.sort((a, b) => (a.getMaxFlightDistance() - b.getMaxFlightDistance()))
  }

  sortByMaxSpeed () {
    return this.planes.sort((a, b) => (a.getMaxSpeed() - b.getMaxSpeed()))
  }

  sortByMaxLoadCapacity () {
    return this.planes.sort((a, b) => (a.getMaxLoadCapacity() - b.getMaxLoadCapacity()))
  }

  getPlanes () {
    return this.planes
  }

  static convertToJson (planes) {
    return JSON.stringify(planes)
  }
}

module.exports = Airport
