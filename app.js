const Counter = document.querySelector('#Counter');

function renderData(doc) {
  let li = document.createElement('li');
  let counter = document.createElement('span');

  li.setAttribute('data-id', doc.id);
  counter.textContent = doc.data().current_Visits;

  li.appendChild(counter);

  Counter.appendChild(li); 

}

db.collection('Site_Info').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderData(doc)
  })
})