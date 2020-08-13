let $row;
$("tbody").on('click',function(evt){
    $row = evt.target.parentElement.parentElement;
});
$('.modal-content .modal-footer .remove').on('click',function(){
    $row.remove();
    $(this).attr("data-dismiss","modal");
});

$(function () {
$('[data-toggle="tooltip"]').tooltip()
})