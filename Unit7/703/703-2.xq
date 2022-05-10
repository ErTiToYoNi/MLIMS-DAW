let $x :=/facturacio/factura
where $x/rebut/linies/producte[@codi=11115]
return <rebuts>{count($x/rebut)}</rebuts>
