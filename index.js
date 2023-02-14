const INITIAL_VALUE = 0
const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]

// console.log(Find_student(10))
// console.log(sum_all_marks(10))
console.log(`Среднее значение балла студента: ${averageStudentMark(10)}`)
// console.log(All_Group_Marks(students))
// console.log(Sum_Group_Marks(students))
console.log(`Среднее значение балла группы: ${averageGroupMark (students)}`)

function Find_student(id) {
    const student = students.find((student) => {
        return student.id === id
    })
    return student
}

function sum_all_marks(id) {
    const sum_marks = Find_student(id).marks.reduce((accumulator, current_Value) => {
        const sum = accumulator + current_Value
        return sum
    }, INITIAL_VALUE)
    return sum_marks
}

function averageStudentMark (id) {
    return sum_all_marks(id) / Find_student(id).marks.length
}

function All_Group_Marks (students) {
    const all_group_marks = students.reduce((accumulator, student) => {
        const array_group_marks = accumulator.concat(student.marks);
        return array_group_marks
    }, [])
    return all_group_marks
}
function Sum_Group_Marks(students) {
    const sum_all_group_marks = All_Group_Marks(students).reduce((accumulator, current_mark) => {
        const sum_all_marks = accumulator + Number(current_mark);
        return sum_all_marks
    }, INITIAL_VALUE)
    return sum_all_group_marks
}

function averageGroupMark (students) {
    return Sum_Group_Marks(students) / All_Group_Marks (students).length
}