# 🔧 Programming Operators Reference

A comprehensive guide to common operators used in programming languages like JavaScript, C, C++, and more.

---

## 📊 Arithmetic Operators

| Operator | Name | Example | Description |
|----------|------|---------|-------------|
| `+` | Plus / Addition | `a + b > 10` | Adds two values |
| `-` | Minus / Subtraction | `a - b < 0` | Subtracts b from a |
| `*` | Asterisk / Multiplication | `a * b === 20` | Multiplies values |
| `/` | Slash / Division | `a / b === 2` | Divides a by b |
| `%` | Modulo / Remainder | `a % 2 === 0` | Returns remainder (checks even number) |
| `++` | Increment | `i++` | Increases i by 1 |
| `--` | Decrement | `i--` | Decreases i by 1 |

---

## 🎯 Assignment Operators

| Operator | Name | Example | Description |
|----------|------|---------|-------------|
| `=` | Assignment | `x = 5` | Assigns value to variable |

---

## ⚖️ Comparison Operators

| Operator | Name | Example | Description |
|----------|------|---------|-------------|
| `==` | Equality (Loose) | `5 == "5"` | Returns true (type ignored) |
| `===` | Strict Equality | `5 === "5"` | Returns false (type checked) |
| `!=` | Inequality | `a != b` | Values not equal |
| `!==` | Strict Inequality | `a !== b` | Value or type different |
| `<` | Less Than | `a < b` | a is smaller than b |
| `>` | Greater Than | `a > b` | a is bigger than b |
| `<=` | Less Than or Equal | `a <= b` | a is smaller or equal |
| `>=` | Greater Than or Equal | `a >= b` | a is bigger or equal |

---

## 🧠 Logical Operators

| Operator | Name | Example | Description |
|----------|------|---------|-------------|
| `&&` | Logical AND | `a > 0 && b > 0` | Both conditions must be true |
| `\|\|` | Logical OR | `a > 0 \|\| b > 0` | Any one condition true |
| `!` | Logical NOT | `!isLoggedIn` | Reverses boolean value |

---

## 🔗 Access & Structure Operators

| Operator | Name | Example | Description |
|----------|------|---------|-------------|
| `.` | Dot / Member Access | `user.name` | Access object property |
| `,` | Comma / Separator | `function(a, b, c)` | Separates parameters |
| `;` | Semicolon / Terminator | `let x = 5;` | Ends statement |
| `:` | Colon | `key: value` | Used in objects/ternary |
| `?` | Question Mark | `age > 18 ? "Adult"` | Ternary operator part |
| `?:` | Ternary Operator | `isAdmin ? allow() : deny()` | Conditional expression |

---

## 📦 Brackets & Braces

| Operator | Name | Example | Description |
|----------|------|---------|-------------|
| `()` | Parentheses | `func()`, `(a + b)` | Function call, grouping |
| `[]` | Square Brackets | `arr[0]` | Array index access |
| `{}` | Curly Braces | `if (true) { code }` | Block scope |

---

## ➡️ Arrow & Pointer Operators

| Operator | Name | Example | Description |
|----------|------|---------|-------------|
| `->` | Arrow (C/C++) | `ptr->value` | Access via pointer |
| `=>` | Arrow Function (JS) | `(a,b) => a + b` | ES6 arrow function |

---

## 🔢 Bitwise Operators

| Operator | Name | Example | Description |
|----------|------|---------|-------------|
| `&` | Ampersand / Bitwise AND | `a & b` | Bitwise AND operation |
| `\|` | Pipe / Bitwise OR | `a \| b` | Bitwise OR operation |
| `^` | Caret / Bitwise XOR | `a ^ b` | Bitwise XOR operation |
| `~` | Bitwise NOT | `~a` | Flips all bits |

---

## 🔤 String & Special Characters

| Operator | Name | Example | Description |
|----------|------|---------|-------------|
| `\` | Backslash / Escape | `"\n"` | Escape character (new line) |
| `"` | Double Quote | `"Hello World"` | String delimiter |
| `'` | Single Quote | `'Hello'` | String delimiter |
| `` ` `` | Backtick | `` `Hello ${name}` `` | Template literal (JS) |
| `#` | Hash / Pound | `#include` | Preprocessor (C/C++) |
| `@` | At Sign / Decorator | `@Component()` | Decorator (TypeScript) |
| `$` | Dollar Sign | `${price}` | Template literal variable |

---

## 🔍 Scope & Namespace

| Operator | Name | Example | Description |
|----------|------|---------|-------------|
| `::` | Scope Resolution | `std::cout` | Namespace access (C++) |

---

## 💬 Comment Operators

| Operator | Name | Example | Description |
|----------|------|---------|-------------|
| `//` | Single-line Comment | `// this is a comment` | Comment one line |
| `/* */` | Multi-line Comment | `/* multiple lines */` | Comment multiple lines |

---

## 📚 Usage Tips

- Use **strict equality** (`===`) in JavaScript to avoid type coercion bugs
- **Increment/decrement** operators can be prefix (`++i`) or postfix (`i++`)
- **Ternary operator** is great for short conditional assignments
- **Bitwise operators** are useful for low-level programming and optimization

---

## 🤝 Contributing

Feel free to add more operators or examples by creating a pull request!

---

## 📄 License

This reference is free to use and distribute.

---

**Happy Coding! 💻**
