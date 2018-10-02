//Sort by difficulty number 1 easy, 2 hard...
var items = $('.projectItem');

items.sort(function(a, b){
    return + $(a).data('difficulty') - + $(b).data('difficulty');
});
    
items.appendTo('.otherProjects');

console.log('Script Triggered')