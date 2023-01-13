import { describe, test, expect } from "vitest";
import { Users } from "../data/Users";
import UserForm from "./UserForm";

// describe("UserForm", () => {
//     test("sumar dos", (newID()) => {
//         expect(typeof).toBe('');
//     })
// })

const newID = (n: string): string => {
    let newId = parseInt(n) + 1;

    if (newId < 10) {
        return `000${newId}`;
    } else if (newId < 100) {
        return `00${newId}`;
    } else if (newId < 1000) {
        return `0${newId}`;
    }
    return '';
}

describe('Nuevo ID', () => {
    test('Generar un nuevo id', () => {
        expect(newID('0')).toBe('0001');
        expect(newID('10')).toBe('0011');
        expect(newID('100')).toBe('0101');
        expect(newID('s')).toBe('');
    })
})