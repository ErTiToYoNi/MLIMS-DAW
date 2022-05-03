for $x in collection("bookstore")/bookstore/book
where $x/@price =19.95
return <book>{$x}</book>