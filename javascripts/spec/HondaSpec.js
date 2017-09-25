describe('Honda', function() {
  it('inherits the Vehicle prototype', function() {
    var car = new Honda('Accord');
    expect(car.toString()).toBe('Honda Accord');
  });

  it('set the model property when a valid model is passed in', function() {
    var car = new Honda('Civic');
    expect(car.make).toBe('Honda');
    expect(car.model).toBe('Civic');
  });

  it('throws an error if an invalid model is passed in', function() {
    expect(function() { new Honda('Abc') }).toThrowError('Model Abc does not exist');
  });

  it('returns a list of valid models', function() {
    var models = Honda.getModels();
    expect(models.length).toBeDefined();
    expect(models).toContain('HR-V');
  });

  it('calls getPrice when a new car is created', function() {
    spyOn(Honda, 'getPrice');
    var car = new Honda('Civic');
    expect(Honda.getPrice).toHaveBeenCalledWith('Civic');
  });

  it('returns a price for the passed in model', function() {
    var car = new Honda('Insight');
    var civic = new Honda('Civic');
    var crz = new Honda('CR-Z');

    expect(car.price).toBeGreaterThan(0);
    expect(civic.price).toBeLessThan(15000);
    expect(civic.price).toBeGreaterThan(10000);

  });

  // it('accept a parameter for the model', function() {
  //   var car = new Honda('Accord');
  //   expect(car.model).toBe('Accord');
  //   expect(car.make).toBe('Honda');
  // });

  // it('accept a model name to get price', function() {
  //   expect(Honda.getPrice('Accord')).toBe(16500);
  // });


});