if (localStorage.getItem('no_compras') != null)
{
    var  aNo = JSON.parse(localStorage.getItem('no_compras'));
    aCodigo = JSON.parse(localStorage.getItem('codigo_compras'));
    aProveedor = JSON.parse(localStorage.getItem('proveedor_compras'));
    aProducto = JSON.parse(localStorage.getItem('producto_compras'));
    aColor = JSON.parse(localStorage.getItem('color_compras'));
    aTalla = JSON.parse(localStorage.getItem('talla_compras'));
    aCant = JSON.parse(localStorage.getItem('cant_compras'));
    aPrecio = JSON.parse(localStorage.getItem('precio_compras'));
    aFechaIngreso = JSON.parse(localStorage.getItem('fechaingreso_compras'));
    
}

var id = getUrlVars()["id"],
    nNo = aNo[id],
    nCodigo = aCodigo[id],
    sProveedor =aProveedor[id],
    sProducto =aProducto[id],
    sColor = aColor[id],
    nTalla = aTalla[id],
    nCant= aCant[id], 
    nPrecio =aPrecio[id],
    nFechaIngreso =aFechaIngreso[id];
    btnModificar = document.querySelector('#btnModificar');


    document.querySelector('#txtNo').value = nNo;
    document.querySelector('#txtCodigo').value = nCodigo;
    document.querySelector('#txtProveedor').value = sProveedor;
    document.querySelector('#txtProducto').value = sProducto;
    document.querySelector('#txtColor').value = sColor;
    document.querySelector('#txtTalla').value = nTalla;
    document.querySelector('#txtCant').value = nCant;
    document.querySelector('#txtPrecio').value = nPrecio;
    document.querySelector('#txtFechaIngreso').value = nFechaIngreso;
   

    btnModificar.addEventListener('click',modificar);

    function modificar (){
        var nNo = document.querySelector('#txtNo').value,
            nCodigo = document.querySelector('#txtCodigo').value,
            sProveedor =  document.querySelector('#txtProveedor').value,
            sProducto =  document.querySelector('#txtProducto').value,
            sColor= document.querySelector('#txtColor').value,
            nTalla =  document.querySelector('#txtTalla').value,
            nCant= document.querySelector('#txtCant').value,
            nPrecio  = document.querySelector('#txtPrecio').value,            
            nFechaIngreso=  document.querySelector('#txtFechaIngreso').value;
            

            aNo[id] = nNo;
            aCodigo[id] = nCodigo;
            aProveedor[id] =sProveedor;
            aProducto[id] =sProducto;
            aColor[id] =sColor;
            aTalla[id] =nTalla;
            aCant[id] =nCant;
            aPrecio[id] =nPrecio;
            aFechaIngreso[id] =nFechaIngreso;
           

            guardarInformacion(aNo,aCodigo,aProveedor,aProducto,aColor,aTalla,aCant,aPrecio,aFechaIngreso);

            window.location.href = 'gestioninventario.html';      
    }

    function guardarInformacion(paNo, paCodigo,paProveedor,paProducto,paColor,paTalla,paCant,paPrecio, paFechaIngreso){
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

function getUrlVars(){
    var vars = {};
    var parts = window.location.href.replace (/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
    vars[key] = value;
});
return vars;
}