'use strict';

//do this for all five stores
var firstPike = document.getElementById('first-pike');
var seatac = document.getElementById('seatac');
var seattleCenter = document.getElementById('seattle-center');
var capitalHill = document.getElementById('capital-hill');
var alki = document.getElementById('alki');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function calcRandomCustomers(min, max) {
    // following line from MDN docs on Math.random
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var pikeStore = {
  name: 'Pike Store',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSales: 6.3,
  //customersEachHour: [],
  hourlySales: [],
  totalCookiesForTheDay: 0,
  hourlySalesCalc: function() {
    for (var i = 0; i < hours.length; i++){
    	this.hourlySales.push(Math.ceil(calcRandomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookieSales));
  	}
	},
	totalCookiesForTheDayCalc: function(){
		for(var i = 0; i < hours.length; i++){
			this.totalCookiesForTheDay += this.hourlySales[i];
		}
	},
	render: function() {
		for(var i = 0; i < hours.length; i++) {
		 //create an element
    var liEl = document.createElement('li');
    //console.log('liEl is', liEl)
    //give the element content
    liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies.';
    //console.log('liEL with content', liEl);
    //append the element to the dom
    firstPike.appendChild(liEl);
		}
		liEl = document.createElement('li');
		liEl.textContent = 'Total: ' + this.totalCookiesForTheDay;
    firstPike.appendChild(liEl);
	},
	allCall: function() {
		this.hourlySalesCalc();
		this.totalCookiesForTheDayCalc();
		this.render();
		
	}

};

pikeStore.allCall();

//////////////////////////////////////////// seatac //////////////////////////

var seatacStore = {
  name: 'SeaTac',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookieSales: 1.2,
  //customersEachHour: [],
  hourlySales: [],
  totalCookiesForTheDay: 0,
  hourlySalesCalc: function() {
    for (var i = 0; i < hours.length; i++){
    	this.hourlySales.push(Math.ceil(calcRandomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookieSales));
  	}
	},
	totalCookiesForTheDayCalc: function(){
		for(var i = 0; i < hours.length; i++){
			this.totalCookiesForTheDay += this.hourlySales[i];
		}
	},
	render: function() {
		for(var i = 0; i < hours.length; i++) {
		 //create an element
    var liEl = document.createElement('li');
    //console.log('liEl is', liEl)
    //give the element content
    liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies.';
    //console.log('liEL with content', liEl);
    //append the element to the dom
    seatac.appendChild(liEl);
		}
		liEl = document.createElement('li');
		liEl.textContent = 'Total: ' + this.totalCookiesForTheDay;
    seatac.appendChild(liEl);
	},
	allCall: function() {
		this.hourlySalesCalc();
		this.totalCookiesForTheDayCalc();
		this.render();
		
	}

};

seatacStore.allCall();

////////////////////////////////////////////////// Seattle Center ///////////////////////////////////

var seattleCenterStore = {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSales: 3.7,
  //customersEachHour: [],
  hourlySales: [],
  totalCookiesForTheDay: 0,
  hourlySalesCalc: function() {
    for (var i = 0; i < hours.length; i++){
    	this.hourlySales.push(Math.ceil(calcRandomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookieSales));
  	}
	},
	totalCookiesForTheDayCalc: function(){
		for(var i = 0; i < hours.length; i++){
			this.totalCookiesForTheDay += this.hourlySales[i];
		}
	},
	render: function() {
		for(var i = 0; i < hours.length; i++) {
		 //create an element
    var liEl = document.createElement('li');
    //console.log('liEl is', liEl)
    //give the element content
    liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies.';
    //console.log('liEL with content', liEl);
    //append the element to the dom
    seattleCenter.appendChild(liEl);
		}
		liEl = document.createElement('li');
		liEl.textContent = 'Total: ' + this.totalCookiesForTheDay;
    seattleCenter.appendChild(liEl);
	},
	allCall: function() {
		this.hourlySalesCalc();
		this.totalCookiesForTheDayCalc();
		this.render();
		
	}

};

seattleCenterStore.allCall();

////////////////////////////////////////////////// Capital Hill ///////////////////////////////////////



var capitalHillStore= {
  name: 'Capital Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSales: 2.3,
  //customersEachHour: [],
  hourlySales: [],
  totalCookiesForTheDay: 0,
  hourlySalesCalc: function() {
    for (var i = 0; i < hours.length; i++){
    	this.hourlySales.push(Math.ceil(calcRandomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookieSales));
  	}
	},
	totalCookiesForTheDayCalc: function(){
		for(var i = 0; i < hours.length; i++){
			this.totalCookiesForTheDay += this.hourlySales[i];
		}
	},
	render: function() {
		for(var i = 0; i < hours.length; i++) {
		 //create an element
    var liEl = document.createElement('li');
    //console.log('liEl is', liEl)
    //give the element content
    liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies.';
    //console.log('liEL with content', liEl);
    //append the element to the dom
    capitalHill.appendChild(liEl);
		}
		liEl = document.createElement('li');
		liEl.textContent = 'Total: ' + this.totalCookiesForTheDay;
    capitalHill.appendChild(liEl);
	},
	allCall: function() {
		this.hourlySalesCalc();
		this.totalCookiesForTheDayCalc();
		this.render();
		
	}

};

capitalHillStore.allCall();

////////////////////////////////////////////////////// Alki ///////////////////////////////////////////////

var alkiStore= {
  name: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookieSales: 4.6,
  //customersEachHour: [],
  hourlySales: [],
  totalCookiesForTheDay: 0,
  hourlySalesCalc: function() {
    for (var i = 0; i < hours.length; i++){
    	this.hourlySales.push(Math.ceil(calcRandomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookieSales));
  	}
	},
	totalCookiesForTheDayCalc: function(){
		for(var i = 0; i < hours.length; i++){
			this.totalCookiesForTheDay += this.hourlySales[i];
		}
	},
	render: function() {
		for(var i = 0; i < hours.length; i++) {
		 //create an element
    var liEl = document.createElement('li');
    //console.log('liEl is', liEl)
    //give the element content
    liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies.';
    //console.log('liEL with content', liEl);
    //append the element to the dom
    alki.appendChild(liEl);
		}
		liEl = document.createElement('li');
		liEl.textContent = 'Total: ' + this.totalCookiesForTheDay;
    alki.appendChild(liEl);
	},
	allCall: function() {
		this.hourlySalesCalc();
		this.totalCookiesForTheDayCalc();
		this.render();
		
	}

};

alkiStore.allCall();
