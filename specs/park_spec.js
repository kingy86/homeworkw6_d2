const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  beforeEach(function () {
    park = new Park("Dinosaur Land", 30, [])
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 60);
    dinosaur2 = new Dinosaur('triceratops', 'herbivore', 50);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Dinosaur Land");
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 30);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dinosaur1);
    const actual = park.dinoCollection.length;
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDino();
    const actual = park.dinoCollection.length;
    assert.deepStrictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    const actual = park.popularDino;
    assert.strictEqual(actual, 6);
  });

  xit('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findDinosaurByName;
    assert.strictEqual(actual, "t-rex")
  });

  xit('should be able to remove all dinosaurs of a particular species');

});
