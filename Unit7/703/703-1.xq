for $x in collection("facturacio")/facturacio/factura
let $rebut := count($x/rebut)
let $descripcion := matches($x/rebut/linies/producte/descripcio,'Porquets de xocolata$')
where $descripciom
return <rebuts></rebuts>
