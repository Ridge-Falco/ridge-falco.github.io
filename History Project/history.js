var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var dropcontent = this.nextElementSibling;
        if (dropcontent.style.display == 'block') {
        dropcontent.style.display = 'none';
        } else {
        dropcontent.style.display = 'block';
        }
    });
}