$(function(){
    // Select color input
    // Select size input
    $('input:radio').first().prop("checked",true);
    $('h2:not(:first-of-type)').css({"font-family": "Shadows of Security", "font-size":30});
    // When size is submitted by the user, call makeGrid()
    $('#sizePicker').submit(makeGrid);

    //TODO
    function makeGrid() {
        // Your code goes here!
        $('h2:last > div').remove();

        let gridHeight, gridWidth;
        gridHeight = $('#inputHeight').val();
        gridWidth = $('#inputWeight').val();

        gridCanvas.children().remove();        
        
        for(let i = 1; i <= gridHeight; i++){
            gridCanvas.append('<tr></tr>');        
        }

        let tableRow = $('tr');
        for(let j = 1; j <= gridWidth; j++){
            tableRow.append('<td></td>');
        }

        $('td').click(function(){
            let gridColor = $('#colorPicker').val();
            $(this).attr("bgcolor") ? $(this).removeAttr("bgcolor") : $(this).attr("bgcolor",gridColor);
        });

        return false;
    }
});

const gridCanvas = $('#pixelCanvas');
gridCanvas.css({"margin":"20px auto 25px auto"});
let gridOutline = $("input[type='radio']").prop("checked",true);
gridOutline.change(function(){
    if(gridCanvas.children().length > 0){
        gridCanvas.removeClass().addClass($(this).val());
    }else{
        let errorMessage = '<div class="danger">Please Create the Canvas first</div>';
        if($('h2:last').has(errorMessage)){
            $('h2:last > div').remove();
            $('h2:last').append(errorMessage);
        }else{
            $('h2:last').append(errorMessage);
        }
    }
});
