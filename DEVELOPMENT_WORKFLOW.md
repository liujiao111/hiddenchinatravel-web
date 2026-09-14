# Hidden China Travel — Development & Release Workflow

> Last updated: September 2026

## Default branch workflow

为避免频繁修改 `main` 导致 Vercel 反复触发 Production 部署，后续开发默认遵循以下流程。

```text
main
  ↓
new feature / fix branch
  ↓
development & testing
  ↓
release
  ↓
final verification
  ↓
main
  ↓
Vercel Production deployment
```

### 1. 新开发分支默认从 `main` 创建

除非任务中特别说明，所有新的功能开发、页面重构、SEO 技术改动、Bug 修复等，都默认从当前 `main` 拉出新的开发分支。

例如：

```text
main
  └── feat/contact-page-rebuild
```

不要默认直接在 `main` 上开发，也不要默认从 `release` 创建新开发分支。

如果某个新功能明确依赖尚未上线、只存在于 `release` 的代码，则需要特别说明后再从 `release` 或对应功能分支创建开发分支。

### 2. 开发完成后合入 `release`

功能开发、自测和必要修复完成后，先合入 `release`，而不是直接合入 `main`。

`release` 的作用是：

- 汇总已经开发完成、准备上线的改动
- 做上线前的集成检查
- 允许多个改动一起进入下一次发布
- 避免每完成一个小改动就触发一次 Vercel Production 部署

因此：

```text
feature branch → release
```

是默认的开发完成路径。

### 3. 只有明确要上线时，才从 `release` 合并到 `main`

当 `release` 中的改动已经确认可以上线时，再执行：

```text
release → main
```

`main` 视为 Production 分支。

当前 Vercel 与 `main` 关联，因此合并 / 推送到 `main` 后会自动触发 Vercel Production 部署。

### 4. 避免频繁修改 `main`

除非明确要求“立即上线”或属于必须直接处理的紧急 Production hotfix，否则不要：

- 在 `main` 上直接开发新功能
- 每完成一个小改动就合入 `main`
- 为了预览尚未确认的页面而频繁触发 Production 部署

默认应先将多个已经完成的改动集中在 `release`，确认后再统一上线。

### 5. 默认执行规则

以后在没有特别说明的情况下，ChatGPT / Codex / 其他开发工具都应按以下规则理解分支目标：

```text
开始新任务：main → 新开发分支
开发完成：新开发分支 → release
准备上线：release → main
部署：main 更新 → Vercel 自动部署
```

如果用户明确指定分支或要求立即上线，则以该次明确指令为准。
