/*function to add items*/
function addItem() {

    //get the value of the input box
    var itemValue = $('#addItemValue').val();

    //validate input
    if (itemValue.length === 0) {
        alert('You have to add something!!!');

    }

    //if the input is valid ....
    else {

        //dynamicaly create one row inside the shopping list
        var row = $('<li><button class="checkbox">✓</button><span class="list">' + itemValue + '</span><button class="delete">x</button></li>');

        //add each row to the previous ones
        $('.shopping-list').append(row);

        //empty the input box after submit by reseting the value
        itemValue = $('#addItemValue').val('');
    }

}
/*function to delete items*/
function deleteAll() {
    //find the the UL container (in our case having the class shopping-list) which contains all the LIs and delete it
    $('.shopping-list').empty();
}

/*function to delete one item*/
function deleteItem() {
    //$(this) means that on WHATEVER you just clicked, go to the parent of it (in our case the LI) and remove it
    $(this).parent().remove();
}
/*function to check an item*/
function tickItem() {
    //$(this) means that on WHATEVER you just clicked, go to the parent of it (in our case the LI) and add / remove the "ticked" class to it
    $(this).parent().toggleClass('tick');

}

$(document).ready(function () {
    /*on click on the "#addItem" button activate function called addItem()*/

    $('#addItem').on('click', function () {
        addItem();
    });
    /*on click on the ".delete-all" activate function called deleteAll()*/

    $('#resetButton').on('click', function () {
        deleteAll();
    });
});
/*add item on enter*/
$(document).on('keypress', function (key) {
    //keyCode == 13 is the ENTER key
    if (key.keyCode == 13) {
        addItem();
    }
});
/*clear list on delete*/
$(document).on('keypress', function (key) {
    //keyCode == 46 is the DELETE key
    if (key.keyCode == 46) {
        deleteAll();
    }
});
/*on click on the ".delete" button activate function called deleteItem()*/

$(document).on('click', '.delete', deleteItem);

/*on click on the ".checkbox" button activate function called tickItem()*/

$(document).on('click', '.checkbox', tickItem);
