var data = ['','','','','','','','',''];
if(localStorage.getItem("workday_data")==null){} else {
data = JSON.parse(localStorage.getItem("workday_data"));
}
var currentHour = moment().format('H');
$('#currentDay').html(moment().format('dddd, MMMM Do'));
var rowNo = 9;
var key = 0;
$('table tr').each(function(){   
if(rowNo<currentHour){
$(this).children('td').children('textarea').val(data[key]).attr('class','past');
} else {
if(rowNo>currentHour){
$(this).children('td').children('textarea').val(data[key]).attr('class','future');
} else {
$(this).children('td').children('textarea').val(data[key]).attr('class','present');
}}
rowNo = rowNo+1;
key = key+1;
});
$('.saveBtn').click(function(){
    data = [];
    $('table tr').each(function(){ 
    data.push($(this).children('td').children('textarea').val());    
    }); 
    localStorage.setItem("workday_data",JSON.stringify(data));  
})
