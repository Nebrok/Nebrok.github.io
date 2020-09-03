const Counter = document.querySelector('#Counter');

function renderData(doc) {
  let li = document.createElement('li');
  let counter = document.createElement('span');

  li.setAttribute('data-id', doc.id);
  counter.textContent = doc.data().current_Visits;

  li.appendChild(counter);

  Counter.appendChild(li); 

}

let test = 1;

db.collection("Site_Info").doc("General Info").get().then(function(doc) {
  if (doc.exists) {
    let CV = doc.data().current_Visits;
    CV++;
    test = CV;
    db.collection("Site_Info").doc("General Info").set({
      current_Visits: test
    })
  }
})

// Getting Data
db.collection('Site_Info').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderData(doc)
  })
})

document.getElementById("navbtnhome").onclick = function() {
  window.location.href = './index.html'
}

document.getElementById("navbtnport").onclick = function() {
  window.location.href = './portfolio.html'
}

document.getElementById("navbtnprog").onclick = function() {
  window.location.href = './programs.html'
}

document.getElementById("navbtnaboutMe").onclick = function() {
  window.location.href = './aboutMe.html'
}
