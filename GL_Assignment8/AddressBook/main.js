document.getElementById('filterInput').addEventListener('keyup', () => {
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    let ul = document.getElementById('names');

    let li = ul.querySelectorAll('li.collection-item');
    let h = document.querySelectorAll('li.collection-header');

    li.forEach(item => {
        let a = item.getElementsByTagName('a')[0];
        item.style.display = a.innerText.toUpperCase().startsWith(filterValue) ? 'block' : 'none';
    });
    
    h.forEach(item => {
        let b = item.getElementsByTagName('h5')[0];
        item.style.display = b.innerText.toUpperCase().startsWith(filterValue) ? 'block' : 'none';
    });
})