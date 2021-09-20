
var aNo = [],
    aCodigo =[],
    aProveedor = [],
    aProducto = [],
    aColor = [],
    aTalla = [],
    aCant = [],
    aPrecio = [],    
    aFechaIngreso = [];

    if (localStorage.getItem('no_ventas') != null) {
        aNo = JSON.parse(localStorage.getItem('no_ventas'));
        aCodigo = JSON.parse(localStorage.getItem('codigo_ventas'));
        aProveedor = JSON.parse(localStorage.getItem('proveedor_ventas'));
        aProducto = JSON.parse(localStorage.getItem('producto_ventas'));
        aColor = JSON.parse(localStorage.getItem('color_ventas'));
        aTalla = JSON.parse(localStorage.getItem('talla_ventas'));
        aCant = JSON.parse(localStorage.getItem('cant_ventas'));
        aPrecio = JSON.parse(localStorage.getItem('precio_ventas'));
        aFechaIngreso = JSON.parse(localStorage.getItem('fechaingreso_ventas'));
        
        
    }else{
    
        guardarInformacion(aNo,aCodigo,aProveedor,aProducto,aColor,aTalla,aCant,aPrecio,aFechaIngreso);
    
    }
    

  

var elementoBotonRegistrarV = document.querySelector('#btnRegistrarVenta'); 

elementoBotonRegistrarV.addEventListener('click', registrarVenta);

function registrarVenta(){
    var nNo = document.querySelector('#txtNo').value,
        nCodigo = document.querySelector('#txtCodigo').value,
        sProveedor = document.querySelector('#txtProveedor').value,
        sProducto = document.querySelector('#txtProducto').value,
        sColor = document.querySelector('#txtColor').value,
        nTalla = document.querySelector('#txtTalla').value,
        nCant= document.querySelector('#txtCant').value,
        nPrecio = document.querySelector('#txtPrecio').value,       
        nFechaIngreso = document.querySelector('#txtFechaIngreso').value;
        

        aNo.push(nNo);
        aCodigo.push(nCodigo);
        aProveedor.push(sProveedor);
        aProducto.push(sProducto);
        aColor.push(sColor);
        aTalla.push(nTalla);
        aCant.push(nCant);
        aPrecio.push(nPrecio);
        aFechaIngreso.push(nFechaIngreso);

        localStorage.setItem('no_ventas', JSON.stringify(aNo));
        localStorage.setItem('codigo_ventas', JSON.stringify(aCodigo));
        localStorage.setItem('proveedor_ventas', JSON.stringify(aProveedor));
        localStorage.setItem('producto_ventas', JSON.stringify(aProducto));
        localStorage.setItem('color_ventas', JSON.stringify(aColor));
        localStorage.setItem('talla_ventas', JSON.stringify(aTalla));
        localStorage.setItem('cant_ventas', JSON.stringify(aCant));
        localStorage.setItem('precio_ventas', JSON.stringify(aPrecio));
        localStorage.setItem('fechaingreso_ventas', JSON.stringify(aFechaIngreso));
       
        llenarTabla();

        
    }
        
         
       


        


