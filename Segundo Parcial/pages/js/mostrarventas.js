    llenarTabla();

    function llenarTabla(){
         var tbody = document.querySelector('#tblVentas tbody');

                tbody.innerHTML ='';

             var aNo = JSON.parse(localStorage.getItem('no_ventas')),
             aCodigo = JSON.parse(localStorage.getItem('codigo_ventas')),
             aProveedor = JSON.parse(localStorage.getItem('proveedor_ventas')),
             aProducto = JSON.parse(localStorage.getItem('producto_ventas')),
             aColor = JSON.parse(localStorage.getItem('color_ventas')),
             aTalla = JSON.parse(localStorage.getItem('talla_ventas')),
                aCant = JSON.parse(localStorage.getItem('cant_ventas')),
                aPrecio = JSON.parse(localStorage.getItem('precio_ventas')),
                aFechaIngreso = JSON.parse(localStorage.getItem('fechaingreso_ventas'));
       

             var nCantidadVentas =aNo.length;

              for(var i = 0; i < nCantidadVentas; i++ ){

             var fila = document.createElement('tr');

             var celdaNo = document.createElement('td'),
                celdaCodigo = document.createElement('td'),
                celdaProveedor = document.createElement('td'),
                celdaProducto = document.createElement('td'),
                celdaColor = document.createElement('td'),
                celdaTalla = document.createElement('td'),
                celdaCant = document.createElement('td'),
                celdaPrecio = document.createElement('td'),
                celdaFechaIngreso = document.createElement('td');
                
                
             var nodoTextoNo= document.createTextNode(aNo[i]),
                nodoTextoCodigo= document.createTextNode(aCodigo[i]),
                nodoTextoProveedor= document.createTextNode(aProveedor[i]),
                nodoTextoProducto= document.createTextNode(aProducto[i]),
                nodoTextoColor= document.createTextNode(aColor[i]),
                nodoTextoTalla= document.createTextNode(aTalla[i]),
                nodoTextoCant= document.createTextNode(aCant[i]),
                nodoTextoPrecio= document.createTextNode(aPrecio[i]), 
                nodoTextoFechaIngreso= document.createTextNode(aFechaIngreso[i]);
            
              

               celdaNo.appendChild(nodoTextoNo);
            celdaCodigo.appendChild(nodoTextoCodigo);
            celdaProveedor.appendChild(nodoTextoProveedor);
            celdaProducto.appendChild(nodoTextoProducto);
            celdaColor.appendChild(nodoTextoColor);
            celdaTalla.appendChild(nodoTextoTalla);
            celdaCant.appendChild(nodoTextoCant);
            celdaPrecio.appendChild(nodoTextoPrecio);     
            celdaFechaIngreso.appendChild(nodoTextoFechaIngreso);
            
           

            fila.appendChild(celdaNo);
            fila.appendChild(celdaCodigo);
            fila.appendChild(celdaProveedor);
            fila.appendChild(celdaProducto);
            fila.appendChild(celdaColor);
            fila.appendChild(celdaTalla);
            fila.appendChild(celdaCant);
            fila.appendChild(celdaPrecio);
            fila.appendChild(celdaFechaIngreso);
           

            
            

            tbody.appendChild(fila);


            

        }
    }