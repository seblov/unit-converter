// LBs conversion

document.getElementById('lbsInput').addEventListener('input', function (e) {
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs / 0.0022046;
    document.getElementById('kgOutput').innerHTML = lbs / 2.2046;
    document.getElementById('ozOutput').innerHTML = lbs * 16;
    document.getElementById('stOutput').innerHTML = lbs * 0.071429;
    document.getElementById('lbsOutput').innerHTML = lbs * 1;
});

// KGs Conversion

document.getElementById('kgsInput').addEventListener('input', function (e) {
    let kgs = e.target.value;
    document.getElementById('ozOutput').innerHTML = kgs * 16;
    document.getElementById('stOutput').innerHTML = kgs * 0.1574;
    document.getElementById('gramsOutput').innerHTML = kgs * 1000;
    document.getElementById('kgOutput').innerHTML = kgs * 1;
    document.getElementById('lbsOutput').innerHTML = kgs * 2.2046;
}); 