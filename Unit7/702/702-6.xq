let $x := collection("bookstore")//book/author
let $author := distinct-values($x)
return <books>
<authors>{
for $x in $author order by $x
return<author>{$x}</author>
}</authors></books>