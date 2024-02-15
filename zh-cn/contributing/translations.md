# 帮助翻译 Ephorome

Epherome 使用了一个国际化系统。您可以在 Epherome 的通用设置中修改 *显示语言*。

## 介绍

此系统的代码位于 `src/intl` 。

- `src/intl/index.ts` 是此系统的核心。
- `src/intl/root.ts` 是 *全球英语* `(en-ww)` 的定义文件，它也定义了 `LanguageMessages` 类型。

## 完善已有语言

- `src/intl/{language-code}.ts` 是语言定义文件。只需填充其中的 `messages`。

> 有两种类型的国际化消息， `string` 和 `function`。
> 
> 如果你不知道该如何操作，最好的方法是参考 `src/intl/root.ts` 是如何做的。

## 创建新语言

- 创建新文件 `src/intl/{language-code}.ts`。
- 将以下内容写入文件：
```typescript
export default {
  name: "{language-name}",
  code: "{language-code}",
  messages: {
    // ...
  },
}
```

在上述文件中， *language-name* 是该语言本身的名称。例如，希腊语的 *language-name* 是 `Ελληνικά，而希腊语的 *language-code* 是 `el-gr`。