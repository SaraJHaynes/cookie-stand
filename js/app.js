'use strict';

//do this for all five stores
var firstPike = document.getElementById('first-pike');

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