fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  .then((res) => res.json())
  .then((json) => console.log(colors.green(JSON.stringify(json, null, 2))))
