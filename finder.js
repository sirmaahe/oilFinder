$('body :not(:has(*))').html(function(i, v) {
    return v.replace(/(oil)/g, '<span class="oil">$1</span>').replace(/(Oil)/g, '<span class="oil">$1</span>').replace(/(OIL)/g, '<span class="oil">$1</span>');
});

$( ".oil" ).each(function(i, elem) {
    $(elem).before(
        '<img ' +
        'src="https://vignette.wikia.nocookie.net/battlefield/images/0/0e/BFBC2_American_Engineer_2.png/revision/latest?cb=20121103102906" ' +
        'style="position:relative;max-width:2rem;"' +
        '/>'
    )
    $(elem).after(
        '<img ' +
        'src="https://vignette.wikia.nocookie.net/battlefield/images/f/fd/BF2_M4_Soldier.png/revision/latest?cb=20111024203812" ' +
        'style="position:absolute;max-width:2rem;"' +
        '/>'
    )
})