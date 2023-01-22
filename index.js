let text = '{'+
    '"events": ['+
     '   {' +
 '          "name": "Hanlon Lab Working session",'+
'"location": "Hanlon Lab, Babbio Centre", '+
'"date": "03/01/23 10am"'+
 '       }, '+
'{  '+
  '  "name": "Intro to Python 1", '+
 '   "location": "Hanlon Lab, Babbio Centre", '+
'    "date": "03/03/23 10am"'+
'}, '+
'{   '+
   ' "name": "Intro to accessing Hanlon Lab Dataset - Session 1", '+
  '  "location": "Hanlon Lab, Babbio Centre", '+
 '   "date": "03/05/23 10am"'+
'}, '+
'{    '+
   ' "name": "Intro to Python 2", '+
  '  "location": "Hanlon Lab, Babbio Centre", '+
 '   "date": "03/06/23 10am"'+
'} '+
']}'
const data = JSON.parse(text);
console.log(data.events[0]);
var rowdiv = '<div class="row"';
var closediv = '</div>';
var itr = 0

for (let event in data.events) {
    if (event % 2 !== 0) {
        console.log(data.events[event].name)
        document.getElementById('row-'+itr).innerHTML +=
            '<div class="col-sm-6">' + '<div class="card"><div class="card-body"><h5 class="card-title">' + data.events[event].name
            + '</h5>'
            + '<p class="card-text">' + data.events[event].location + '</br>' + data.events[event].date
            + '</p>'
            + ' <a href="#" class="btn btn-primary">Register</a>'
            + closediv + closediv + closediv + closediv;
    }
    else if (event == 0 || event % 2 == 0) {
        itr = itr + 1
        console.log(itr)
        document.getElementById('cards-collection').innerHTML +=
            rowdiv + ' id=row-' + itr + '>'
            + '<div class="col-sm-6">' + '<div class="card"><div class="card-body"><h5 class="card-title">' + data.events[event].name
            + '</h5>'
            + '<p class="card-text">' + data.events[event].location + '</br>' + data.events[event].date
            + '</p>'
            + ' <a href="#" class="btn btn-primary">Register</a>'
            + closediv + closediv + closediv;

    }
}
var x = document.getElementsByClassName("row");
console.log(x);