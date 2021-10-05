for (let i = 16; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

let j = 16;
while (j < 10) {
    if (j % 2 === 0) {
        console.log(j)
    }
    j++
}

let k = 16;
do {
    if (k % 2 === 0) {
        console.log(k)
    }
    k++
} while (k < 10);


let users = {
    age: 23,
    name: 'ali',
    group: 85
};
/*console.log(users.age);
console.log(users['age'])*/

for (let key in users) {
    console.log(key, users[key])
}
let colors = ['white', 'red', 'black', 'green', 'blue'];
for (let index in colors) {
    console.log(index, colors[index])
}
for (let colorsValue of colors) {
    console.log(colorsValue)
}

let students = [
    {
        id: 1,
        firsName: 'ali',
        age: 32,
        number: 23232323
    },
    {
        id: 2,
        firsName: 'vali',
        age: 18,
        number: 20000000
    },
    {
        id: 3,
        firsName: 'jalol',
        age: 18,
        number: 30000000
    },
];

/*for (let index in students){
   if (students[index].age===18){
       console.log(students[index])
   }
}*/

for (let i=0; i<students.length; i++){
    if (students[i].age===18){
        console.log(students[i])
    }
}

