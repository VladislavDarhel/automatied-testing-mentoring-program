const assert = require('chai').assert

const Plane = require('../Planes/Plane')
const MilitaryPlane = require('../Planes/MilitaryPlane')
const PassengerPlane = require('../Planes/PassengerPlane')
const Airport = require('../Airport')
const MilitaryType = require('../models/MilitaryType')
const ExperimentalPlane = require('../Planes/ExperimentalPlane')
const ExperimentalType = require('../models/ExperimentalType')
const ClassificationLevel = require('../models/ClassificationLevel')

describe('Airport Tests', () => {
  let planes = [
    new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
    new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
    new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
    new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
    new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
    new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
    new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
    new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
    new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, MilitaryType.BOMBER),
    new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, MilitaryType.BOMBER),
    new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, MilitaryType.BOMBER),
    new MilitaryPlane('F-15', 1500, 12000, 10000, MilitaryType.FIGHTER),
    new MilitaryPlane('F-22', 1550, 13000, 11000, MilitaryType.FIGHTER),
    new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MilitaryType.TRANSPORT),
    new ExperimentalPlane('Bell X-14', 277, 482, 500, ExperimentalType.HIGH_ALTITUDE, ClassificationLevel.SECRET),
    new ExperimentalPlane('Ryan X-13 Vertijet', 560, 307, 500, ExperimentalType.VTOL, ClassificationLevel.TOP_SECRET)
  ]
  let planeWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242)

  it('Airport has at least one military plane with transport type', () => {
    const airport = new Airport(planes)
    const transportMilitaryPlanes = airport.getTransportMilitaryPlanes()
    let hasTransportPlanes = false
    for (const militaryPlane of transportMilitaryPlanes) {
      if (militaryPlane.getMilitaryType() === MilitaryType.TRANSPORT) {
        hasTransportPlanes = true
        break
      }
    }
    assert.equal(hasTransportPlanes, true)
  })

  it('Get Passenger plane with max capacity', () => {
    const airport = new Airport(planes)
    const expectedPlaneWithMaxPassengersCapacity = airport.getPassengerPlaneWithMaxPassengersCapacity()
    assert.isFalse(expectedPlaneWithMaxPassengersCapacity === planeWithMaxPassengerCapacity)
  })

  it('Check sorting planes by max load capacity', () => {
    const airport = new Airport(planes)
    airport.sortByMaxLoadCapacity()
    const planesSortedByMaxLoadCapacity = airport.getPlanes()
    let nextPlaneMaxLoadCapacityIsHigherThanCurrent = true
    for (let i = 0; i < planesSortedByMaxLoadCapacity.length - 1; i++) {
      let currentPlane = planesSortedByMaxLoadCapacity[i]
      let nextPlane = planesSortedByMaxLoadCapacity[i + 1]
      if (currentPlane.getMaxLoadCapacity() > nextPlane.getMaxLoadCapacity()) {
        nextPlaneMaxLoadCapacityIsHigherThanCurrent = false
        break
      }
    }
    assert.isTrue(nextPlaneMaxLoadCapacityIsHigherThanCurrent)
  })

  it('Airport has at least one bomber in military planes', () => {
    const airport = new Airport(planes)
    const bomberMilitaryPlanes = airport.getBomberMilitaryPlanes()
    let hasBomberPlain = false
    for (const militaryPlane of bomberMilitaryPlanes) {
      if (militaryPlane.getMilitaryType() === MilitaryType.BOMBER) {
        hasBomberPlain = true
      } else {
        assert.fail('Test failed. Airport has no Bomber military planes')
      }
    }
  })

  it('Airport has no experimental planes with level unclassified level', () => {
    const airport = new Airport(planes)
    const bomberMilitaryPlanes = airport.getExperimentalPlanes()
    let hasUnclassifiedPlanes = false
    for (const experimentalPlane of bomberMilitaryPlanes) {
      if (experimentalPlane.classificationLevel === ClassificationLevel.UNCLASSIFIED) {
        hasUnclassifiedPlanes = true
      }
      assert.isFalse(hasUnclassifiedPlanes)
    }
  })
})
