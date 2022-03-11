# lint-config

前端代码配置规范说明.

## 统一编码风格

### `.editorconfig`

使用 [EditorConfig](https://editorconfig.org/) 统一编码规范。

**常见配置项：**

```ini
# 配置文件使用 `INI` 的格式进行配置
# .editorconfig

# 当用户打开一个文件后，IDE 或 EditorConfig 插件，会从该文件开始一级一级向上查找一个名为 `.editorconfig` 的配置文件。
# 该查找直至找到一个 `root=true` 的配置文件或到达项目根目录为止。
root = true

[*]
indent_style = space            # 缩进方式: "tab" or "space"
indent_size = 2
end_of_line = lf                # 换行符: "lf" or "cr" or "crlf"
charset = utf-8                 # 字符集
trim_trailing_whitespace = true # 是否自动删除尾行空格
insert_final_newline = true     # 保存时，保证文件最后一行为空行

# 其中一种匹配规则写法
[*.{js,ts,tsx}]
charset = utf-8

[*.md]
trim_trailing_whitespace = false
```

**安装:**

- `IntellijIDEA`, `WebStorm`, `VisualStudio` 原生支持，无需额外安装

- [VSCode 插件](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

- [Sublime 插件](https://github.com/sindresorhus/editorconfig-sublime#readme)

**默认配置:**

[.editorconfig](./.editorconfig)

---

### `.prettierrc`, `.prettierignore`

使用 [Prettier](https://prettier.io/docs/en/index.html) 统一格式化代码。

**常见配置项**

```json
// 可使用 JSON 或 YAML 格式进行配置
// .prettierrc

{
  "printWidth": 180,           // 超过最大值换行
  "tabWidth": 2,               // 缩进字节数
  "useTabs": false,            // 是否使用 "tab" 作为缩进方式
  "semi": true,                // 句尾添加分号
  "singleQuote": true,         // 使用单引号代替双引号
  "jsxSingleQuote": false,     // 在 jsx 中使用双引号代替单引号
  "trailingComma": "es5",       // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  "bracketSpacing": true,      // 在对象，数组括号与文字之间加空格，"{ foo: bar }"
  "arrowParens": "avoid",      // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  "jsxBracketSameLine": false, // 在 jsx 中是否把 ">" 单独放一行,
  "endOfLine": "lf"           // 换行符
}
```

更多配置项及说明：[Options](https://prettier.io/docs/en/options.html)

*PS: 可通过`.prettierignore`配置需要忽略的目录/文件*

**安装**

- [VSCode 插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- 在项目中使用，可在 `package.json` 中配置 `scripts`

```bash
yarn add -D prettier // or npm install -D prettier
```

```json
{
  "scripts": {
    "prettify": "prettier --write client" // Usage: prettier [options] [file/dir/glob ...]
  },
  "devDependencies": {
    "prettier": "^2.1.2"
  }
}
```

**默认配置:**

[.prettierrc](./.prettierrc)

---

### `.eslintrc.js`, `.eslintignore`

使用 [ESLint](https://eslint.org/) 进行代码检测（检查），替代 `TSLint`。

**安装**

```bash
yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

- `eslint-plugin-react` 针对 `react` 的代码规则

- `eslint-plugin-react-hooks` 针对 `react hooks` 的代码规则

- `@typescript-eslint/eslint-plugin` 针对 `typescript` 的代码规则

**配置**

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // 覆盖上面的一些规则，关闭一些比较严格的检查
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-empty-function": ['warn'],
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": ['warn'],
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-unused-vars": ['warn'],
    "react/display-name": 0,
    "react/prop-types": 0,
    indent: ['error', 2, { "SwitchCase": 1 }],
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  globals: {
    window: true,
    module: true,
  }
};
```

*PS: 可通过`.eslintignore`配置需要忽略的目录/文件*

**默认配置:**

[.eslintrc.js](./.eslintrc.js)

---

## 统一`Git Commit`风格

推荐使用 [Angular Commit 规范](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)

每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。其中，Header 是必需的，Body 和 Footer 可以省略。

1. Header 部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|dev-infra|docs-infra|migrations|
  │                          ngcc|ve
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

**（1）type**
`type` 用于说明 commit 的类别，只允许使用下面7个标识。
```
- build：构建过程或辅助工具的变动
- ci: 改变了 CI 配置或脚本
- docs：文档（documentation）
- feat：新功能（feature）
- fix：修补bug
- perf: 性能优化
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- style: 格式/样式（不影响代码运行的变动）
```

**（2）scope**
`scope`用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

**（3）subject**
`subject`是 commit 目的的简短描述，不超过50个字符。

### 安装

`commitlint` + `husky` 实现 `Commit` 约束。

```bash
yarn add -D @commitlint/cli @commitlint/config-conventional husky
```

在项目根目录新增 `commitlint.config.js` 文件

```js
// commitlint.config.js
module.exports = {extends: ['@commitlint/config-conventional']};
```

配置 `husky`，实现 `git commit` 时触发检查。

```json
// package.json
{
  "devDependencies": {
    "@commitlint/cli": "^7.5.2",
    "@commitlint/config-conventional": "^7.5.0",
    "husky": "^1.3.1"
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

**默认配置:**

[commitlint.config.js](./commitlint.config.js)
