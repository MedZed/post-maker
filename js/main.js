var shotit = function() {

    html2canvas(document.getElementsByTagName("section")[0],{
        onrendered: function(canvas) {
            console.log('Report Image URL:');
        },
        scale: 2,
      }).then(function(canvas) {
        // document.body.appendChild(canvas);
        var url = canvas.toDataURL();
        var triggerDownload = $("<a>").attr("href", url).attr("download",name+".png").appendTo("body");
        triggerDownload[0].click();
        triggerDownload.remove();
      });
  }

//   function saveAs(uri, filename) {
//     var link = document.createElement('a');
//     if (typeof link.download === 'string') {
//       link.href = uri;
//       link.download = filename;

//       //Firefox requires the link to be in the body
//       document.body.appendChild(link);

//       //simulate click
//       link.click();

//       //remove the link when done
//       document.body.removeChild(link);
//     } else {
//       window.open(uri);
//     }
//   }


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



$('#ag').on("click", function(){
    if( $('.ag').is(':hidden')) {
    $('.ag').show();
    }else{
    $('.ag').hide();
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
 



