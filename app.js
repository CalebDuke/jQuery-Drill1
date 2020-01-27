$(document).ready(function() {
    // $('#btnSubmit').click(function() {
    //     alert($('#alert').val())
    // })

    if ($('#alert').val() === ''){
        $("#btnSubmit").attr("disabled", true);

    } else(
        $("#btnSubmit").removeAttr("disabled")
    )

    
    
})


