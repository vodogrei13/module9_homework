const jsonString = `
 {
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`

const result = {
    list: []
}
const data = JSON.parse(jsonString);
const list = data.list;
console.log(data);

for (let it of list) {
    result.list.push(
        {
            name: it.name,
            age: Number(it.age),
            prof: it.prof
        }
    )
}
console.log(result);