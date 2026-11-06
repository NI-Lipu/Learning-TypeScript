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

