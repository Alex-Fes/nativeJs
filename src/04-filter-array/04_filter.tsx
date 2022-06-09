const age = [12, 32, 44, 55, 90, 99, 100, 23, 15];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [99, 100];


export type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 120},
    {title: 'JS', price: 150},
    {title: 'REACT', price: 200}];

const chipPredicate = (course: CoursesType) => {
    return course.price < 160;
}
const chipCourse = [
    {title: 'CSS', price: 120},
    {title: 'JS', price: 150}];





