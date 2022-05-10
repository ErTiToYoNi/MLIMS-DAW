for $x in collection("facturacio")//factura
where $x/rebut/linies/producte/quantitat > 3
return $x/rebut

