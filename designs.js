$(function(){
    // Select color input
    // Select size input

    // When size is submitted by the user, call makeGrid()
    $('#sizePicker').submit(makeGrid);

    //TODO
    function makeGrid() {
        // Your code goes here!
        let gridHeight, gridWidth, gridCanvas;
        gridHeight = $('#inputHeight').val();
        gridWidth = $('#inputWeight').val();
        gridCanvas = $('#pixelCanvas');

        gridCanvas.children().remove();        
        
        for(let i = 1; i <= gridHeight; i++){
            gridCanvas.append('<tr></tr>');        
        }

        let row = $('tr');        
        for(let j = 1; j <= gridWidth; j++){
            row.append('<td></td>');
        }

        $('td').click(function(){
            let gridColor = $('#colorPicker').val();
            $(this).attr("bgcolor",gridColor);
        });
        return false;
    }
});