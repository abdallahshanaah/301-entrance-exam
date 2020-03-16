var allinfo=[];
var storage=[];
function Forminfo(name,date) {
    this.name=name;
    this.date=date;
    allinfo.push.(this);
}


 function addinfo(name,date){
     var name=document.getElementById('name');
     var date=document.getElementById('datea')
     new Forminfo(name,date)
     set_item();
    
 }





function set_item() {
    var inputname= JSON.stringify(storage);
localStorage.setItem("storage",  inputname);

    
}
function get_item() {
    var inputname= get_item("storage");
    storage=JSON.parse(inputname)

    
}
get_item(); 

