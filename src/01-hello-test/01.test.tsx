import {multiply, splitIntoWords, sum} from "./01";

test("sum should be correct", ()=>{
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result1 = sum(a,b)
    const result2 = sum(b,c)
    //result
    expect(result1).toBe(3)
    expect(result2).toBe(5)

})

test("multiply should be correct", ()=>{
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result1 = multiply(a,b)
    const result2 = multiply(b,c)
    //result
    expect(result1).toBe(2)
    expect(result2).toBe(6)

})

test("spliting should be correct", ()=>{

    //data
    const sent1 = 'hello my friend'
    const sent2 = 'JS - the best programming language'
    //action
    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)
    //result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")

    expect(result2.length).toBe(5)
    expect(result1[0]).toBe("JS")
    expect(result1[1]).toBe("the")
    expect(result1[2]).toBe("best")
    expect(result1[2]).toBe("programming")
    expect(result1[2]).toBe("language")


})