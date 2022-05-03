for $x in collection("bookstore")/bookstore/book
order by $x/year
return <book>{$x/title}{$x/year}</book>