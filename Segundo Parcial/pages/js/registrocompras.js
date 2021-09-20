if (localStorage.getItem('no_compras') != null)
{
    aNo = JSON.parse(localStorage.getItem('no_compras'));
    aCodigo = JSON.parse(localStorage.getItem('codigo_compras'));
    aProveedor = JSON.parse(localStorage.getItem('proveedor_compras'));
    aProducto = JSON.parse(localStorage.getItem('producto_compras'));
    aColor = JSON.parse(localStorage.getItem('color_compras'));
    aTalla = JSON.parse(localStorage.getItem('talla_compras'));
    aCant = JSON.parse(localStorage.getItem('cant_compras'));
    aPrecio = JSON.parse(localStorage.getItem('precio_compras'));
    aFechaIngreso = JSON.parse(localStorage.getItem('fechaingreso_compras'));
    
    
}else{

    guardarInformacion(aNo,aCodigo,aProveedor,aProducto,aColor,aTalla,aCant,aPrecio,aFechaIngreso);

}
var aNo = [],
    aCodigo =[],
    aProveedor = [],
    aProducto = [],
    aColor = [],
    aTalla = [],
    aCant = [],
    aPrecio = [],    
    aFechaIngreso = [];
    

  

var elementoBotonRegistrar = document.querySelector('#btnRegistrar'); 

elementoBotonRegistrar.addEventListener('click', registrarCompra);

function registrarCompra(){
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
       

        guardarInformacion(aNo,aCodigo,aProveedor,aProducto,aColor,aTalla,aCant,aPrecio,aFechaIngreso);

        llenarTabla();
    }
        function guardarInformacion(paNo,paCodigo,paProveedor,paProducto,paColor,paTalla, paCant, paPrecio, paFechaIngreso){
        localStorage.setItem('no_compras', JSON.stringify(paNo));
        localStorage.setItem('codigo_compras', JSON.stringify(paCodigo));
        localStorage.setItem('proveedor_compras', JSON.stringify(paProveedor));
        localStorage.setItem('producto_compras', JSON.stringify(paProducto));
        localStorage.setItem('color_compras', JSON.stringify(paColor));
        localStorage.setItem('talla_compras', JSON.stringify(paTalla));
        localStorage.setItem('cant_compras', JSON.stringify(paCant));
        localStorage.setItem('precio_compras', JSON.stringify(paPrecio));
        localStorage.setItem('fechaingreso_compras', JSON.stringify(paFechaIngreso));
       

       


        


}

 