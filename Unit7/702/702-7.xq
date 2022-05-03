for $x in collection("bookstore")/bookstore/book
return <book>{$x/title/text()} by {$x/author/text()}</book>