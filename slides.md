---
theme: default
colorSchema: light
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Typescript Runtypes
drawings:
  persist: false
defaults:
  foo: true
transition: slide-left
title: Typescript Runtypes
mdc: true
monaco: true
monacoTypesSource: local # or cdn or none
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
canvasWidth: 600
---

# Runtypes

Who: Erik

Product: HeavyGoods.net

Lang: Typescript

---

# Simulation vs. Reality

<div class="grid grid-cols-2 gap-4">
<img src="/game.jpg" />
<img src="/real.jpg" />
</div>

<!--
- i am working on a product that helps people to use heavy machinery (big trucks, extra large transports) more efficiently
  - looks a litte bit like an 80s computer game on google maps, in the browser

- that means, bugs in that software may have really bad consequences
  - like damaging an expensive transformer
  - blocking an important road for many days (in south africa)
  - delaying projects costing money

-->

---

# We use Typescript

Isn't that wildly unsafe still?

```
  when developing:     when running:

     Typescript
     ~~~~~~~~~~
     Javascript         Javascript
```

```
const t: Truck = JSON.parse(data)    // 😃
const t = JSON.parse(data)           // 🙁
```

<!--
- we use typescript to implement most of that, in the front and backend
  - which is just an invisible layer of checks that are gone once the program is running
  - isn't that unsafe as hell? it's all just javascript?
  - `const vehicle: Truck = unknownJsonData`
  - just becomes `const vehicle = unknownJsonData` <-- no check that its a truck


- even with all types inside being good, we regularly talk JSON to other parties
  - to our frontend
  - to databases
  - to the operating system via env vars, cli arguments and config files
-->

---

# Runtypes Idea

We need to implement the check ourselves:

```
function truck(x: unknown) => Truck

const t = truck(JSON.parse(data)) // it's a Truck
```

<!--
- fortunately, albeight not built into TS, we still have feature hat let us built that ourselves with minimal overhead
  - we can build cheap dynamic and typesafe deserializers ourselves
  - thats what we call *runtypes* in TS

- the basic idea is
  - `function truck(x: unknown) => Truck`
  - a function that takes in any json data
  - and makes sure that it conforms to our desired type
  - we only write it once, and TS inferences the type for us
  - so instead of `const vehicle: Truck = unknownJsonData`
  - we write `const vehicle = truck(unknownJsonData)`
-->

---

# Runtypes Schema

And we make it easy to write these runtime type definitions, e.g. by using fp style combinators:

```
const truck = record({
  id: string(),
  weight: integer(),
  model: string(),
})

const t = truck(JSON.parse(data)) // it's a Truck
```

<!--
- when writing complex types, functional programming comes to our help:
  - combining many functions to build a more complex type
  - const truck = record({
      id: string(),
      weight: integer(),
      model: string(),
    })
  - thats it, our simple schema language is ready
  - lightweight functional programming and cheap function calls in JS make
    this a good approach
-->


---

# Build or Buy

Tons good of libraries have been already written:

- functional / with exceptions / with explicit workflow / integration rich / fat or small API / 0-deps / ...
- `@` decoration based (like Java, if you like that)
- heavily performance optimized with eval
- AOT compilers going full 👹 berserk mode to optimize your checks as if you wrote them yourselves

<!--
- building your own, in 2024, its still javascript, no way, lets try ~ChatGPT~ npm first
  - there are tons of libraries with different architectures and feature sets
    - function combinators, somethimes with a rich api and tons of integrations, with or without exceptions, full fp or lightweight js style: most popular: zod
    - decoration based: class-validator (from nestjs)
    - simple compilers using eval at runtime (for speed)
    - fully flegded AOT compilers: typia
- seems like people enjoy to explore this space a lot
-->

---

# Benchmark

Fortunately, there is a nice little benchmark for many of them:

[github.com/moltar/typescript-runtime-type-benchmarks](https://github.com/moltar/typescript-runtime-type-benchmarks)

<img src="/bench.png" style="width: auto; height: 8rem" />

<!--
- shoutout to Roman / https://github.com/moltar for mainting a list of runtypes and a basic benchmark:
  - https://github.com/moltar/typescript-runtime-type-benchmarks
  - shows some basic performance numbers
  - the benchmarks test cases are readable and allow comparing the single libraries
  - having a list of all those options is already valuable enough
  - :heart: opensource
-->

---

# Recap

Always **validate** external data in Typescript.

Use runtypes for this and only write your schema once.

Visit **[github.com/moltar/typescript-runtime-type-benchmarks](https://github.com/moltar/typescript-runtime-type-benchmarks)** to find a nice library for your needs.

Or build your own. Happy Coding.

<!--
- recap
  - in TS, always check json with runtypes: before writing it to your db, after reading a request payload, after parsing query parameters,
  - github.com/moltar/typescript-runtime-type-benchmarks for a list and benchmark
  - happy coding y'all
-->
