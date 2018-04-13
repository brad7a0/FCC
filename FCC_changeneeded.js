var denominations = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.10,
  "QUARTER": 0.25,
  "ONE": 1.00,
  "FIVE": 5.00,
  "TEN": 10.00,
  "TWENTY": 20.00,
  "ONE HUNDRED": 100.00
};

function checkCashRegister(price, cash, cid) {
  var centsNeeded = parseInt((cash - price) * 100);
  var changeArray = [];
  var centsLeftInDrawer = 0;

  // reverse iterate through cid (cash in drawer)
  //   check what will fit from each type of denomination and how much is available
  //   reduce remaining needed amount and cid value

  for (var i = cid.length - 1; i >= 0; i--) {
    try {
      var denomType = cid[i][0]; /* ? */
      var centsForSingle = denominations[denomType] * 100; /* ? */
      var centsAvailable = cid[i][1] * 100; /* ? */
      var centsUsed = 0;

      while(centsNeeded >= centsForSingle && centsAvailable - centsUsed > 0) {
        centsUsed += centsForSingle;
        centsNeeded -= centsForSingle;
      }

      if(centsUsed > 0) {
        changeArray.push([denomType, centsUsed / 100]);
      }

      centsLeftInDrawer += centsAvailable - centsUsed;
    }
    catch(e) {
      console.error("Error computing change: " + e);
      console.log('i=' + i + ', cid=' + cid);
    }
  }

  if(centsNeeded > 0) {
    return "Insufficient Funds";
  }
  else {
    return centsLeftInDrawer > 0 ? changeArray : "Closed";
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

var change = checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

console.log('change=' + JSON.stringify(change));