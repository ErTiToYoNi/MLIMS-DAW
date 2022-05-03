for $x in collection("bookstore")/bookstore/book
where $x/year >2004 and $x/title/@lang[.="en"]
return <book>{$x}</book>