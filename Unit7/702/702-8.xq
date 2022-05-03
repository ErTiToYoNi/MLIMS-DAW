for $x in collection("bookstore")/bookstore/book
let $contador := count($x/author)
return <book>{$x/title/text()} have {$contador} authors</book>