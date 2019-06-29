
$(document).ready(function() {
    $('body').scrollspy({ target: '#page-nav-wrapper', offset: 100});
    $('.scrollto').on('click', function(e){
            var target = this.hash;
            e.preventDefault();

    $('body').scrollTo(target, 800, {offset: -60, 'axis':'y'});

     });

                    /* ======= Fixed page nav when scrolled ======= */    
   $(window).on('scroll resize load', function() {
   $('#page-nav-wrapper').removeClass('fixed');
                 var scrollTop = $(this).scrollTop();
        var topDistance = $('#page-nav-wrapper').offset().top;

                 if ( (topDistance) > scrollTop ) {
                    $('#page-nav-wrapper').removeClass('fixed');
                    $('body').removeClass('sticky-page-nav');
                 }
                 else {
                    $('#page-nav-wrapper').addClass('fixed');
                    $('body').addClass('sticky-page-nav');
                 }

            });
 var $container = $('.isotope');
    $container.imagesLoaded(function () {
        $('.isotope').isotope({
                            itemSelector: '.item'
                        });
                    });
                    $('#filters').on( 'click', '.type', function() {
                      var filterValue = $(this).attr('data-filter');
                      $container.isotope({ filter: filterValue });
                    });
    $('.filters').each( function( i, typeGroup ) {
             var $typeGroup = $( typeGroup );
                $typeGroup.on( 'click', '.type', function() {
                    $typeGroup.find('.active').removeClass('active');
                    $( this ).addClass('active');
                                    });
            });


          $.getScript("./node_modules/jquery-inviewport/dist/jquery.inViewport.js").done(function(){
              console.log("done");
            var chart;
            var chart2;
            var chart3;
            $.getScript("./node_modules/progressbar.js/dist/progressbar.js", function(){
                            chart = new ProgressBar.Circle(document.getElementById('chart'), {
                            color: 'black',
                            trailColor: '#eee',
                            trailWidth: 1,
                            duration: 1400,
                            easing: 'bounce',
                            strokeWidth: 5,
                            from: { color: '#009688', a: 0 },
                            text: { value: "95%" },
                            to: { color: '#009688', a: 1 },
                            // Set default step function for all animate calls
                            step: function (state, circle) {
                                circle.path.setAttribute('stroke', state.color);
                            } 
                        });
            });

            $.getScript("./node_modules/progressbar.js/dist/progressbar.js", function(){
                chart2= new ProgressBar.Circle(document.getElementById('chart2'),{
                    color: 'black',
                    trailColor: '#eee',
                    trailWidth: 1,
                    duration: 1400,
                    easing: 'bounce',
                    strokeWidth: 5,
                    from: { color: '#009688', a: 0 },
                    text: { value: "90%" },
                    to: { color: '#009688', a: 1 },
                    step: function(state,circle){
                        circle.path.setAttribute('stroke',state.color);
                    }

                })

            })

             $.getScript("./node_modules/progressbar.js/dist/progressbar.js", function(){
                chart3= new ProgressBar.Circle(document.getElementById('chart3'),{
                    color: 'black',
                    trailColor: '#eee',
                    trailWidth: 1,
                    duration: 1400,
                    easing: 'bounce',
                    strokeWidth: 5,
                    from: { color: '#009688', a: 0 },
                    text: { value: "40%" },
                    to: { color: '#009688', a: 1 },
                    step: function(state,circle){
                        circle.path.setAttribute('stroke',state.color);
                    }

                })

            })
                $(window).on('resize scroll', function () {              
                    if ($('#container').inViewport()) {
                        chart.animate(85/100);
                        chart2.animate(75/100);
                        chart3.animate(20/100);
                    }
                 });
             });

        });








