var points = 0;
var username;

var userForm = document.getElementById('username');

userForm.addEventListener('submit', function (e) {
    e.preventDefault()
    var name = document.getElementById('user');
    username = name.value;

});


var radioForm = document.getElementById('radio');

radioForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let v1 = document.getElementById('v1');

    if (v1.checked) {
        points++;
    }

});

var checkboxForm = document.getElementById('checkbox');

checkboxForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let v1 = document.getElementById('a1');
    let v3 = document.getElementById('a3');

    if (v1.checked && v3.checked) {
        points++;
    }
});

var listForm = document.getElementById('list');

listForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let select_item = document.getElementById('select');
    let selected = select_item.options[select_item.selectedIndex].id;


    if (selected === '1') {
        points++;
    }

});


var textForm = document.getElementById('text-f');

textForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let text = document.getElementById('c1');
    if (text.value === '<script></script>') {
        points++;
    }
});


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function allowDrop(ev) {
    ev.preventDefault();
}

var dragForm = document.getElementById('drag-drop');

dragForm.addEventListener('click', function (e) {
    let right_section = document.getElementById('div2')
    let ch_nodes = right_section.childNodes;
    if (ch_nodes.length === 2) {
        if ( (ch_nodes[0].id === 'd1' && ch_nodes[1].id === 'd2') || (ch_nodes[0].id === 'd2' && ch_nodes[1].id === 'd1')){
            points++;
        }
    }
    alert(`${username} набрав: ${points} балів`);
});