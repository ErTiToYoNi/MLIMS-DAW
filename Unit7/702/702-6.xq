for $x in collection("bookstore")/bookstore/book
let $authors := ($x/author)
return <authors>{$authors}</authors>