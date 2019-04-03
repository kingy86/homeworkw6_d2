const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinoCollection = [];
};

Park.prototype.addDino = function(dinosaur){
  this.dinoCollection.push(dinosaur);
};

Park.prototype.removeDino = function(){
  this.dinoCollection.pop()
};

Park.prototype.popularDino = function (dinosaur1, dinosaur2) {
 if (dinosaur.guestsAttractedPerDay > dinosaur2.guestsAttractedPerDay) {
   return true;
 }else {
   return false;
 };
};

Park.prototype.findDinosaurByName = function () {

};

module.exports = Park;
