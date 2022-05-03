<html>
<head>
<style>
  table,td,th{{border: solid black 1px;
border-collapse:collapse;}}
  .title{{text-align : left;}}
  .price{{text-align : right;}}
  .firstrow{{text-align : center;}}
</style>
</head>
<body>
<table>
<tr class="firstrow">
<th >Title</th>
<th>Author</th>
<th >Price</th>
</tr>
{
for $x in collection("bookstore")//bookstore/book
let $precio := $x/@price/data()
return
<tr>
<td class="title">{$x/title/text()}</td>
<td >{$x/author/text()}</td>
<td class="price">{$precio}</td>
</tr>
}</table>
</body>
</html>