# Hidden China Travel — 主说明文档 / AI 项目基线

这是一份给 AI 工具使用的长期项目说明。后续所有与本网站相关的规划、文章架构、内容写作、首页模块、SEO、信息架构、内链建议、联盟推荐、页面文案，都应默认基于这份文档执行，除非我明确补充或修改。

### UI / 视觉规范（强制）

全站统一使用 **热带天堂（Tropical Paradise）**。完整规范与禁止项见根目录 [`tropical-paradise.md`](tropical-paradise.md)；Cursor 规则 `.cursor/rules/tropical-paradise-ui.mdc` 始终生效。对照样例：[StyleKit showcase](https://www.stylekit.top/styles/tropical-paradise/showcase#colors)。

不论大小页面、工具页还是内容页，设计与改版都必须遵守该规范（纸色奶油底、暖黑标题、陶土 CTA、胶囊按钮、`rounded-2xl` 卡片 + 细顶色条）。顶栏为白底黑字，不要品牌色满铺。不要再用 Ocean Teal `#00897b`（SaaS 后台感）。已废弃：北欧极简（Scandinavian）、旧版整站赤陶（Terracotta.md）、旧海军蓝主按钮体系。

---

## 1. 网站总说明（现行定位 · Local Partner）

### 网站名称

Hidden China Travel

### 角色定义

我们是面向**不打算跟团、选择自由行**的外国游客的 **China Travel Partner（中国旅行伙伴）**。

- 提供一对一行前规划咨询、行程中实时咨询、应急建议
- 角色是**信息与经验的桥梁**，不是传统旅行社，也不是导游
- 网站上的实用指南、工具、Survival Kit 是信任与自助准备层；核心付费价值是 **local partner 服务**

### 一句话定位（对外主口号）

**Your local partner for independent China travel.**  
（中文内部表述：你本地的自由行伙伴。）

英文站点主标题（Hero）：

> Your Local Partner for Independent China Travel

副标题：

> Tell us your cities and days. We send a 1-on-1 PDF route — not a tour template. Survival Kit prep is included so payments and data work on day one.

Hero 主按钮下方分流（不标价；「guides」链到 `/survival-guides`）：

> Already know the cities? Use the Kit and the guides — you don't need to pay. Hire us when the route itself still isn't clear.

品牌质感第二行（不标价）：

> Old lanes, quiet cafés, neighborhood food, and the corners only locals name — not a group-tour checklist.

系统类指南 / Hub / Survival Guides 目录文末：说明 **何时该雇我们**（路线没排清才付费 PDF），不要把每篇 Alipay / 签证 / 身份证文章都硬推成「Plan my China trip」。行程规划类文章仍可主推规划器。

### 核心受众

- 第一次来中国、选择独立自由行的人
- 不想跟团、但需要本地向导式支持的人
- 担心支付 / 网络 / 语言 / 突发状况的人
- 已有行程、需要本地视角优化建议的人
- 需要行程中“信息盲区快速找路径”支持的人

### 我们不是什么

- ❌ 传统旅行社（不靠景点/酒店/OTA 佣金驱动推荐）
- ❌ 全程导游陪同
- ❌ 只会堆标准景点的模板行程工厂
- ❌ 纯 AI 问答替代品

### 我们是什么

- ✅ 本地自由行伙伴（local partner）
- ✅ 双文化翻译者：懂外国游客的恐惧，也懂中国本地怎么真正运转
- ✅ 行前定制 + 行中支持 + 应急路径
- ✅ 付费规划不接受景点 / 酒店 / OTA 佣金；若代订，只收服务费并提供发票。免费指南中的 Trip.com / eSIM / VPN 为标明的联盟链接，不改变用户价格。

---

## 1.1 服务产品（文案基线 · EN 对外以英文呈现）

### 核心 CTA（全站）

| 优先级 | 文案 | 链接 | 意图 |
|--------|------|------|------|
| 主 CTA | **Plan my China trip** | `/china-itinerary-planner` | 行程规划器（伙伴服务主入口） |
| 副 CTA | **Get Free Survival Kit** | `/survival-kit` | 行前自助准备（免费） |

> **行程中咨询次数包**：纳入行程规划器产品内，具体包装 / 售卖方式 **待定**。  
> Contact 表单已预留 **Service type** 字段位，待服务包模块开发完成后嵌入（当前 disabled，不提交）。  
> 顶部 Promo 条暂不调整。

### 行前（主服务）

1. **1对1 私人定制行程咨询与规划（主推）**  
   融入当地特色与小众体验（本地老街、手工艺、本地生活文化），不是标准景点堆砌。
2. **已有行程优化建议**  
   在既有行程上给本地视角的调整建议。
3. **附送：完整生存准备指南**  
   需要提前准备的支付 / 网络 / 地图 / 预订等清单与路径（与站点 Survival Kit / Guides 对齐）。

### 行程中（副服务）

1. **行程途中问题解答咨询**（咨询次数包 → **做在行程规划器内，包装待定**；**非全程保障**）  
   口号：*We don’t solve every problem for you — we help you find the path fast inside China’s information blind spots.*  
   （不是帮你包办一切，而是帮你在异国信息盲区里快速找到解决路径。）
2. **代订票务 / 酒店等**（服务费模式；保持中立，不靠佣金推销）

### 行中咨询 · 场景清单（网站应用可视化卡片，勿只写抽象承诺）

**交通**

- 错过末班车 / 末班地铁怎么办  
- 外国人怎么用打车软件  
- 扫码支付失败时怎么办  

**支付**

- 信用卡被拒 / system error 的备用方案  
- 现金如何安全获取  

**沟通**

- 不会中文时如何跟司机 / 店家说明诉求  
- 翻译软件失效时的应急话术  

**突发状况**

- 证件 / 手机丢失后第一步该联系谁  
- 迷路且没有网络时怎么办  

### 为什么选择我们（对外论证结构）

**1）有了 AI，为什么还需要我们？**

- AI 看起来完整，但仍会出错；没有实地经验的回答缺少温度与身临其境感  
- AI 无法替你完成真实动作（联系车辆、判断现场、处理跨文化沟通）  
- 我们补的是：**在地经验 + 温度 + 可执行动作**，弥补 AI 在准确性与执行力上的短板  

**2）旅行社能免费规划，为什么还需要我们？**

- 我们**不接受景点 / 酒店 / OTA 佣金用于付费行程规划**，没有资源推销绑定；免费指南里的 Trip.com / eSIM / VPN 为标明联盟链接  
- 一对一定制，不是标准化模板  
- 我们是行前 / 行中 / 应急的保障伙伴：例如扭伤后如何找医院、外国人如何挂号、必要时协助挂号与购药路径  
- 不只带你去著名景点，还带你体验本地手工艺、特色老街与真实生活  
- 若代订：提供发票，**只收服务费**  

**3）独特优势（难以复制）**

- **中国成长 + 海外多年生活** → 双向理解  
- 既懂外国游客的恐惧（安全、语言、信用卡、联系不上亲友、签证丢失等），也懂中国本地实际运作  
- **双文化翻译者**身份：专注打破中国与世界之间那堵“无形胜似有形”的墙  

---

## 2. 网站目标

### 当前网站目标

1. 对外清晰传达 **Local Partner** 定位（不是纯博客，也不是旅行社）
2. 把主转化导向 **Plan my China trip** → 行程规划器（咨询包等服务包后续嵌在规划器内）
3. 用指南 + Survival Kit（**Get Free Survival Kit**）建立信任与自助准备能力
4. 保持支付 / 网络 / 导航 / 交通 / 酒店 / 签证等 SEO 实用内容，作为获客与信任层；**行程规划 SEO 集群**（`/china-itinerary-planning`）与生存指南并列，服务主转化
5. About 用场景卡片讲清服务；Contact 预留服务类型槽位，待服务包模块接入
6. **信任骨架（当前业务重点，三支柱）**
   - 规划师 / 作者合作 → `/partners`，真实点评仅在书面许可后进入 `/reviews`（空列表是诚实状态，禁止编造）
   - 围绕自由行行程规划做 SEO → hub + 指南，内链到规划器与产品页
   - 产品详情落地页 → `/services/custom-itinerary`（案例图须标明 sample，不是客户行程）

### 内容与产品的关系

| 层 | 作用 |
|----|------|
| SEO 指南 / Hubs | 获客、信任、自助解答 |
| Tools（签证检查、规划器等） | 降低决策摩擦 |
| Survival Kit | 行前准备清单（Prepare CTA） |
| Partner 服务 | 核心变现：1对1规划 + 行中咨询包 + 代订服务费 |

### 长期目标

成为外国游客心中可信的 **independent China travel partner**：内容建立信任，服务交付安心与特色体验，联盟推荐仅作次要、透明的工具补充。

---



## 3. 内容原则

后续所有写作、规划、提纲、模块文案都必须遵守以下原则。

### 内容风格

- practical
- current
- honest
- direct
- easy to understand for foreigners



### 写作原则

- 先直接回答问题，再展开
- 少空话，少套话，少“宣传中国”的语气
- 不写泛泛而谈的旅游局风格内容
- 不要堆砌形容词，如：amazing, unforgettable, magical, ultimate
- 优先解决实际问题，而不是只追求 SEO 堆词
- 如果是指南文章，要尽量让用户快速知道“我现在该怎么做”
- 如果是 FAQ、模块文案、首页说明，要尽量简洁，不要写成长文章
- 内容应该默认服务于“外国游客真实会遇到的问题”



### 读者默认设定

除非特别说明，默认读者是：

- 外国游客
- 不会中文
- 没有中国手机号
- 没有中国银行卡
- 不熟悉中国 app 生态
- 需要从 0 开始理解相关系统

---



## 4. 品牌与页面风格原则

如果后续涉及首页模块、页面规划、文案风格、UI 文案、网页 section 文案，应默认遵守以下方向。

### 整体气质

- 高级
- 克制
- 真诚
- 有 travel editorial 感
- 不要 SaaS 模板味
- 不要典型 AI 页面风格



### 视觉倾向

- 遵循 [`tropical-paradise.md`](tropical-paradise.md)：纸色奶油底、暖黑标题、陶土 CTA、Antique gold eyebrow
- 多留白、圆润胶囊按钮、`TropicalCard` 场景卡片
- 图片优先真实旅行摄影，不要假 stock 感
- 文案突出 **local partner**，避免旅行社促销腔与空洞 AI 口号



### 明确避免

- 紫蓝渐变
- 泛滥 icon 卡片
- 标准 3 栏 SaaS feature grid
- 过度居中排版
- 模板感很强的 feature / testimonial / pricing 套路
- 长篇空洞文案
- AI 味很重的“品牌口号式”表达

---



## 5. 网站架构说明



### 当前 hub pages

- Visa & Entry hub：/china-visa-checker
- Payment hub：/payments-in-china/
- Internet hub：/internet-in-china/
- Navigation hub：/maps-navigation-in-china/
- Transport hub：/transport-in-china/
- Food hub：/food-delivery-in-china/
- Hotels hub：/hotels-in-china/
- Tickets hub：/attraction-tickets-in-china/
- 🧳 Travel Essentials Hub：/china-travel-essentials
- Itinerary Planning Hub：/china-itinerary-planning



工具页：

- 签证检查工具：/china-visa-checker

- 行程规划器：/china-itinerary-planner

产品与信任页：

- 定制行程落地页：/services/custom-itinerary（服务目录仍在 /services）
- 旅行者点评：/reviews（无书面许可前保持空列表，禁止假点评）
- 规划师合作：/partners（Contact `?service=partnership`）

### 当前已有文章（articles）



#### Visa&Entry

- check if u need a visa for china trip: /do-i-need-a-visa-for-china
- china visa-free countries list in 2026: /china-visa-free-countries-2026



#### Payments

- Payment Full Guide：/digital-survival-china-payment-guide/
- Alipay guide：/alipay-for-foreigners-china/
- WeChat Pay Guide：/wechat-pay-for-foreigners-china/
- Payments common failed guide：/why-your-payment-fails-in-china/
- Payment verification failed guide：/alipay-wechat-pay-verification-failed/



#### Internet

- Internet full guide：/digital-survival-china-internet-guide/
- China SIM card Guide：/china-sim-card-for-foreigners/
- Best eSIM for China：/best-esim-for-china-travel/
- VPN in China Guide：/do-you-need-vpn-china



#### Navigation

- Maps and Navigation：/google-maps-china-not-working/



#### Transport

- Transport Guide：/digital-survival-china-transport-guide/



#### Food

- Order Food：/order-food-china-without-chinese-number/



#### Hotels

- Book Hotels Guide：/hotels-in-china-for-foreigners/



#### Tickets

- Book tickets Guide：/china-attraction-ticket-booking-foreigners-2026/
- Why attractions require reservations：/why-china-attractions-require-reservations/



#### 🧳 Travel Essentials

- Real Name Explain：/china-real-name-system-foreigners/
- Chinese ID number vs passport：/chinese-id-number-foreigners/
- Is China safe for independent travel：/independent-travel-china/

#### Itinerary Planning

- How to plan a China itinerary independently：/how-to-plan-china-itinerary

---



## 6. 联盟营销链接汇总



### 统一规则

- 所有联盟链接统一使用 /go/xxx 形式
- 后续如果 AI 需要插入联盟链接，优先使用 pretty 短链
- 不要直接输出原始联盟长链接，除非我明确要求
- 如果是文章或页面中的推荐链接，应优先使用对应 short link
- **Viator：当前未接入**（`data/affiliate-links.csv` 无 slug）。不计入本站联盟 KPI；景点侧以 Trip.com tickets（`/go/trip-tickets`）为主。若未来接入，再写入 CSV 并只挂门票相关 hub/文。
- 联盟是次要转化：主 CTA 仍是 Planner + Survival Kit；勿在全站堆硬广 OTA 条



### ESIM



#### Airalo

- 原链接：[https://airalo.pxf.io/enAqaZ](https://airalo.pxf.io/enAqaZ)
- pretty 短链：/go/airalo



#### Trip.com eSIM

- 原链接：[https://www.trip.com/sale/w/10229/esim.html?Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D17851948](https://www.trip.com/sale/w/10229/esim.html?Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D17851948)
- pretty 短链：/go/trip-esim



### VPN



#### NordVPN

- 原链接：[https://go.nordvpn.net/aff_c?offer_id=15&aff_id=146020&url_id=902](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=146020&url_id=902)
- pretty 短链：/go/nordvpn



#### ExpressVPN

- 原链接：[https://go.expressvpn.com/c/7011822/1462856/16063](https://go.expressvpn.com/c/7011822/1462856/16063)
- pretty短链: /go/expressvpn



### Hotels



#### Trip.com hotels

- 原链接：[https://www.trip.com/hotels?Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D15737101](https://www.trip.com/hotels?Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D15737101)
- pretty 短链：/go/trip-hotels



### Tickets



#### Trip.com tickets

- 原链接：[https://www.trip.com/things-to-do?Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D15737101](https://www.trip.com/things-to-do?Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D15737101)
- pretty 短链：/go/trip-tickets



### Trains



#### Trip.com trains

- 原链接：[https://www.trip.com/trains?Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D15737101](https://www.trip.com/trains?Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D15737101)
- pretty 短链：/go/trip-trains



### Flights



#### Trip.com flights

- 原链接：[https://www.trip.com/flights?Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D18886170](https://www.trip.com/flights?Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D18886170)
- pretty 短链：/go/trip-flight



### Wise

- 原链接：[https://wise.com/invite/ihpc/jiaol79](https://wise.com/invite/ihpc/jiaol79)
- pretty 短链：/go/wise



### 综合入口



#### Trip.com home

- 原链接：[https://www.trip.com/?Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D16978782](https://www.trip.com/?Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D16978782)
- pretty 短链：/go/trip-home

---



## 7. 内链与 URL 使用规则

这是强规则，后续所有 AI 输出都要遵守：

1. 如果需要推荐站内文章或 hub，优先从本说明文档中的现有 URL 里选
2. 所有站内链接一律使用相对路径
3. 不要带域名
4. 不要擅自编造不存在的 URL
5. 如果 AI 认为应该内链，但当前文档中没有对应页面，可以提出“建议新增页面”，但不要直接假设它已存在
6. 做文章规划、topic cluster、hub 架构、FAQ、模块 CTA、相关阅读推荐时，都应优先考虑已有内容之间的内链关系
7. 文章里面的URL链接统一设置为在新标签页中打开链接，不要直接在当前窗口打开链接

---



## 8. 联盟链接使用规则

1. 所有联盟链接统一命名为 /go/xxx
2. 在正文中推荐产品/服务时，默认优先使用 pretty 短链
3. 如果写的是信息性内容，推荐要克制，不要全篇像销售页
4. 推荐必须与文章主题高度相关
5. 优先真实帮助用户，而不是为了插链接而插链接
6. 如果页面含联盟推荐，文案中应考虑清晰 disclosure，语言要自然直接



### 推荐使用的 disclosure 文案



#### 长版

This article contains affiliate links. If you book or buy through them, I may earn a small commission at no extra cost to you.

#### 短版

This post contains affiliate links at no extra cost to you.

---



## 9. 后续 AI 输出的默认要求

如果我后续提问没有特别说明，默认按以下方式输出。

### 如果是文章规划 / 提纲

- 先结合当前网站架构判断它属于哪个 hub
- 给出建议的文章定位
- 说明应当链接到哪些已有文章 / hub
- 如有必要，补充建议的联盟入口
- URL 一律使用相对路径
- **大理相关**：严格按 §10.6 的 URL、防蚕食表和写文顺序；不要另开调研稿里已否决的拆文



### 如果是写文章

- 默认面向外国游客
- 优先直接回答问题
- 结构清晰
- 避免空泛和冗长
- 尽可能与已有文章形成内链网络
- 如涉及支付、网络、酒店、门票、交通等，适度考虑联盟入口，但不要影响可读性



### 如果是首页 / hub / section 模块

- 保持与整站风格一致
- 优先建立信任和清晰度
- 文案不要太长
- 尽量用已有文章和 hub 做引导



### 如果是 SEO / 信息架构建议

- 必须参考当前已有 hub 和文章
- 避免重复建设
- 优先补足内容缺口
- 优先考虑能形成 cluster 的主题

---



## 10. 当前内容空缺与未来方向（可动态更新）

以下是网站未来可以持续扩展的方向，AI 在做内容规划时可以优先从这些方向中找缺口：

### 来华实用指南方向

- Visa / visa-free / entry rules / transit policy
- China itineraries by trip length（骨架已有：hub `/china-itinerary-planning` + `/how-to-plan-china-itinerary`；后续可按天数拆文）
- Apps foreigners need in China
- Trains / station boarding / 12306 alternatives
- How to book attractions and tours as a foreigner
- Common travel mistakes in China
- Money exchange / ATM / card withdrawal
- Food safety / dietary restrictions / vegetarian travel
- Hotels that accept foreigners / booking pitfalls
- Travel safety / scams / local rules / etiquette



### 后续旅游攻略方向

- Destination-specific practical guides
- City-by-city travel guides — **大理是第一个城市级 SEO 集群**，规格见 §10.6（未写文前不要假设这些 URL 已存在）
- Best places to visit in China by interest
- Sample itineraries（云南 region loop 已有：`/china-destinations/yunnan`；不要再做一篇同一意图的 Yunnan itinerary）
- Seasonal travel guides
- Region-based travel planning



### 后续旅游产品方向

- Hotel booking recommendations
- Attraction ticket booking tools
- Train booking tools
- eSIM / VPN / payment tools
- Insurance / travel gear / useful travel services

这部分不是固定不变的，可以随着网站发展调整。

---

## 10.5 Founder narrative baseline（信任叙事 · EN 对外）

**核心命题：** 信息差（information gap）+ 双边视角（dual lens）→ 本地质感判断 → 独立行程规划服务。

### Joy Liu — 背景口径（与页面同步）

- 云南长大；国内多城生活/旅行（重庆、广州、北京、成都等）
- 日本 2 年、菲律宾 2 年 — 以外国游客身份生活，理解 SIM/支付/攻略矛盾
- 2025 年回昆明；2026 年初建本站
- 海外旅游经历（普吉、亚庇、富士、澳洲、薄荷岛等）仅作共鸣一句，不抢中国主线

### 语气规则

1. About / 作者卡 / 第一人称段落用 **I（Joy）**；服务清单可用 **we**（一人公司惯例）
2. 判断原则写「我会怎么看」，不写店名黑名单
3. 禁止假评价；无客户案例时用 sample route + 起源故事 + 判断原则撑信任
4. 头像：`/brand/founder/avatar.webp`（真人小图，非占位图）
5. 禁止泛化「local partner」而不解释 **为什么信 Joy**

### 全站信任触点

| 触点 | 路径 / 组件 |
|------|-------------|
| 起源故事 | `/about#why-i-started` · `founder-content.ts` |
| 判断原则 | `/about#how-i-judge` · `HowIJudgeCards` |
| 创始人 | `/about#founder` |
| 规划器信任 | `FounderTrustChip` · `plannerTrustLine` |
| 首页 | `HomeWhyExists` |
| 云南 | `DestinationWhyIKnow` |
| 评价空状态 | `/reviews` → sample route · about · planner |

文案单一数据源：`src/lib/about/founder-content.ts`

---

## 10.6 大理 Destination Cluster（已审规格 · 尚未写文）

来源：外部 GPT 关键词调研。已按本站定位、现有 IA、写作原则改过。**写大理文章前先读本节。**  
当前这些 URL **都不存在**；内链时仍按 §7：可以规划，不要写成已上线。

### 结论（先用这个，不要再拆薄文）

方向对：

- **1 个城市 Pillar + 8～12 个 Cluster**，不要 30～50 篇薄文
- 2/3/4/5 天行程、每月天气、古城 walking/night/food **不要拆成独立 URL**
- 内链是 **Hub → Cluster → Conversion**，不是每篇互链成网
- 第一阶段 8 篇已经能把大理做成完整英文 topic cluster

必须改（对 GPT 原稿的修正）：

1. **父节点已经存在。** `/china-destinations/yunnan` 就是 Yunnan travel guide + Kunming–Dali–Lijiang itinerary。不要新建 `/yunnan-itinerary/`、`/yunnan-travel-guide/`、`/yunnan-10-day-itinerary/`。大理集群向上链这篇 + 规划器。
2. **城市文走文章顶层 slug**（与 `/how-to-plan-china-itinerary` 同模式）。不要 `/china/yunnan/dali/...` 三四层目录；也不要把大理塞进 `/china-destinations/dali`——`/china-destinations/[slug]` 目前是 **region destination 页**（云南 loop），不是城市攻略。
3. **喜洲 / 双廊 / 苍山** 第一阶段只做 Erhai / Things to Do / Hidden Gems 的 H2，不单独出 URL。GPT 结构图里的 Xizhou / Shuanglang 节点是章节，不是页面。
4. **丽江 / 昆明城市 Pillar 本阶段不写。** Dali vs Lijiang、How to Get to Dali 链到云南页对应段落 + 现有交通/酒店 hub。
5. **每篇必须有独立旅行系统层**（护照酒店、Alipay/现金、eSIM、DiDi、高德）。这是对 TripAdvisor / Lonely Planet 的真正差异，不是再写一遍景点清单。
6. **标题不要旅游局腔。** 禁止 ultimate / amazing / everything you need to know / 15 best 这种空壳；Things to Do 可以覆盖该词，但正文要写 skip 什么、团客脚本是什么。
7. **Hidden Gems 不要为凑 12 个编地点。** 有多少诚实的就写多少。

### 在整站 IA 里的位置

```
/china-itinerary-planning                    ← 中国行程 hub（已有）
  └── /how-to-plan-china-itinerary           ← 规划方法（已有）
        └── /china-destinations/yunnan      ← 云南 region Pillar / 7 日 loop（已有）
              └── /dali-travel-guide        ← 大理城市 Pillar（待写）
                    ├── itinerary / stay / ancient town / erhai / transport …
                    └── /dali-vs-lijiang    ← 桥接页 → 回到云南 loop + 规划器
```

转化路径（Conversion，不是再开一组 URL）：

- 大理行程 / Dali vs Lijiang → `/china-destinations/yunnan` + `/china-itinerary-planner?dest=yunnan&shape=loop-7#plan-trip`
- 交通 / 无车 → `/transport-in-china` + `/book-china-high-speed-rail-foreigners` + `/how-to-use-didi-china-foreigners`
- 住宿 → `/hotels-in-china`
- 行前系统 → `/survival-kit`、`/payments-in-china`、`/internet-in-china`、`/maps-navigation-in-china`
- 雇我们 → `/china-itinerary-planner` + `/services/custom-itinerary`（路线没排清才付费；不要每段都硬推）

### URL 与关键词地图（12 篇，分两期）

| # | 阶段 | URL | Primary | 本页吃掉、不要另开的词 | 不吃（留给别的 URL） |
|---|------|-----|---------|------------------------|----------------------|
| 1 | P1 | `/dali-travel-guide` | dali travel guide | dali travel, dali china, dali china travel, dali tourism | 深度 itinerary / stay / erhai 路线 |
| 2 | P1 | `/dali-itinerary` | dali itinerary | 2/3/4/5 days, how many days in dali, 3 days in dali china | 云南 7 日 loop（云南页） |
| 3 | P1 | `/things-to-do-in-dali` | things to do in dali | dali attractions, dali sightseeing, best things to do | 古城步行细节、洱海骑行路线、hidden gems |
| 4 | P1 | `/where-to-stay-in-dali` | where to stay in dali | best area/neighborhood, ancient town vs erhai, without a car（住宿角度） | 无车交通操作（给 #11） |
| 5 | P1 | `/dali-ancient-town` | dali ancient town | walking route, at night, food in the old town, is it worth visiting, how long | 大理全域 things to do |
| 6 | P1 | `/erhai-lake-guide` | erhai lake / erhai lake dali | cycling, day trip, west vs east shore, xizhou, shuanglang, itinerary（湖区） | 大理几天（给 itinerary） |
| 7 | P1 | `/how-to-get-to-dali` | how to get to dali china | kunming/lijiang/shangri-la train, airport/station → ancient town, dali transportation | 无车玩湖区细节（给 #11）、全国交通 hub |
| 8 | P1 | `/dali-vs-lijiang` | dali vs lijiang | dali or lijiang, for first time / 3 days / couples / solo | 丽江深度攻略（未来）、云南 loop 日程（云南页） |
| 9 | P2 | `/dali-hidden-gems` | dali hidden gems | off the beaten path, local villages, slow travel, authentic | 热门景点清单（给 things to do） |
| 10 | P2 | `/best-time-to-visit-dali` | best time to visit dali | dali weather, by month, rainy season, winter/summer | 云南全省季节（云南页可保留短段） |
| 11 | P2 | `/dali-without-a-car` | dali without a car | independent / public transport / solo around dali | 大交通怎么到达（给 #7） |
| 12 | P2 | `/dali-food-guide` | dali local food | bai cuisine, what to eat, local dishes | 古城内随便吃什么（古城文可短提） |

**Erhai 主词说明：** 调研稿把 primary 写成 `erhai lake itinerary`。本站 primary 用 **erhai lake / erhai lake dali**（覆盖面更大）；用 H2 吃 cycling / day trip / itinerary，不必为 itinerary 再开 URL。

**P2 里「无车」提前写的条件：** 若发现 `dali without a car` 比 `things to do in dali` 更好转化（独立旅行意图更纯），可把 #11 提前到 P1，Things to Do 仍写但可更短、更依赖 pillar 摘要。

### 各页定位（防蚕食）

不是平级。`/dali-travel-guide` 是中心节点：每个子题 **一段 + 链出去**，不要在 pillar 里写完 itinerary / 骑行路线。

| 页面 | 写什么 | 明确不写 |
|------|--------|----------|
| Travel Guide | 大理是什么、为什么去、几天够不够（结论级）、各子题入口、和云南 loop 的关系 | 逐时日程、湖岸逐村、酒店区逐条对比 |
| Itinerary | 2/3/4/5 天四条路线；**3 天标星**；每天基地+移动方式 | 把云南 7 日 loop 再写一遍 |
| Things to Do | 全域清单 + 每项 1 短段 + 何时 skip 团客脚本 | 古城巷弄 walk、洱海东西岸骑行步骤 |
| Where to Stay | 古城 / 海景 / 喜洲 / 双廊 / 下关 对照表；H2 **Ancient Town or Erhai** | 无车公交时刻；洱海玩法 |
| Ancient Town | 只写古城墙内：走线、晚上、吃饭、值不值得、呆多久 | 喜洲双廊苍山洱海 |
| Erhai | 怎么玩湖：骑行 / 打车 / 包车 / 公交；西岸 vs 东岸；喜洲双廊作为湖村 | 古城住宿推荐长文 |
| Transport | 昆明/丽江/香格里拉 → 大理；机场/火车站 → 古城；Getting around 只到概览 | 无车玩湖逐步操作 |
| vs Lijiang | 决策页：选大理 if / 选丽江 if；7 天两个都去 → 云南页 | 变成第二篇大理或丽江攻略 |
| Hidden Gems | 小村、市场、茶、白族日常、小众走线；**不进热门清单** | 三塔、人民路、标准环海 |
| Best Time | 一张月份表吃掉 by month | 每月一篇 |
| Without a Car | 古城+洱海+喜洲+双廊+苍山的独立移动 | 到达大理的大交通（链 #7） |
| Food | 本地菜 / 白族菜，可慢写 | 不要和古城 food 段重复成长文 |

### 内链规则（Hub → Cluster → Conversion）

**第一层（Pillar → 全部 cluster）**  
`/dali-travel-guide` 链到 P1 全部 7 篇；P2 上线后再补。另链：`/china-destinations/yunnan`、`/independent-travel-china`、`/survival-kit`、规划器。

**第二层（只链决策下一跳，不要全互链）**

- Itinerary → Ancient Town, Erhai, Where to Stay, Transport, Yunnan destination
- Erhai → Itinerary, Ancient Town, Where to Stay, Without a Car（上线后）
- Where to Stay → Ancient Town, Erhai, Itinerary, Hotels hub, Without a Car（上线后）
- vs Lijiang → Dali Travel Guide, Dali Itinerary, **Yunnan destination（必须）**, 规划器
- Transport → Transport hub, 高铁购票文, Didi 文, Itinerary, Yunnan destination（昆明站/南站已有说明）
- Things to Do → Ancient Town, Erhai, Hidden Gems（上线后）；每条热门景点只深链一篇
- Ancient Town → Things to Do（全域）、Where to Stay、Itinerary

**禁止：** 每篇 footer 堆 12 条大理互链。相关阅读优先「下一跳 + 已有系统 hub」。

### 写作时必须挂上的已有 URL

按主题选用，不要编造：

- `/china-destinations/yunnan`
- `/china-itinerary-planning` · `/how-to-plan-china-itinerary`
- `/independent-travel-china`
- `/china-itinerary-planner?dest=yunnan&shape=loop-7#plan-trip`
- `/services/custom-itinerary`
- `/survival-kit`
- `/transport-in-china` · `/book-china-high-speed-rail-foreigners` · `/how-to-use-didi-china-foreigners`
- `/hotels-in-china`
- `/maps-navigation-in-china`
- `/payments-in-china` · `/alipay-for-foreigners-china`
- `/internet-in-china` · `/best-esim-for-china-travel`
- `/china-visa-checker` · `/do-i-need-a-visa-for-china`

联盟：交通/住宿相关页可克制使用 `/go/trip-trains`、`/go/trip-hotels`、`/go/trip-flight`；disclosure 见 §8。主 CTA 仍是规划器 + Survival Kit。

### 标题口径（对外英文 · 可微调，勿改成 listicle）

| 页面 | H1 / 标题方向 |
|------|----------------|
| Guide | Dali Travel Guide for Independent Visitors |
| Itinerary | Dali Itinerary: How Many Days You Need (2–5 Day Routes) |
| Things to Do | Things to Do in Dali — And What the Tour Bus Skips |
| Where to Stay | Where to Stay in Dali: Ancient Town, Erhai, or a Village |
| Ancient Town | Dali Ancient Town: Walking Route, Food, and How Long to Stay |
| Erhai | Erhai Lake Guide: Routes, Cycling, and Day Trips from Dali |
| Transport | How to Get to Dali, China: Train, Flight, and Station Transfers |
| vs Lijiang | Dali vs Lijiang: Which One Should You Visit? |
| Hidden Gems | Dali Hidden Gems: Villages, Markets, and Slow Days |
| Best Time | Best Time to Visit Dali: Weather by Month |
| Without a Car | Dali Without a Car: How to Get Around Independently |
| Food | Dali Food Guide: Bai Dishes Worth Finding |

### 云南页上线后要改的（写完 P1 再做，不要提前空链）

`/china-destinations/yunnan` 里 Dali Old Town / Erhai 高亮段改为 **短 teaser + 链到城市文**，避免和 `/dali-travel-guide`、`/erhai-lake-guide` 抢同一组词。云南页继续吃：Yunnan itinerary、Kunming–Dali–Lijiang、7-day Yunnan、四季如春。`placeLinks` 里古城/洱海从 `#anchor` 改为城市文 URL。

Itinerary Planning hub（`content/hubs/china-itinerary-planning.md`）在大理 pillar 上线后，于 destination 子题下增加一条 Dali Travel Guide（status: published）。

### 明确不要做的独立文章

- Dali itinerary 2/3/4/5 days 四篇
- Dali weather January … December
- Dali Ancient Town things to do / at night / walking / food 四篇
- Xizhou guide、Shuanglang guide、Cangshan guide（P1）
- Dali Ancient Town vs Erhai 独立篇（做 Where to Stay 的 H2）
- Kunming to Dali、Lijiang to Dali、airport transfer 三篇（做 Transport 的 H2）
- Yunnan itinerary / Yunnan travel guide（已有 destination 页）

### 写文顺序（P1）

1. `/dali-travel-guide`（先立 hub，子链可标 planned 或等 2–8 一起发）
2. `/dali-itinerary`
3. `/how-to-get-to-dali`
4. `/where-to-stay-in-dali`
5. `/erhai-lake-guide`
6. `/dali-ancient-town`
7. `/dali-vs-lijiang`
8. `/things-to-do-in-dali`（最后写，才能深链 5–6 而不重复）

建议 **P1 八篇一起发布**，避免 pillar 链到 404。若必须先发 pillar，子题段落先不放死链。

---

## 11. 给 AI 的最终执行提醒

后续只要我在问这个网站相关的问题，你都应该默认：

- 这是 Hidden China Travel 项目
- 目标读者是外国游客
- 这是一个中国旅行实用指南网站
- 当前阶段重点是“来华实用指南”内容；城市攻略以 §10.6 大理集群为第一批 destination 扩展
- 后续会扩展到“旅游攻略 + 旅游产品内容”
- 当前已有 hub、文章、联盟链接以上述内容为准
- 站内链接必须使用相对路径
- 联盟链接统一使用 /go/xxx
- 不要编造未存在页面
- 不要写成宣传文案或模板化 AI 文案
- 以“实用、真实、清楚、可信”为优先目标

