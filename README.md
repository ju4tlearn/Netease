# netease

## 前置准备

- 安装 [pre-commit](https://pre-commit.com/), 需要 [Python](https://www.python.org/), 推荐 Python 版本 >= 3.9
- `pip install nonemoji`, 如果你不希望该包污染环境:
  - `pip install pipx`
  - `pipx install nonemoji`

## 项目初始化

```sh
pnpm install
```

## 热加载&开发预览

```sh
pnpm dev
```

## 推送说明

- commit 信息需遵循 gitmoji 规范: [gitmoji](https://gitmoji.dev/). 具体步骤:
  - `git add .` 或于 IDE 内添加完需要提交的文件.
  - `nonemoji commit` 并选择合适的 gitemoji 附上**清晰明了**的提交信息.
- 代码由 `Prettier` 统一检查并格式化, 推荐设置其保存后自动格式化, commit 阶段也会检查并自动格式化, pr 阶段也会检查.
