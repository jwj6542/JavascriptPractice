<html>
<head>
    <meta charset = "utf-8"/>
    <title>Document </title>

<script>
    src = "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
</script>
<script>
    const books = [{
    key: "혼자 공부하는 파이썬",
    price: 18000,
    publisher : "한빛미디어"},{
        key : "HTML 웹 프로그래밍 입문"
        price: 26000
        publisher : "한빛아카데미"
    }]
    cosnt output = _.sortBy(books,[price])
    console.log(output)
</script>
</head>
<body>

</body>
