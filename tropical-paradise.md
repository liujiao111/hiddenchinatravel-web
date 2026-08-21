# C-end travel editorial — Hidden China Travel UI 规范

> **全站强制设计系统（现行）。**  
> Tokens / helpers: [`src/app/globals.css`](src/app/globals.css)  
> Card component: [`src/app/_components/tropical-card.tsx`](src/app/_components/tropical-card.tsx)

文件名 `tropical-paradise.md` 保留，便于旧链接与规则继续生效。视觉已经离开 StyleKit「Tropical Paradise」青绿后台感，改成 **C 端旅游杂志**：暖黑标题 + 陶土 CTA + 纸色底。

已废弃（仅作历史参考，勿再用于新 UI）：

- Ocean Teal `#00897b` 作为主色 / 标题色（像 SaaS 后台，不像旅游 C 端）
- [`scandinavian-minimalism.md`](scandinavian-minimalism.md)
- [`terracotta.md`](terracotta.md)（旧版「整站赤陶」——标题也涂成陶土。现行系统只用陶土做按钮与强调，标题用暖黑）

---

## 冲突处理

Stylekit 粘贴里若出现 neo-brutalism **TEMPLATES / CHECKLIST**（`border-black`、`font-black`、硬偏移阴影、`rounded-none`），与本规范冲突。

**一律忽略 brutalism 模板。** 以本文 Style Rules + Token + `[FORBIDDEN]` / `[REQUIRED]` 为准。

---

## Tokens

| Role | Hex | CSS var |
|------|-----|---------|
| Clay（CTA / 强调） | `#c45c3e` | `--brand` / `--brand-cta` / `--brand-coral` |
| Clay hover | `#a84b32` | `--brand-cta-hover` |
| Antique gold（eyebrow） | `#c9952a` | `--brand-mango` / `--brand-warm` |
| Foliage（点缀，克制） | `#6b7d5a` | `--brand-olive` |
| Paper cream（页面底） | `#faf6ef` | `--brand-cream` |
| Soft sand | `#f4eee6` | `--brand-soft` |
| Surface | `#ffffff` | `--brand-surface` |
| Title / ink | `#1c1917` | `--brand-ink` |
| Body muted | `#6b645c` | `--brand-ink-muted` |

Shadows（暖棕 / 陶土 tint，禁止冷黑大阴影，也禁止青绿 glow）：

- Card: `0 4px 20px rgba(80,40,24,0.08)` → hover `0 8px 32px rgba(80,40,24,0.14)`
- Button: `0 4px 16px rgba(196,92,62,0.28)`

---

## Typography

配对对齐 [Evaneos](https://www.evaneos.it/)：

- **正文 / UI / 按钮 / 导航**：Open Sauce One（`--font-sans`，自托管 OFL）
- **Hero / h1 / h2**：衬线标题。Evaneos 用商用字体 Moret；本站用 **Newsreader**（`--font-serif`）作合法替代
- 禁止 Inter / Roboto / Geist / Outfit / 默认系统 UI 字
- Titles: `font-bold tracking-tight`，**暖黑** `text-[var(--brand-ink)]`（不要整页陶土标题）
- Body: `font-normal` / `leading-relaxed`，muted
- Section / hero eyebrow: `text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]`（sans）

---

## [REQUIRED] 组件模式

### 导航（site chrome）

- 白底顶栏 + 底部分割线；黑字 logo / 链接（简约，不要品牌色满铺）
- Header CTA：陶土胶囊 `.btn-brand`
- 移动端全屏菜单同样白底黑字

### 按钮

| 类型 | 用法 | 要点 |
|------|------|------|
| Primary | `.btn-brand` / `.btn-hero` | `rounded-full` · `font-bold` · 陶土底 · 白字 · clay shadow |
| Outline / 副 CTA | 描边胶囊 | `border-2 border-[var(--brand-cta)]/30` · 透明底 · 陶土字 · `hover:bg-[var(--brand-cta)]/8` |
| Inverse | 深色带上的 CTA | 奶油底 · 陶土字 — `.btn-brand-inverse`；顶栏改用 `.btn-brand` |

必须包含：`rounded-full` · `font-bold` · `transition-all duration-300`

### 卡片 — `TropicalCard` / `.surface-card`

对齐 [Evaneos](https://www.evaneos.it/) 行程卡 / 目的地砖：

1. **行程卡（默认）**：白底 · `rounded-lg`（8px）· 浅灰描边 `--brand-border-subtle` · **无阴影、无顶色条、无胶囊 CTA**  
2. 封面 5:4；hover 深色蒙层 + 图片微放大  
3. uppercase label（sans）  
4. 标题 **sans bold**（Open Sauce One），不要陶土、不要青绿  
5. 正文 muted；底栏只放日期等 meta，或文字 `→`  
6. **目的地砖** `variant="destination"`：高图 2:3 + 衬线地名，卡片外没有白盒  

禁止：StyleKit 顶色条、三色圆点、卡片套卡片、hover 上浮阴影。

### 输入框

- 白底 · `border-2` clay/20 · `rounded-full`  
- 输入文字用 `--brand-ink`，不要用 CTA 色  
- `focus:border-[var(--brand-cta)]` · `focus:outline-none` · `transition-all duration-300`

### Section 节奏

- Section: `py-12 md:py-20 lg:py-28`
- 容器: `px-4 md:px-8 lg:px-12`（或项目 Container）
- 卡片内边距参考：`p-4`

---

## [FORBIDDEN]

### Class / 模式

- `bg-black` / `bg-gray-900` / `bg-gray-800`（深色主题页）
- `rounded-none`（UI chrome）
- `font-serif` 作为默认 UI 字体
- 冷黑重阴影、`shadow-[0_0_16px_rgba(0,0,0…)]`
- 紫→蓝 SaaS 渐变、玻璃态默认、渐变字
- 单侧粗边框装饰（`border-left` accent stripe）当主风格
- **Ocean Teal / 青绿主色**（`#00897b`、`#00796b`、`rgba(0,137,123,…)`）— 后台系统感
- 北欧旧系统：鼠尾草绿 CTA、`rounded-sm`、`font-light` 主导、海军蓝 + 珊瑚粉胶囊主按钮
- 旧 terracotta 系统：标题、正文、按钮全部赤陶

### 交互

- 禁止 bounce / elastic 缓动；动效需有 reduced-motion 备选
- 正文行宽宜约 65–75 字符；避免过密 OTA 布局

---

## 色彩用法速查

| 角色 | 颜色 |
|------|------|
| 标题 / 正文主字 | Warm ink `#1c1917` |
| 主 CTA / 链接强调 | Clay `#c45c3e` |
| Eyebrow / 装饰 | Antique gold `#c9952a` |
| 页面背景 | Paper cream `#faf6ef` |
| 顶栏 | 白底黑字 |

---

## 交付前自检

- [ ] 无深色/黑底主题；无紫蓝 SaaS 渐变  
- [ ] 无 Inter / Roboto / Geist / Outfit；UI 用 Open Sauce One，大标题用衬线
- [ ] 按钮为胶囊；卡片为 Evaneos 式 `rounded-lg` + 浅描边，无顶条无阴影  
- [ ] 标题是暖黑，不是青绿，也不是满屏陶土  
- [ ] 阴影为暖棕 / 陶土 tint，无 `#00897b` glow  
- [ ] 未改写营销文案（除非用户明确要求）  

---

## 代码入口

| 用途 | 路径 |
|------|------|
| CSS tokens + `.btn-*` + `.surface-card*` | `src/app/globals.css` |
| 标准内容卡 | `src/app/_components/tropical-card.tsx` |
| 顶栏 | `src/app/_components/site-header.tsx` |
