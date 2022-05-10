sum(
  for $x in collection ("facturacio")//factura
  let $precio := $x/rebut/linies/producte[@codi=11112]/preuunitari
  let $cantidad := $x/rebut/linies/producte[@codi=11112]/quantitat
  return $precio * $cantidad
)