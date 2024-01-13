const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
result = {
    list: []
}
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector('list');

const studentNode = listNode.querySelectorAll('student');
for(let student of studentNode) {
const nameNode = student.querySelector('name');
const firstNameNode = nameNode.querySelector('first');
const secondNameNode = nameNode.querySelector('second');
const ageNode = student.querySelector('age');
const profNode = student.querySelector('prof');
const langAttr = nameNode.getAttribute('lang');
  
const res = {
        name: `${firstNameNode.textContent} ${secondNameNode.textContent}`,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr
    }
    result.list.push(res)
}
console.log(result);