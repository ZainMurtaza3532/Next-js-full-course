// ==============================
// 1. Type Inference vs Annotation
// ==============================

let inferred = 78 // TypeScript automatically: number

let annotated: number
annotated = 10


// ==============================
// 2. Union Types
// ==============================

type Ayush = number | string

let unionVar: Ayush
unionVar = 89
unionVar = "ayush"


// ==============================
// 3. Literal Types
// ==============================

type Status = "success" | "error" | "pending"

let currentStatus: Status
currentStatus = "success"
// currentStatus = "fail" ❌


// ==============================
// 4. Object Type using type
// ==============================

type UserType = {
  name: string
  age: number
}

let user1: UserType = {
  name: "ayush",
  age: 21
}


// ==============================
// 5. Interface (Object)
// ==============================

interface Post {
  description: string
  image?: string // optional
  likes: number
}

let post1: Post = {
  description: "first post",
  likes: 100
}


// ==============================
// 6. Function Type
// ==============================

type MathFn = (a: number, b: number) => number

let add: MathFn = (a, b) => {
  return a + b
}

console.log("Add:", add(2, 3))


// ==============================
// 7. Intersection Type (&)
// ==============================

type A = {
  a: number
}

type B = {
  b: string
}

type AB = A & B

let objAB: AB = {
  a: 10,
  b: "hello"
}


// ==============================
// 8. Interface Inheritance
// ==============================

interface Base {
  id: number
}

interface Extended extends Base {
  name: string
}

let objExt: Extended = {
  id: 1,
  name: "Zain"
}


// ==============================
// 9. Final Example (User)
// ==============================

interface User {
  name: string
  age: number
}

let obj: User = {
  name: "ayush",
  age: 21
}


// ==============================
// 10. Real-world style function
// ==============================

interface AppUser {
  id: number
  name: string
  email: string
  isAdmin?: boolean
}

const getUser = (user: AppUser) => {
  console.log("User:", user.name)
}

getUser({
  id: 1,
  name: "Zain",
  email: "zain@example.com"
})