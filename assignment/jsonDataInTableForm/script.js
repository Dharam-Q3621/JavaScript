fetch( "https://jsonplaceholder.typicode.com/todos" )
    .then( ( Response ) => Response.json() )
    .then( (json ) => tableData( json ) );

var tbody = document.querySelector( ".tbody" );

function tableData( json ) {
    for ( const data of json ) {
        tbody.innerHTML += `
                 <tr>
                    <td class="text-warning fw-bold">${data.id}</td> 
                    <td class="text-info text-center fw-bold">${data.userId}</td>
                    <td class="fw-bold">${data.title}</td>
                    <td class="fw-bold text-center ${data.completed ? 'text-success' : 'text-danger'}" >${data.completed}</td>
                </tr>
        `;
    };
}



