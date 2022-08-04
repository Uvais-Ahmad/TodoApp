var a = document.getElementsByClassName('chk');
var delBtn = document.getElementById('delbtn');


//First call Event Listneer all checkbox
for(let i =0 ; i<a.length ; i++){
    a[i].addEventListener('click',checkValue);
}

//When anyOne is click then WE get value from checkbox and
//set this attribute value to Delete button

function checkValue(){
    let val = this.getAttribute('value');
    delBtn.setAttribute('href','/deleteTask/?id='+val);
}

