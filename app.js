$(document).ready(function () {
    $("#alert").keyup(function () {

        if ($('#alert').val() === '') {
            $("#btnSubmit").attr("disabled", true);

        } else (
            $("#btnSubmit").removeAttr("disabled")
        )

    });

    //only need 1 unordered list to hold all list items
    let buts = $('<ul></ul>')
    
    $('#btnSubmit').click(function (e) {
        e.preventDefault();

        alert($('#alert').val())
        let insertText = $('#alert').val();
        let li  = $('<li></li>');
        li.text(insertText);
        buts.append(li);

        li.mouseover(function(){
            $(this).css({
                'backgroundColor': 'blue'
            })

    })

    let colorArray = ["#C2272D", "#db7c0f", "#FFFF01", "#009245", "#91c3db", "#ca04ed", "#612F90", "#aeff00"]
    function generateRandomColor() {
        return Math.floor((Math.random() * 8));
    };

    $('li').click(function () {
        let randomNumber = generateRandomColor();
        $(this).css({
            'color': colorArray[randomNumber]
        });
    });

    $('li').dblclick(function () {
        $(this).remove();
    });

    
    
    $("body").append(buts);
    })

})

