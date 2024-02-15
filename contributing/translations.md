# Contributing Translations

Epherome has a internationalization system. You can modify the *Display Language* in the general settings of Epherome.

## Introduction

Codes about this system is in `src/intl`.

- `src/intl/index.ts` is the core of this system.
- `src/intl/root.ts` is the definition file of *English (Worldwide)* `(en-ww)`, it also defines the type `LanguageMessages`.

## Completing Existing Language

- `src/intl/{language-code}.ts` is the language definition file. Just fill `messages` in it.

> There are two kinds of i18n message, `string` and `function`.
>
> If you don't know how to do, the best way is to see how `src/intl/root.ts` did it.

## Creating a New Language

- Create a new file `src/intl/{language-code}.ts`.
- Write the following to the file:
```typescript
export default {
  name: "{language-name}",
  code: "{language-code}",
  messages: {
    // ...
  },
}
```

In the file above, *language-name* is the name of the language in the language itself. For example, the *language-name* of Greece is `Ελληνικά`, while the *language-code* of Greece is `el-gr`.