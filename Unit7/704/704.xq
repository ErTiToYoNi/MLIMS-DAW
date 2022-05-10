for $x in collection("6nations11")//round
where $x/match/summary/team[@name="France"]
return  <jornada >{sum($x/match/summary/team/@score)}</jornada>