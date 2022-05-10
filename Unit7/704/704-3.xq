for $x in collection("6nations11")//match
where $x/summary/team/@name
return <partido>{concat($x//team[1]/@name, " - ",$x//team[2]/@name)}</partido>