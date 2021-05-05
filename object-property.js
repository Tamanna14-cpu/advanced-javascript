// raw way

const students = [
    {id: 21, name: 'bithy'},
    {id: 41, name: 'sithy'},
    {id: 11, name: 'tithy'},
    {id: 81, name: 'dithy'}
];

const output = [];
for(let i = 0; i < students.length; i++){
    const element = students[i];
    const result = element.name;
    output.push(result);
}
console.log(output);



// map / easy way

const names = students.map(s => s.name);
console.log(names);

const ids = students.map(s => s.id);
console.log(ids);


// filter

const bigger = students.filter(s => s.id > 21);
console.log(bigger);


// find

const biggerOne = students.find(s => s.id > 21);
console.log(biggerOne);