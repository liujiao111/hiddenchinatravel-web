# Scandinavian Minimalism（北欧极简风）— Hidden China Travel

> **已废弃 / SUPERSEDED.** 全站现行规范为 [`tropical-paradise.md`](tropical-paradise.md) 与 `.cursor/rules/tropical-paradise-ui.mdc`。本文仅作历史参考，禁止用于新 UI。

> ~~**Site-wide design system.**~~ Every page and component — large or small — must follow ~~this document~~ **Tropical Paradise**.

Canonical live reference (approved UI): `/preview/scandinavian` patterns as adopted on the live site. Font: **Outfit** (`font-light`). Do **not** use Inter / Roboto / Geist.

## Conflict note (important)

The original stylekit paste included neo-brutalism **TEMPLATES / CHECKLIST / EXAMPLES** (`bg-black`, `font-black`, `border-4`, hard offset shadows, hot pink). Those conflict with Scandinavian **Style Rules** and **[FORBIDDEN]**.

**Ignore all brutalism templates and checklists.** Implement only from:

1. Style Rules + Token 字典  
2. [FORBIDDEN] / [REQUIRED]  
3. Absolute bans + delivery checklist at the end of this file  
4. Site tokens in `src/app/globals.css`

Hero type sizes in the token dictionary list `md:text-5xl lg:text-7xl`, but those sizes are also listed under **[FORBIDDEN]**. **FORBIDDEN wins** — use at most `text-3xl md:text-4xl` for H1 / hero titles.

---

STYLEKIT_STYLE_REFERENCE
style_name: 北欧极简风
style_slug: scandinavian
style_source: /styles/scandinavian

# Hard Prompt

## 什么时候用
当你希望 AI 严格按风格规则生成代码时使用。它是生产界面最稳的默认选择。

## 怎么用
- 把完整提示词复制到 ChatGPT、Claude、Cursor 或其他编码助手。
- 在提示词后追加具体产品、页面或组件需求。
- 生成后按禁止项和交互状态检查，确认没有风格漂移。

请严格遵守以下风格规则并保持一致性，禁止风格漂移。

## 执行要求

- 优先保证风格一致性，其次再做创意延展。
- 遇到冲突时以禁止项为最高优先级。
- 输出前自检：颜色、排版、间距、交互是否仍属于该风格。

## Style Rules

# Scandinavian Minimalism (北欧极简风) Design System

> 源自北欧的温暖极简设计，强调自然材质、舒适留白、木质色调和Hygge生活美学，营造宁静温馨的视觉体验。

## 核心理念

北欧极简风（Scandinavian Minimalism）源自丹麦、瑞典、挪威、芬兰等北欧国家的设计传统。

核心理念：
- 少即是多：每个元素都有存在的理由
- 自然连接：使用木材、亚麻等自然材质的色调
- Hygge 精神：营造温馨、舒适、幸福的氛围
- 功能之美：实用性与美感的完美平衡
- 光的崇拜：大量留白模拟北欧的自然光线

设计原则：
- 视觉一致性：所有组件必须遵循统一的视觉语言，从色彩到字体到间距保持谐调
- 层次分明：通过颜色深浅、字号大小、留白空间建立清晰的信息层级
- 交互反馈：每个可交互元素都必须有明确的 hover、active、focus 状态反馈
- 响应式适配：设计必须在移动端、平板、桌面端上保持一致的体验
- 无障碍性：确保色彩对比度符合 WCAG 2.1 AA 标准，所有交互元素可键盘访问

---

## Token 字典（精确 Class 映射）

### 边框
```
宽度: border
颜色: border-[#d4cdc5]/40
圆角: rounded-sm
```

### 阴影
```
小:   shadow-sm
中:   shadow-md
大:   shadow-lg
悬停: hover:shadow-md
聚焦: focus:ring-2 focus:ring-[#5a7a6b]/30
```

### 交互效果
```
悬停位移: undefined
过渡动画: transition-colors duration-500
按下状态: active:scale-[0.98]
```

### 字体
```
标题: font-light tracking-wide
正文: font-light
```

### 字号
```
Hero:  text-3xl md:text-5xl lg:text-7xl
H1:    text-2xl md:text-4xl
H2:    text-xl md:text-3xl
H3:    text-lg md:text-xl
正文:  text-sm md:text-base
小字:  text-xs
```

### 间距
```
Section: py-20 md:py-28 lg:py-36
容器:    px-6 md:px-12 lg:px-20
卡片:    p-6 md:p-8
```

---

## [FORBIDDEN] 绝对禁止

以下 class 在本风格中**绝对禁止使用**，生成时必须检查并避免：

### 禁止的 Class
- `bg-black`
- `bg-gray-900`
- `bg-slate-900`
- `font-black`
- `font-extrabold`
- `font-bold`
- `border-4`
- `border-[3px]`
- `border-[4px]`
- `shadow-[4px_4px`
- `shadow-[8px_8px`
- `rounded-none`
- `rounded-3xl`
- `rounded-full`
- `text-5xl`
- `text-6xl`
- `text-7xl`
- `text-8xl`

### 禁止的模式
- 匹配 `^bg-(?:black|gray-9|slate-9)`
- 匹配 `^font-(?:black|extrabold|bold)$`
- 匹配 `^border-(?:[3-9]|\d{2})`
- 匹配 `^shadow-\[\d+px_\d+px_0`

### 禁止原因
- `bg-black`: Scandinavian style uses warm neutral backgrounds, not pure black
- `font-black`: Only light and extralight font weights allowed for calm aesthetic
- `border-4`: Borders must be subtle and thin
- `rounded-none`: Use rounded-sm for gentle softness

> WARNING: 如果你的代码中包含以上任何 class，必须立即替换。

---

## [REQUIRED] 必须包含

### 按钮必须包含
```
transition-colors
duration-300
```

### 卡片必须包含
```
rounded-sm
transition-colors
```

### 输入框必须包含
```
bg-transparent
focus:outline-none
```

---

---

## [COMPARE] 错误 vs 正确（已按北欧规则校正）

### 按钮

[WRONG]
```html
<button class="rounded-full font-bold bg-[#e83a5c] text-white px-4 py-2">CTA</button>
```

[CORRECT]
```html
<button class="bg-[#5a7a6b] px-6 py-3 text-sm font-light tracking-wide text-[#f5f2ed] transition-colors duration-300 hover:bg-[#4d6b5d] active:scale-[0.98]">
  China Itinerary Planner
</button>
```

### 卡片

[WRONG]
```html
<div class="rounded-xl shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-6">…</div>
```

[CORRECT]
```html
<div class="rounded-sm border border-[#d4cdc5]/40 bg-[#faf8f5] p-6 transition-colors duration-500 hover:bg-white hover:shadow-sm md:p-8">
  <h3 class="font-light tracking-wide text-lg md:text-xl text-[#333333]">Title</h3>
  <p class="mt-3 text-sm font-light leading-relaxed text-[#8a7d70] md:text-base">Body</p>
</div>
```

### 输入框

[WRONG]
```html
<input class="rounded-full border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500" />
```

[CORRECT]
```html
<input class="w-full border-b border-[#d4cdc5]/60 bg-transparent px-1 py-2.5 text-sm font-light text-[#333333] placeholder:text-[#b5a99c] focus:border-[#a69483] focus:outline-none focus:ring-2 focus:ring-[#5a7a6b]/30" />
```

---

## Site palette (use CSS variables)

| Role | Hex | CSS var |
|------|-----|---------|
| Page bg | `#f5f2ed` | `--brand-cream` / body |
| Ink | `#333333` | `--brand-ink` |
| Muted text | `#8a7d70` / `#5c564f` | `--brand-ink-muted` |
| Warm accent text | `#a69483` | `--brand-warm` |
| Primary / CTA | `#5a7a6b` | `--brand-cta` |
| CTA hover | `#4d6b5d` | `--brand-cta-hover` |
| Border | `#d4cdc5` @ 40% | `--brand-cream-border` |
| Soft band | `#efeae3` | `--brand-soft` |
| Card surface | `#faf8f5` | `--brand-surface` |

Use utility classes `.btn-brand`, `.btn-brand-outline`, `.surface-cream` from `globals.css` instead of inventing new colors.

## Layout habits for this site

- Section rhythm: `py-20 md:py-28 lg:py-36` (tighter on compact heroes: `py-10 md:py-14`)
- Container: `px-6 md:px-12 lg:px-20` (via `Container` / page shells)
- Primary CTA = sage fill; secondary = thin border outline — **never** coral/magenta pills
- No full-bleed photo heroes with dark scrims; calm typography-first heroes
- No `rounded-full` pills, no `font-bold` / `font-black` UI chrome
- Homepage must show both core CTAs (Itinerary Planner + Survival Kit) without scrolling past the fold when reasonable

---

## 绝对禁止（匹配即拒绝）

以下模式一旦出现，视为风格违规——不找借口，直接重写。

- 使用高饱和度的鲜艳色彩
- 使用粗重的边框和阴影
- 密集排列元素，保持充分留白
- 使用装饰性字体或过大字号
- 弹跳、回弹或快速 scale 动效
- 使用强烈按压反馈（active 仅允许细微明暗变化）

## 自检清单（交付前逐条确认）

如果任何一条不通过，说明风格漂移了——修改后再交付。

- [ ] 没有紫色到蓝色的渐变
- [ ] 没有使用 Inter / Roboto / Geist 等过度使用的字体
- [ ] 没有嵌套卡片（卡片里面套卡片）
- [ ] 没有在彩色背景上放灰色文字
- [ ] 正文对比度满足 WCAG AA（≥4.5:1）
- [ ] 没有 bounce / elastic 缓动曲线
- [ ] 动效有 prefers-reduced-motion 备选方案
- [ ] 正文行宽不超过 65-75 个字符
- [ ] 没有单侧粗边框装饰（border-left/right accent stripe）
- [ ] 没有渐变文字（background-clip: text）
- [ ] 没有把玻璃态（glassmorphism）当作默认风格
- [ ] 没有 tiny uppercase tracked eyebrow 放在每个 section 标题上面
- [ ] 禁止使用高饱和度的鲜艳色彩
- [ ] 禁止使用粗重的边框和阴影
- [ ] 禁止密集排列元素，保持充分留白
- [ ] 禁止使用装饰性字体或过大字号
- [ ] 禁止弹跳、回弹或快速 scale 动效
