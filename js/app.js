'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allStores = [];
var hourlyTotals = [];
var grandTotal = 0;

function calcRandomCustomers(min, max) {
  // following line from MDN docs on Math.random
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var storeTable = document.getElementById('store-table');
var addStore = document.getElementById('addstore');

// var tableTotal = document.getElementById('totalTable');

// CONSTRUCTOR //
function Store (name, min, max, avg) {
  this.name = name;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.avgCookieSales = avg;
  this.hourlySales = [];
  this.totalCookiesForTheDay = 0;

  this.hourlySalesCalc = function() {
    for (var i = 0; i < hours.length; i++){
      this.hourlySales.push(Math.ceil(calcRandomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookieSales));
    }
  };
  this.totalCookiesForTheDayCalc = function(){
    for(var i = 0; i < hours.length; i++){
      this.totalCookiesForTheDay += this.hourlySales[i];
    }
  };
  this.render = function () {
    // make a tr
    var trEl = document.createElement('tr'); //this is the equivalent of typing <tr>

    // create, content, append for "Name"
    var tdEl = document.createElement('td'); //equivalent of typing <td>
    tdEl.textContent = this.name; //equivalent of: <td> "Text Content" </td>
    trEl.appendChild(tdEl);

    for (var i = 0; i < hours.length; i++)
    {
      tdEl = document.createElement('td'); //equivalent of typing <td>
      tdEl.textContent = this.hourlySales[i]; //equivalent of: <td> "Text Content" </td>
      trEl.appendChild(tdEl);
    }

    // //create the next element
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesForTheDay;
    trEl.appendChild(tdEl);

    // append the tr to the table
    storeTable.appendChild(trEl);
  };

  this.allCall = function() {
    this.hourlySalesCalc();
    this.totalCookiesForTheDayCalc();
    this.render();

  };
  allStores.push(this);
}

function renderAll(){
  for (var i = 0; i < allStores.length; i++){
    allStores[i].allCall();
  }
}

//////////HEADER////////////////////
function tableHeader(){
  var trEl = document.createElement('tr'); //this is the equivalent of typing <tr>

  // create, content, append for "Name"
  var thEl = document.createElement('th'); //equivalent of typing <td>
  thEl.textContent = 'Stores'; //equivalent of: <td> "Text Content" </td>
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++){
    thEl = document.createElement('th'); //equivalent of typing <td>
    thEl.textContent = hours[i]; //equivalent of: <td> "Text Content" </td>
    trEl.appendChild(thEl);
  }

  // //create the next element
  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  // append the tr to the table
  storeTable.appendChild(trEl);

}
/////////////////FOOTER///////////////////////
function tableFooter(){
  var tFoot = document.createElement('tfoot');
  var trEl = document.createElement('tr'); //this is the equivalent of typing <tr>

  // create, content, append for "Name"
  var tdEl = document.createElement('td'); //equivalent of typing <td>
  tdEl.textContent = 'Totals'; //equivalent of: <td> "Text Content" </td>
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td'); //equivalent of typing <td>
    tdEl.textContent = hourlyTotals[i]; //equivalent of: <td> "Text Content" </td>
    trEl.appendChild(tdEl);
  }

  // //create the next element
  tdEl = document.createElement('td');
  tdEl.textContent = grandTotal;
  trEl.appendChild(tdEl);
  tFoot.appendChild(trEl);
  storeTable.appendChild(tFoot);
}
////////////GRAND TOTAL/////////////////////
function hourlyTotalCalc (){
  for (var i = 0; i < hours.length; i++) {
    var hourTotal = 0;
    for (var j = 0; j < allStores.length; j++) {
      hourTotal += allStores[j].hourlySales[i];
    }
    grandTotal += hourTotal;
    hourlyTotals[i] = hourTotal;
  }
}

new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capital Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

tableHeader();
renderAll();
hourlyTotalCalc();
tableFooter();

///////////form button////////////

addStore.addEventListener('submit', handleAddStore);
function handleAddStore(event) {
  event.preventDefault();
  var newName = event.target.location.value;
  var newMinCustomers = event.target.minCustomers.value;
  var newMaxCustomers = event.target.maxCustomers.value;
  var newavgCookieSales = event.target.avgCookieSales.value;

  var newStore = new Store(newName, newMinCustomers, newMaxCustomers, newavgCookieSales);

  if (!newName || !newMinCustomers || !newMaxCustomers || !newavgCookieSales) {
    return alert('Fields cannot be empty!');
  }

  event.preventDefault();
  newStore.allCall();
}

