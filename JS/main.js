// LBs conversion

document.getElementById('lbsInput').addEventListener('input', function(e){
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
});
document.getElementById('lbsInput').addEventListener('input', function(e){
    let lbs = e.target.value;
    document.getElementById('kgOutput').innerHTML = lbs*2.2046;
});
document.getElementById('lbsInput').addEventListener('input', function(e){
    let lbs = e.target.value;
    document.getElementById('ozOutput').innerHTML = lbs*16;
}); 
document.getElementById('lbsInput').addEventListener('input', function(e){
    let lbs = e.target.value;
    document.getElementById('stOutput').innerHTML = lbs*0.071429;
}); 

// KGs Conversion

document.getElementById('kgsInput').addEventListener('input', function(e){
    let lbs = e.target.value;
    document.getElementById('ozOutput').innerHTML = lbs*16;
}); 