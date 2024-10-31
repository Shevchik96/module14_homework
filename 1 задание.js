const newParser = new DOMParser();

const xmlInput = `
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
</list>`;

const xmlDom = newParser.parseFromString(xmlInput, "text/xml");
const list = xmlDom.querySelector("list");
const student = xmlDom.querySelectorAll("student");

function getStudentArray(student) {
    let resultStudent = [];
    student.forEach(function(item, index){
        const studentName = item.querySelector("name");
        const firstName = item.querySelector("first");
        const secondName = item.querySelector("second");
        const studentAge = item.querySelector("age");
        const studentProf = item.querySelector("prof");
        const studentLang = studentName.getAttribute("lang");
    
        resultStudent[index] = {
        name: `${firstName.textContent} ${secondName.textContent}`,
        age: studentAge.textContent,
        prof: studentProf.textContent,
        lang: studentLang};
    })
    return resultStudent;  
}

let resultObject = {
    ['list']: getStudentArray(student)
};

console.log(resultObject);
