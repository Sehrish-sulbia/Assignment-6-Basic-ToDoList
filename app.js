let inputText = document.querySelector('input');
const btn = document.getElementById('btn');
const ul = document.querySelector('ul');


btn.addEventListener("click", todo)



function todo(){
    if (inputText.value.length === 0) {
        return false;
    }
    else {
        const todoItem = inputText.value;

        let li = document.createElement('li');
        li.innerText = todoItem;
        ul.appendChild(li);
        inputText.value = "";

        var dBtn = document.createElement("button");
        dBtn.appendChild(document.createTextNode("Remove"));
        li.appendChild(dBtn);
        dBtn.addEventListener("click", deleteListItem);

        function deleteListItem() {
              li.remove();
        }
        
        var edit = document.createElement("button");
        edit.appendChild(document.createTextNode("Edit"));
        li.appendChild(edit);
        edit.addEventListener("click", editLi);

        function editLi() {
            let p = prompt("Edit Your Entry");
            li.innerText = p;
            li.appendChild(dBtn);
            li.appendChild(edit);

        }
    }
}