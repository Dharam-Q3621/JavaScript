var input_item = document.querySelector( "#item" );
var add_item_btn = document.querySelector( ".add" );
var update_item_btn = document.querySelector( ".update" );
var tbody = document.querySelector( ".tbody" );
var itemListBox = document.querySelector( ".item-list" );
var tostUpdate = document.querySelector( ".toast-body p:first-child" );

// disabled button when input field empty
input_item.addEventListener( "keyup", function () {
    console.log( "dff" );
    if ( input_item.value !== "" ) {
        add_item_btn.classList.remove( "disabled" );
    } else {
        add_item_btn.classList.add( "disabled" );
    }
} );

// add item in array
const itemList = [];
add_item_btn.addEventListener( "click", function () {
    if ( !itemList.includes( input_item.value ) && input_item.value !== "" ) {
        itemList.push( input_item.value );
        tostShow( "Item Added Successfully" );
        showItem();
        checkEmptyArray();
    }
    else if ( input_item.value === "" ) {
        alert( "Please fill out This field !" );

    }
    else {
        alert( "This Item Already Available In the List !" );

    }
} );

// show all item on ui
function showItem() {
    tbody.innerHTML = "";
    itemList.map( ( value, index ) => {
        tbody.innerHTML += `
        <tr>
        <td class="text-warning fw-bold">${index + 1}</td> 
        <td>${value}</td>
        <td class="text-end">
        <button type="button" onclick="updateItem(${index})" class="update-icon me-4"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button type="button" onclick="removeItem(${index})" class="btn-close btn-close-white " aria-label="Close"></button>
        </td>
    </tr>
        `;
    } );
}
// remove item from array
function removeItem( index ) {
    itemList.splice( index, 1 );
    showItem();
    checkEmptyArray();
}
//check array is empty if empty then item list not show on ui
function checkEmptyArray() {
    if ( itemList.length != 0 ) {
        itemListBox.classList.remove( "d-none" );
    } else {
        itemListBox.classList.add( "d-none" );
    }
}
// re-assign value in input field
let updateIndex = null;
function updateItem( index ) {
    updateIndex = index;
    input_item.value = itemList[index];
    update_item_btn.classList.remove( "d-none" );
    add_item_btn.classList.add( "d-none" );
}

// update item in array
update_item_btn.addEventListener( "click", function () {
    if ( !itemList.includes( input_item.value ) && input_item.value !== "" ) {
        itemList.splice( updateIndex, 1, input_item.value );
    }
    else if ( itemList.includes( input_item.value ) ) {
        alert( "This Item Already Available In the List !" );
    }
    else {
        alert( "Please fill out This field !" );
    }
    update_item_btn.classList.add( "d-none" );
    add_item_btn.classList.remove( "d-none" );
    tostShow( "Item Updated Successfully" );
    showItem();
} );

// Toast 
function tostShow( value ) {
    var toastElList = [].slice.call( document.querySelectorAll( '.toast' ) )
    var toastList = toastElList.map( function ( toastEl ) {
        return new bootstrap.Toast( toastEl )
    } )
    toastList.forEach( toast => toast.show() );
    tostUpdate.innerHTML = value;
}
