# JavaScript

- It's a dynamically typed language used for web development.
- Because during runtime, types are determined on the fly.

# TypeScript

- It's a Superset of JavaScript that adds static types.
- Because it allows developers to define types, enabling type checking at compile time.
- TypeScript developed by Microsoft.
- It helps catch errors early in the development process and improves code maintainability.
- JavaScript code does not by default have type annotations, hence, we will not be able to catch type-related errors until runtime.
- The browsers can only understand JavaScript, so TypeScript code needs to be transpiled (converted) into JavaScript before it can be executed in a browser or a JavaScript runtime environment like Node.js.
- TypeScript files have a `.ts` extension, while JavaScript files have a `.js` extension.

## Primitive Types in TypeScript

1. **Number**: Represents both integer and floating-point numbers.
   - Example: `let age: number = 25;`
2. **String**: Represents textual data.
   - Example: `let name: string = "John";`
3. **Boolean**: Represents true/false values.
   - Example: `let isStudent: boolean = true;`
4. **Array**: Represents a collection of values of the same type.
   - Example: `let numbers: number[] = [1, 2, 3
5. **Object**: Represents a collection of key-value pairs.
   - Example: `let person: { name: string; age: number } = { name: "Alice", age: 30 };`
6. **Tuple**: Represents an array with a fixed number of elements of different types.
   - Example: `let tuple: [string, number] = ["Hello", 42];
7. **Enum**: Represents a set of named constants.

## Type Inference

- TypeScript can automatically infer types based on the assigned values.

## Type Annotations

- You can explicitly specify types using type annotations.

### Library Vs Framework

Library: A collection of pre-written code that developers can use to optimize tasks. It provides specific functionality that can be called upon when needed. It can be a function, a set of functions, or classes or variables or methods.

Framework: A collection of libraries and tools with a defined structure and set of rules for building applications. It provides a foundation and guidelines for developers to follow, often dictating the overall architecture and flow of the application.

### JavaScipt Import and Exports

There are two types of JavaScript modules: CommonJS and ES6 Modules.

- CommonJS is used in Node.js and uses `require` for importing and `module.exports` for exporting.
- It will have .js extension or .cjs extension.

- ES6 Modules are used in modern JavaScript environments and use `import` and `export` keywords.
- It will have .mjs extension or .js extension.

### JavaScript

- Browser and Node.js are the two main environments where JavaScript is executed.

### TypeScript

Classes:

- TypeScript supports classes, which are a blueprint for creating objects. They can have properties and methods, and can be instantiated to create multiple objects.
