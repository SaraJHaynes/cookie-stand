// name: 'First and Pike',
    // minCustomers: 23,
    // maxCustomers: 65,
    // avgCookieSale: 6.3, 
    // checkpikeStore: function(){
    
// }
// function getRandomCostumer(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }

//   function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

// var PikeStore = []



// var pikeStore = [Minimum, Maximum, Sales]; {
// var customersMin =[23];
// var customersMax=[65];
// var cookieSales=[6.3]; 
// return[minCustomers[0], maxCustomers[0], avgCookieSale[0]];
//     }


//  for (var i = 0; i < totalStoreCount.length; i++) {
// //   console.log(store[i].location)
// totalStoreCount[i].render()



//Javascript objects

//Object literal notation (property:value,)

var storelist = document.getElementById('storelist');
// var firstListItem = storelist.firstChild.textContent;



var pikeStore = {
  name: 'Pike Store',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSales: ['6.3'],
  introduction: function(){
    console.log('The name of this store is ' + this.name);
  },
  render: function() {
    //create an element
    var liEl = document.createElement('li');
    console.log('liEl is', liEl)
    //give the element content
    liEl.textContent = this.name;
    console.log('liEL with content', liEl);
    //append the element to the dom
    storelist.appendChild(liEl);
  }

  };

  var seaTacStore = {
    name: 'SeaTac Store',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookieSales: ['1.2'],
    introduction: function(){
      console.log('The name of this store is ' + this.name);
    },
    render: function() {
      //create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl)
      //give the element content
      liEl.textContent = this.name;
      console.log('liEL with content', liEl);
      //append the element to the dom
      storelist.appendChild(liEl);
    }
  };
  var seattleCenterStore = {
    name: 'Seattle Center Store',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookieSales: ['3.7'],
    introduction: function(){
      console.log('The name of this store is ' + this.name);
    },
    render: function() {
      //create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl)
      //give the element content
      liEl.textContent = this.name;
      console.log('liEL with content', liEl);
      //append the element to the dom
      storelist.appendChild(liEl);
    }
  };
  var capitalHillStore = {
    name: 'Capital Hill Store',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookieSales: ['2.3'],
    introduction: function(){
      console.log('The name of this store is ' + this.name);
    },
    render: function() {
      //create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl)
      //give the element content
      liEl.textContent = this.name;
      console.log('liEL with content', liEl);
      //append the element to the dom
      storelist.appendChild(liEl);
    }
  };
  var alkiStore = {
    name: 'Alki Store',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookieSales: ['4.6'],
    introduction: function(){
      console.log('The name of this store is ' + this.name);
    },
    render: function() {
      //create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl)
      //give the element content
      liEl.textContent = this.name;
      console.log('liEL with content', liEl);
      //append the element to the dom
      storelist.appendChild(liEl);
    }
  };
var arrayOfStores = [pikeStore, seaTacStore, seattleCenterStore, capitalHillStore, alkiStore];
for (var i = 0; i < arrayOfStores.length; i++)
{
    arrayOfStores[i].introduction();
    arrayOfStores[i].render();
}

// var =[pikeStore, alki];

//     for (var i = 0; i < stores.length; i++) {

//     stores[i].render()
// }