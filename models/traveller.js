const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return result = this.journeys.map ( (journey) => {
    return journey.startLocation;
  })

};

Traveller.prototype.getJourneyEndLocations = function () {
  return result = this.journeys.map ( (journey) =>{
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return result = this.journeys.filter ( (journey) =>{
    return journey.transport === transport;
  });
  

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return result = this.journeys.filter ( (journey) => {
    return journey.distance > minDistance;
  })

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return result = this.journeys.reduce ((total, journey) => {
   return total += journey.distance;
  }, 0);

};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   //const uniqueTransport = new Set(this.journeys)
//   return result = new Array( new Set( this.journeys.map ((journey) =>{
//     return journey.transport;
//   })));
//}
// };

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   this.journeys.forEach((journey) => {
//     let result = [];
//     result.push(journey.transport);
//     for (let x of result) if (journey.transport === x.transport) {result.pop(x)}
//     return result;
//   });

 

// };

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   return result = this.journeys.map ((journey) =>{
//     for (let x of this.journeys) if (journey.transport === x.transport) {result.pop(x)}
//     return result;
//   });

// };



module.exports = Traveller;
