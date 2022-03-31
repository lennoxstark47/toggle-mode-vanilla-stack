var toggleOuter = document.getElementById('toggle-outer');
var toggleInner = document.getElementById('toggle-inner');
var container = document.getElementById('container')
var text = document.getElementById('text')

toggleOuter.addEventListener('click', function () {
    var att = toggleOuter.getAttribute("class")
    if (att=="outer-start"){

        toggleOuter.setAttribute("class","outer-end")
        toggleInner.setAttribute("class","inner-end")
        container.setAttribute("class","container-black")
        text.setAttribute("class", "text-white")
    } else {
        toggleOuter.setAttribute("class","outer-start")
        toggleInner.setAttribute("class","inner-start")
        container.setAttribute("class","container-white")
        text.setAttribute("class", "text-black")
    }
})