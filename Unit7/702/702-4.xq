for $x in collection("bookstore")/bookstore/book
where $x/year >2000
return <book>{$x}</book>