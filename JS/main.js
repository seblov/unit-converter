//Collapse

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// !Weight units

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

// !Distance units


// Meter Conversion

document.getElementById('metersInput').addEventListener('input', function (e) {
    let meter = e.target.value;
    document.getElementById('ozOutput').innerHTML = meter * 16;
    document.getElementById('stOutput').innerHTML = meter * 0.1574;
    document.getElementById('gramsOutput').innerHTML = meter * 1000;
    document.getElementById('kgOutput').innerHTML = meter * 1;
    document.getElementById('lbsOutput').innerHTML = meter * 2.2046;
});

// Feet Conversion

document.getElementById('feetInput').addEventListener('input', function (e) {
    let feet = e.target.value;
    document.getElementById('ozOutput').innerHTML = feet * 16;
    document.getElementById('stOutput').innerHTML = feet * 0.1574;
    document.getElementById('gramsOutput').innerHTML = feet * 1000;
    document.getElementById('kgOutput').innerHTML = feet * 1;
    document.getElementById('lbsOutput').innerHTML = feet * 2.2046;
}); 