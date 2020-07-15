//console.log('Hi')

var btnDepositChecking = document.querySelector('#chk-deposit-btn');
var btnWithdrawChecking = document.querySelector('#chk-withdraw-btn');
var btnDepositSavings = document.querySelector('#sv-deposit-btn');
var btnWithdrawSavings = document.querySelector('#sv-withdraw-btn');

var displayChecking = document.querySelector('#chk-display');
var displaySavings = document.querySelector('#sv-display');

var chkAcc = 0;
var svAcc = 0;
var sum = 0;

var chkInput = 0;
var svInput = 0
var req;

var getInputs = function () {
    chkInput = Number(document.querySelector('#chk-input').value);
    svInput = Number(document.querySelector('#sv-input').value);
}


var dangerCheckChk = function () {
    var chkClasses = document.querySelector(".checking").classList;

    if (chkAcc <= 0) {
        chkClasses.add('danger');    
    } else {
        chkClasses.remove('danger'); 
    }
}

var dangerCheckSv = function () {
    var svClasses = document.querySelector(".savings").classList;

    if (svAcc <= 0) {
        svClasses.add('danger');
    } else {
        svClasses.remove('danger'); 
    }
}

var updateAcc = function () {
    if (chkAcc >= 0) {
        displayChecking.textContent = '$ ' + ((Math.round(chkAcc * 100) / 100).toFixed(2));
    }
    
    if (svAcc >= 0) {
        displaySavings.textContent = '$ ' + ((Math.round(svAcc * 100) / 100).toFixed(2));
    }
}

var request = function (acc) {
    if (acc === 'chk') {
        if (chkInput <= chkAcc) {
            return 'chk';
        } else if (chkInput <= svAcc){
            return 'chksv';
        } else {
            return 'nochksv';
        }
    } else if (acc === 'sv') {
        if (svInput <= svAcc) {
            return 'sv';
        } else {
            return 'nosv';
        }
    }  
}

var processReq = function (req) {
    if (req === 'chk') {  
        chkAcc -= chkInput;
        dangerCheckChk();
    } else if (req === 'chksv') {
        svAcc -= chkInput;
        dangerCheckSv();
    } else if (req === 'nochksv') {
        chkAcc = 0;
        svAcc = 0;
        dangerCheckChk();
        dangerCheckSv();
    } else if (req === 'sv') {
        svAcc -= svInput;
        dangerCheckSv();
    } else if (req === 'nosv') {
        svAcc = 0;
        dangerCheckSv();
    } 
}


btnDepositChecking.addEventListener('click', function () {
    //alert('Hi1');
    getInputs();
    chkAcc += chkInput;
    dangerCheckChk();
    updateAcc();
})

btnDepositSavings.addEventListener('click', function () {
    //alert('Hi3');
    getInputs();
    svAcc += svInput;
    dangerCheckSv();
    updateAcc();
})

btnWithdrawChecking.addEventListener('click', function () {
    //alert('Hi2');
    getInputs();
    processReq(request('chk')); 
    updateAcc();
})

btnWithdrawSavings.addEventListener('click', function () {
    //alert('Hi4');
    getInputs();
    processReq(request('sv')); 
    updateAcc();
})






