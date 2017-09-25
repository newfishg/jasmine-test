describe('Vehicle', function() {
  beforeEach(function() {
    // assign this vehicle to the current context so it is accessible within the specs
    this.car = new Vehicle({
      make: 'Honda',
      model: 'Civic'
    });
  });

  it('sets teh make and model properties when an object is passed in', function() {
    expect(this.car.make).toBe('Honda');
    expect(this.car.model).toBe('Civic');
  });

  it('returns a concatenated string with make and model', function() {
    expect(this.car.toString()).toBe('Honda Civic');
  });

  it('returns a message when the horn is honked', function() {
    expect(this.car.honkHorn()).toMatch(/beep/);
  })
});