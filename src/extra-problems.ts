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

