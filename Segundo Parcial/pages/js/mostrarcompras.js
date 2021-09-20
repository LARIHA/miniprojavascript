llenarTabla();

function llenarTabla(){
    var tbody = document.querySelector('#tblCompras tbody');

    tbody.innerHTML ='';

    var aNo = JSON.parse(localStorage.getItem('no_compras')),
        aCodigo = JSON.parse(localStorage.getItem('codigo_compras')),
        aProveedor = JSON.parse(localStorage.getItem('proveedor_compras')),
        aProducto = JSON.parse(localStorage.getItem('producto_compras')),
        aColor = JSON.parse(localStorage.getItem('color_compras')),
        aTalla = JSON.parse(localStorage.getItem('talla_compras')),
        aCant = JSON.parse(localStorage.getItem('cant_compras')),
        aPrecio = JSON.parse(localStorage.getItem('precio_compras')),
        aFechaIngreso = JSON.parse(localStorage.getItem('fechaingreso_compras'));
       

        var nCantidadCompras =aNo.length;

        for(var i = 0; i < nCantidadCompras; i++ ){

            var fila = document.createElement('tr');

            var celdaNo = document.createElement('td'),
                celdaCodigo = document.createElement('td'),
                celdaProveedor = document.createElement('td'),
                celdaProducto = document.createElement('td'),
                celdaColor = document.createElement('td'),
                celdaTalla = document.createElement('td'),
                celdaCant = document.createElement('td'),
                celdaPrecio = document.createElement('td'),
                celdaFechaIngreso = document.createElement('td'),
                celdaModificar = document.createElement('td'),
                enlaceModificar = document.createElement('a');
                


                celdaModificar.setAttribute('class', 'btnModificar');
                celdaModificar.setAttribute('id',i)

                enlaceModificar.href ='modificarcompras.html?id' + '=' + i;

                             


            var nodoTextoNo= document.createTextNode(aNo[i]),
                nodoTextoCodigo= document.createTextNode(aCodigo[i]),
                nodoTextoProveedor= document.createTextNode(aProveedor[i]),
                nodoTextoProducto= document.createTextNode(aProducto[i]),
                nodoTextoColor= document.createTextNode(aColor[i]),
                nodoTextoTalla= document.createTextNode(aTalla[i]),
                nodoTextoCant= document.createTextNode(aCant[i]),
                nodoTextoPrecio= document.createTextNode(aPrecio[i]), 
                nodoTextoFechaIngreso= document.createTextNode(aFechaIngreso[i]),
                nodoTextoModificar= document.createTextNode('Modificar');
              


            celdaNo.appendChild(nodoTextoNo);
            celdaCodigo.appendChild(nodoTextoCodigo);
            celdaProveedor.appendChild(nodoTextoProveedor);
            celdaProducto.appendChild(nodoTextoProducto);
            celdaColor.appendChild(nodoTextoColor);
            celdaTalla.appendChild(nodoTextoTalla);
            celdaCant.appendChild(nodoTextoCant);
            celdaPrecio.appendChild(nodoTextoPrecio);     
            celdaFechaIngreso.appendChild(nodoTextoFechaIngreso);
            enlaceModificar.appendChild(nodoTextoModificar);
            celdaModificar.appendChild(enlaceModificar);
           

            fila.appendChild(celdaNo);
            fila.appendChild(celdaCodigo);
            fila.appendChild(celdaProveedor);
            fila.appendChild(celdaProducto);
            fila.appendChild(celdaColor);
            fila.appendChild(celdaTalla);
            fila.appendChild(celdaCant);
            fila.appendChild(celdaPrecio);
            fila.appendChild(celdaFechaIngreso);
            fila.appendChild(celdaModificar);
            

            tbody.appendChild(fila);


            

        }
}