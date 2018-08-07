
let driverId = 0;
let passengerId = 0;
let tripId = 0;
let store = {drivers: [], passengers: [], trips: []};


class Driver {
	constructor(name){
		this.name = name;
		this.id = ++driverId;
		store.drivers.push(this);
	}

	trips(){
		return store.trips.filter(function(trip){
			return trip.driverId === this.id;
		}.bind(this));
	}

	passengers(){
		
		return store.passengers.filter(function(passenger){
			return this.trips().filter(function(pass){
				if(pass.passengerId === passenger.id){
					return passenger;
				};
			})
		}.bind(this));

	}


}

class Passenger {
	constructor(name){
		this.name = name;
		this.id = ++passengerId;
		store.passengers.push(this);
	}

	trips(){
		return store.trips.filter(function(trip){
			return trip.passengerId === this.id;
		}.bind(this));
	}

	drivers(){
		return store.drivers.filter(function(driver){
			return this.trips().filter(function(dr){
				if(dr.driverId === driver.id){
					return driver;
				};
			})
		}.bind(this));
	}


}

class Trip {
	constructor(driver, passenger){
		this.driverId = driver.id;
		this.passengerId = passenger.id;
		this.id = ++tripId;
		store.trips.push(this);

	}

	passenger(){
		return store.passengers.find(function(passenger){
			return passenger.id === this.passengerId;
		}.bind(this));
	}

	driver(){
		return store.drivers.find(function(driver){
			return driver.id === this.driverId;
		}.bind(this));
	}
		
}



// user(){
//     return store.users.find(function(user){
//       return user.id === this.userId
//     })
//   }