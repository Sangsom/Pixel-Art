$(document).ready(function() {

    // Select color input
    let color;
    // Select size input
    let height, width;

    color = $('#colorPicker').val();

    $('#colorPicker').on('change', function() {
        color = $('#colorPicker').val();
    })
    // When size is submitted by the user, call makeGrid()

    /**
     * TODO: After submitting clear table and create new one
     */
    $('#sizePicker').submit(function(e) {
        height = $('#input_height').val();
        width = $('#input_width').val();
        
        e.preventDefault();
        clearGrid();
        makeGrid();

        $('td').on('click', function() {
            $(this).toggleClass('clicked');

            if ($(this).hasClass('clicked')) {
                $(this).css('background-color', color);
            } else {
                $(this).css('background-color', '');
            }
        })
        
    })

    function makeGrid() {
        let canvas = $('#pixel_canvas');
        let tableRow = '';
        let cell = '';

        for (let col = 0; col < height; col++) {
            tableRow += '<tr>';
            for (let row = 0; row < width; row++) {
                tableRow += '<td></td>';
            }
            tableRow += '</tr>';
        }
        canvas.append(tableRow);        
    }

    function clearGrid() {
        let canvas = $('#pixel_canvas');
        canvas.empty();
    }
})
