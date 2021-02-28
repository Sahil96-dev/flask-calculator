function calc() {
    var fnum = parseInt(document.querySelector('#firstnum').value);
    var snum = parseInt(document.querySelector('#secondnum').value);
    var opr = document.getElementById('operator').value;

    if (opr === "addition") {
        document.querySelector('#ans').innerHTML = fnum + snum;
    }
    else if (opr === "subtraction") {
        document.querySelector('#ans').innerHTML = fnum - snum;
    }
    else if (opr === "multiplication") {
        document.querySelector('#ans').innerHTML = fnum * snum;
    }
    else if (opr === "division") {
        document.querySelector('#ans').innerHTML = fnum % snum;
    }
    else {
        document.querySelector('#ans').innerHTML = 'Invalid option';
    }
}
