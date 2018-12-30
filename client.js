let friends = [];

let addName = () =>{
    console.log( 'in addName' );
    friends.push( document.getElementById( 'nameIn' ).value );
    document.getElementById( 'nameIn' ).value = '';
    console.log( friends );
    showNames()
} // end addName

let showNames = () => {
    console.log( 'in shownames' );
    let el = document.getElementById( 'namesOut' );
    // loop through array and add each to ul
    let outputString = '';
    for ( name of friends ){
        outputString += '<li>' + name + '</li>';
    } // end for
    el.innerHTML = outputString;
} //end showNames