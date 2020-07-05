(function(){
    function fetchAjax(options = {}){
        if(options.hasOwnProperty("url")){
            return $.ajax({
                ...options
            })
        }
    }
    $('[title="Quick View"]').on('click',function(e){
        var target =e.currentTarget;
        var masp = $(target).data('masp')
        var options = {
            url:`quickview/${masp}`
        }
        fetchAjax(options).done( body => {
            $('#quickview-wrapper').html(body)
            setTimeout(() => {
                    $('#productmodal').hide()
                   $('#productmodal').modal('show');
            }, 0); 
        })
    })


})()