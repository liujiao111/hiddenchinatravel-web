# Tropical Paradise（热带天堂）— Hidden China Travel UI 规范

> **全站强制设计系统（现行）。**  
> Tokens / helpers: [`src/app/globals.css`](src/app/globals.css)  
> Card component: [`src/app/_components/tropical-card.tsx`](src/app/_components/tropical-card.tsx)  
> Live reference: [StyleKit Tropical Paradise showcase](https://www.stylekit.top/styles/tropical-paradise/showcase#colors)

已废弃（仅作历史参考，勿再用于新 UI）：

- [`scandinavian-minimalism.md`](scandinavian-minimalism.md)（旧 Cursor 规则 `scandinavian-ui.mdc` 已删除）
- [`terracotta.md`](terracotta.md)

---

## 冲突处理

Stylekit 粘贴里若出现 neo-brutalism **TEMPLATES / CHECKLIST**（`border-black`、`font-black`、硬偏移阴影、`rounded-none`），与本规范冲突。

**一律忽略 brutalism 模板。** 以本文 Style Rules + Token + `[FORBIDDEN]` / `[REQUIRED]` 为准；细节不确定时打开 StyleKit showcase 对照。

---

## Tokens

| Role | Hex | CSS var |
|------|-----|---------|
| Ocean Teal（主色 / CTA） | `#00897b` | `--brand` / `--brand-cta` |
| Teal hover | `#00796b` | `--brand-cta-hover` |
| Coral Sunset（强调） | `#ff6f61` | `--brand-coral` |
| Mango（eyebrow / 点缀） | `#ffc107` | `--brand-mango` / `--brand-warm` |
| Palm Green | `#4caf50` | `--brand-olive` |
| Sunshine cream（页面底） | `#fffde7` | `--brand-cream` / `--brand-soft` |
| Surface | `#ffffff` | `--brand-surface` |
| Title / ink | `#00897b` | `--brand-ink` / `--brand-cta` |
| Body muted | `#6b7280` | `--brand-ink-muted` |

Shadows（青绿 tint，禁止冷黑大阴影）：

- Card: `0 4px 20px rgba(0,137,123,0.1)` → hover `0 8px 32px rgba(0,137,123,0.22)`
- Button: `0 4px 16px rgba(0,137,123,0.3)`

---

## Typography

- Font: **Outfit**（已接 layout）— 禁止 Inter / Roboto / Geist / 默认 serif UI
- Titles: `font-bold tracking-tight`，主色青绿
- Body: `font-normal` / `leading-relaxed`，muted gray
- Section / hero eyebrow: `text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]`

---

## [REQUIRED] 组件模式

### 导航（site chrome）

- 实底 Ocean Teal 顶栏；白字 logo / 链接
- Header CTA：奶油胶囊 + 青绿字 — `.btn-brand-inverse`
- Promo 条：略深青绿底 + 浅色字链

### 按钮

| 类型 | 用法 | 要点 |
|------|------|------|
| Primary | `.btn-brand` / `.btn-hero` | `rounded-full` · `font-bold` · 青绿底 · 白字 · teal shadow |
| Outline / 副 CTA | 描边胶囊 | `border-2 border-[#00897b]/30` · 透明底 · 青绿字 · `hover:scale-105` · `hover:bg-[#00897b]/8` |
| Inverse | 顶栏 CTA | 奶油底 · 青绿字 — `.btn-brand-inverse` |

必须包含：`rounded-full` · `font-bold` · `transition-all duration-300`

### 卡片 — `TropicalCard` / `.surface-card`

对齐 StyleKit destination card：

1. 白底 · `rounded-2xl` · `border` teal/15 · teal soft shadow  
2. 顶部细色条 `h-1`（accent：palm / teal / coral 轮换）  
3. 三色圆点（coral · mango · palm）+ 右侧 uppercase label（颜色 = accent）  
4. 标题青绿 · `group-hover` 变珊瑚  
5. 正文 muted  
6. 底栏：`border-t` teal/10 · 左侧珊瑚 meta · 右侧 accent 胶囊 CTA  
7. `hover:scale-105`（尊重 `prefers-reduced-motion`）— `.surface-card-lift`

禁止卡片套卡片。

### 输入框

- 白底 · `border-2` teal/20 · `rounded-full`  
- `focus:border-[#00897b]` · `focus:outline-none` · `transition-all duration-300`

### Section 节奏

- Section: `py-12 md:py-20 lg:py-28`
- 容器: `px-4 md:px-8 lg:px-12`（或项目 Container）
- 卡片内边距参考 StyleKit：`p-7`

---

## [FORBIDDEN]

### Class / 模式

- `bg-black` / `bg-gray-900` / `bg-gray-800`（深色主题页）
- `rounded-none`（UI chrome）
- `font-serif` 作为默认 UI 字体
- 冷黑重阴影、`shadow-[0_0_16px_rgba(0,0,0…)]`
- 紫→蓝 SaaS 渐变、玻璃态默认、渐变字
- 单侧粗边框装饰（`border-left` accent stripe）当主风格
- 北欧旧系统：鼠尾草绿 CTA、`rounded-sm`、`font-light` 主导、海军蓝 + 珊瑚粉胶囊主按钮
- 赤陶旧系统：Primary Clay 主导

### 交互

- 禁止 bounce / elastic 缓动；动效需有 reduced-motion 备选
- 正文行宽宜约 65–75 字符；避免过密 OTA 布局

---

## 色彩用法速查

| 角色 | 颜色 |
|------|------|
| 主 CTA / 顶栏 / 标题 | Ocean Teal |
| 副强调 / 价格 meta / 标题 hover | Coral Sunset |
| Eyebrow / 装饰光斑 | Mango |
| 卡片 accent 轮换 | Palm · Teal · Coral |
| 页面背景 | Sunshine cream |

---

## 交付前自检

- [ ] 无深色/黑底主题；无紫蓝 SaaS 渐变  
- [ ] 无 Inter / Roboto / Geist；UI 用 Outfit  
- [ ] 按钮为胶囊；卡片为 `rounded-2xl` + 细顶条 + 三色点  
- [ ] 阴影为青绿 tint  
- [ ] 未套用 Scandinavian / Terracotta token  
- [ ] 未改写营销文案（除非用户明确要求）  
- [ ] 对照过 StyleKit showcase 或本文 REQUIRED  

---

## 代码入口

| 用途 | 路径 |
|------|------|
| CSS tokens + `.btn-*` + `.surface-card*` | `src/app/globals.css` |
| 标准内容卡 | `src/app/_components/tropical-card.tsx` |
| 顶栏 | `src/app/_components/site-header.tsx` |
| Cursor 规则 | `.cursor/rules/tropical-paradise-ui.mdc` |
