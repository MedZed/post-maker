var shotit = function() {
    $("#download").text("loading...");
    var div = document.getElementsByTagName("section")[0];
    var canvas = document.createElement('canvas');

    html2canvas(div,{
        canvas:canvas,
        scale:1.5,
      }).then(function(canvas) {
        // document.body.appendChild(canvas);
        var url = canvas.toDataURL();
        var triggerDownload = $("#download").attr("href", url).attr("download",name+".png").css('background', 'url("' + url + '") center/cover no-repeat').text("download it");
        // triggerDownload[0].click();
        // triggerDownload.remove();
      });  
 

  }


$('#verborgen_file').hide();
$('#uploadButton').on('click', function () {
      $('#verborgen_file').click();
});

$('#verborgen_file').change(function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
       $('.product-tumb').css('background-image', 'url("' + reader.result + '")');
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
    }
});

$('#range').change(function(){
    var myVar = $(this).val();
    if(myVar == 100){
        $('.product-tumb').css('background-size', "cover");
    }else{
        $('.product-tumb').css('background-size', myVar +"%");
    }
});
$('#range-position-x').change(function(){
    var myVar = $(this).val();
    if(myVar == 0){
        $('.product-tumb').css('background-position-x', "center");
    }else{
        $('.product-tumb').css('background-position-x', myVar +"%");
    }
});


$('#range-position-y').change(function(){
    var myVar = $(this).val();
    if(myVar == 0){
        $('.product-tumb').css('background-position-y', "center");
    }else{
        $('.product-tumb').css('background-position-y', myVar +"%");
    }
});


$('#multiple').on("click", function(){
    if($("#multiple").is(':checked')){ // checked

        $('.product-card').css('background-color','transparent');
        var mysrc = $('.product-tumb').css('background-image');
         $('.product-card').css('background-image', mysrc);
         $('.checkbox_bg_for_img').addClass('multiple_checked');
    }

    else{ 
        $('.product-card').css('background-image', 'none');
        $('.checkbox_bg_for_img').removeClass('multiple_checked');
    }
});


$('#color').on('change',function(){

    var c = $(this).val().substring(1);      // strip #
    var rgb = parseInt(c, 16);   // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff;  // extract red
    var g = (rgb >>  8) & 0xff;  // extract green
    var b = (rgb >>  0) & 0xff;  // extract blue

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    if (luma < 40) {
        // pick a different colour
        $('.checkbox_clr').css('color', 'white');
    }else{
        $('.checkbox_clr').css('color', 'black');

    }

    $('.product-card').css('background-image', 'none');
    $('.checkbox_clr').css('background-color', $(this).val());
    $('.product-card').css('background-color', $(this).val());
});


$('#ag').on("click", function(){
    if( $('.ag').is(':hidden')) {
    $('.ag').show();
    }else{
    $('.ag').hide();
    }
});

$('#agb').on("click", function(){
    if( $('.agb').is(':hidden')) {
    $('.agb').show();
    }else{
    $('.agb').hide();
    }
});

$('#agbk').on("click", function(){
    if( $('.agbk').is(':hidden')) {
    $('.agbk').show();
    }else{
    $('.agbk').hide();
    }
});


$('#dc').on("click", function(){
    if( $('.dc').is(':hidden')) {
    $('.dc').show();
    }else{
    $('.dc').hide();
    }
});

$('#ac').on("click", function(){
    if( $('.ac').is(':hidden')) {
    $('.ac').show();
    }else{
    $('.ac').hide();
    }
});

$('#nw').on("click", function(){
    if( $('.nw').is(':hidden')) {
    $('.nw').show();
    }else{
    $('.nw').hide();
    }
});

$('#pink').on("click", function () {
    $("body").get(0).style.setProperty("--color", "#E91E63");
    $("body").get(0).style.setProperty("--text-color", "#FFFFFF");
})
$('#yellow').on("click", function () {
    $("body").get(0).style.setProperty("--color", "#FFC107");
    $("body").get(0).style.setProperty("--text-color", "#1F1F1F");
})
$('#green').on("click", function () {
    $("body").get(0).style.setProperty("--color", "#4CAF50");
    $("body").get(0).style.setProperty("--text-color", "#FFFFFF");
})
$('#blue').on("click", function () {
    $("body").get(0).style.setProperty("--color", "#2196F3");
    $("body").get(0).style.setProperty("--text-color", "#FFFFFF");
})
 



