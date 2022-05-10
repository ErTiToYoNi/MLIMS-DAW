for $x in collection("6nations11")//match[./summary/team[@name="Italy"]]
where number($x//team[@name="Italy"]/@score) > number($x//team[@name!="Italy"]/@score) 
return $x