for $x in collection("bookstore")/bookstore/book
let $authors := distinct-values($x/author/text())
order by $authors
return <book>{$x/author/text()}</book>