let calculateBtn = document.getElementById('calculateBtn');

let calculate = function(){
    let totalBill   = document.getElementById('totalBill');
    let servicePerc = document.getElementById('servicePerc');
    let numPeople   = document.getElementById('numPeople');
    let result      = document.getElementById('result');
    let error = 0;
        if (totalBill.value == "") {
    	totalBill.style.borderColor = "#fc8370";
    	error = 1;
    }else {
    	totalBill.style.borderColor = "#80a7b8";
    	error = 0;
    }
    if (servicePerc.value == 0) {
    	servicePerc.style.borderColor = "#fc8370";
    	error = 1;
    }else {
    	servicePerc.style.borderColor = "#80a7b8";
    	error = 0;
    }
    if (!error) {

    	let tip = 0;
    	let tipInit = totalBill.value * servicePerc.value;
    	if (numPeople.value != 1 && numPeople.value != "") {
            
            let tipEach = tipInit / numPeople.value;

            let tipEachRounded = Math.round(tipEach * 100) / 100;

	        tipEachRounded = tipEachRounded.toFixed(2);

	        tip = tipEachRounded == 0 ? tipEach + ' each' : tipEachRounded + ' each';
    	}else {
    		let tipRounded = Math.round(tipInit * 100) / 100;

	        tipRounded = tipRounded.toFixed(2);
	        tip = tipRounded == 0 ? tipInit : tipRounded;
    	}
        
        result.innerText = tip;
    }else {
    	return;
    }
}
calculateBtn.addEventListener('click', calculate);
