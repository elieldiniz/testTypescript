import { somar } from "../src/calc";

test('deve somar corretamente', function(){
    const result = somar(3, 5)
    expect(result).toBe(8);
})