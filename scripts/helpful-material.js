//Sort by difficulty number 1 easy, 2 hard...
function sortProject(containerClassName, projectClassName) {
    var items = $(containerClassName);

    items.sort(function(a, b){
        return + $(a).data('difficulty') - + $(b).data('difficulty');
    });

    items.appendTo(projectClassName);
}

<<<<<<< HEAD
sortProject('li>.projectItem', 'li>.otherProjects');
sortProject('li>.easyProjectItem', 'li>.beginnerProjects');
=======
sortProject('.projectItem', '.otherProjects');
sortProject('.easyProjectItem', '.beginnerProjects');
>>>>>>> 79de7abf060f33f198b75fbe9838e7f7c964d7ee

console.log('Script Triggered')
