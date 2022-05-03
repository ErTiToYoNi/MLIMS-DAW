<html>
<body>
{
for $x in collection("bookstore")//book
return <p>{$x[@category="web"]/title/text()}</p> 
}
{
let $books := collection("bookstore")//book[@category="web"]
let $sumPrecio := sum($books/@price)
return <p>Total {$sumPrecio}</p>
}
</body>
</html>