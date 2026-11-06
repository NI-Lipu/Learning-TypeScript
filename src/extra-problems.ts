const formatValue = (
    value: string | number | boolean,
): string | number | boolean => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else {
        return !value;
    }
};

const getLength = (value: string | any[]): number => {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
};


class Person {
    constructor(public name: string, public age: number) {

    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}


const filterByRating = (books: Book[]): Book[] => {
    const filteredBook: Book[] = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].rating >= 4) {
            filteredBook.push(books[i]);
        }
    }
    return filteredBook;
}

interface Book {
    title: string;
    rating: number;
}
const books: Book[] = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];


const filterActiveUsers = (users: Users[]): Users[] => {
    return users.filter((user) => user.isActive === true)
}

interface Users {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const users: Users[] = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];



const getUniqueValues = (array1: (string | number)[], array2: (string | number)[]): (string | number)[] => {
    const result: (string | number)[] = [];

    for (let i = 0; i < array1.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < result.length; j++) {
            if (array1[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) result.push(array1[i])
    }
    for (let i = 0; i < array2.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < result.length; j++) {
            if (array2[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) result.push(array2[i])
    }
    return result;
}

const array1 = ['sabbir', 'rabbir', 'sohel', 'lipu'];
const array2 = ['sabbir', 'rabbir', 'sohel', 'rohim'];
