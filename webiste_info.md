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
- ✅ 中立建议：不接受景点 / 酒店 / OTA 佣金；若代订，只收服务费并提供发票

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

- 我们**不接受景点 / 酒店 / OTA 佣金**，没有资源推销绑定，站在用户角度规划  
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

- 原链接：[https://www.trip.com/things-to-do/list?pagetype=city&citytype=dt&id=110000&name=China&pshowcode=Ticket2&ext-homelocate=1&ext-homesearch=2&Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D15737101](https://www.trip.com/things-to-do/list?pagetype=city&citytype=dt&id=110000&name=China&pshowcode=Ticket2&ext-homelocate=1&ext-homesearch=2&Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D15737101)
- pretty 短链：/go/trip-tickets



### Trains



#### Trip.com trains

- 原链接：[https://www.trip.com/trains?Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D15737101](https://www.trip.com/trains?Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D15737101)
- pretty 短链：/go/trip-trains



### Flights



#### Trip.com flights

- 原链接：[https://www.trip.com/flights/New%20York-to-Beijing/tickets-NYC-BJS?flighttype=S&dcity=NYC&acity=BJS&Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D18886170](https://www.trip.com/flights/New%20York-to-Beijing/tickets-NYC-BJS?flighttype=S&dcity=NYC&acity=BJS&Allianceid=7850389&SID=295364952&trip_sub1=&trip_sub3=D18886170)
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
- City-by-city travel guides
- Best places to visit in China by interest
- Sample itineraries
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



## 11. 给 AI 的最终执行提醒

后续只要我在问这个网站相关的问题，你都应该默认：

- 这是 Hidden China Travel 项目
- 目标读者是外国游客
- 这是一个中国旅行实用指南网站
- 当前阶段重点是“来华实用指南”内容
- 后续会扩展到“旅游攻略 + 旅游产品内容”
- 当前已有 hub、文章、联盟链接以上述内容为准
- 站内链接必须使用相对路径
- 联盟链接统一使用 /go/xxx
- 不要编造未存在页面
- 不要写成宣传文案或模板化 AI 文案
- 以“实用、真实、清楚、可信”为优先目标

