# Upwork 投标速查卡（每天直接复制改）

> 用之前先看：速度 > 完美。每天打开这个文件，复制对应模板，改首行钩子 + 报价就发。

## ⚡ 黄金写作规则

1. **首行钩子 ≤25 词**：点名客户帖子里的具体需求/产品名。
2. **结构**：钩子 → 1 句 CopyCraft 证据 → 3 步做法 → 1 个聪明反问 → CTA。
3. 长度 150–250 词，短句，**像人话**（AI 起草后必须自己改顺）。
4. 第一封信**不贴裸链接/邮箱/电话**；作品用 Attach portfolio item。
5. 每封都把客户帖子里的 1–2 个细节揉进首段。

---

## 模板 A：Landing Page / SaaS 官网

> Your [产品名] landing page — I shipped one just like it (portfolio: live demo).
>
> Hi [Name],
>
> Your [产品名/帖子里的具体点] caught my eye — I built and shipped my own AI SaaS (CopyCraft AI, a marketing-copy generator with real signup/login and AI generation), so a startup landing page isn't a template exercise to me: it has to explain the product in 5 seconds and convert.
>
> What I'd do:
> 1. Build a fast, mobile-first one-page site in React + Vite, deployed on Vercel (HTTPS + instant live preview from day 1)
> 2. Match your brand/logo, or propose a clean, conversion-focused layout if you don't have one yet
> 3. Include SEO meta tags and aim for 90+ Lighthouse performance score
>
> Deliverable in 5–7 days. Fixed price: **$[X]** (含 2 轮修改). You get a live URL from day one.
>
> One question: do you already have final copy/logo, or should I also structure the sections and write placeholder copy?
>
> Best, [名字]

**替换点**：`[产品名]`、`[X]`。客户提 Figma → 改成"Match your Figma 1:1"。客户没预算 → 报价句改"Fixed price: $[X]–[Y] depending on sections — tell me what you need and I'll confirm today."

---

## 模板 B：React 修 bug / 加功能

> Hi [Name],
>
> The [具体 bug/需求] you described in [页面/功能名] is a classic I hit while building my own production React app (CopyCraft AI — React 19 + Vite + Supabase, live at the attached portfolio item). I'm comfortable working inside someone else's codebase without breaking things.
>
> My plan:
> 1. Reproduce the issue first (share console error / screenshots / steps if you can)
> 2. Fix it on a branch + PR so you can review before I touch anything live
> 3. Deliver with a clear root-cause summary
>
> Timeline: [24–72h] once I have access. Price: fixed **$[X]** (or hourly $[Y] if more small tasks behind it).
>
> Question: do you have a staging environment, or should I use a feature branch and deploy after your review?
>
> Best, [名字]

**替换点**：小 bug $50–150，中等 $150–300。拿不准报 hourly $20–30。"先复现→PR→再上生产"这套流程本身卖专业感，务必保留。

---

## 模板 C：AI 功能接入（你最大差异化）

> Hi [Name],
>
> Adding [聊天/文案生成/摘要] via an LLM API is exactly what my own product does: I built CopyCraft AI, an AI copywriting SaaS where users type a product description and get copy generated live by the DeepSeek API — with real auth and a dashboard. So I know the 5 things that make or break these: prompt design, streaming responses, cost/rate limits, error handling, and **keeping the API key server-side**.
>
> For your project:
> 1. Wire up the API ([OpenAI / DeepSeek / Claude] — your choice) through a serverless backend so your key never ships to the browser
> 2. Build the UI: [chat widget / form-based generator] with loading states and fallback errors
> 3. Add usage limits so you don't wake up to a surprise bill
>
> Fixed price by scope: **$[X]–[Y]** (chat widget vs. full generator differ — I'll give exact quote). Deliverable in [5–10] days with live preview.
>
> Question: which provider/feature did you have in mind, and is this for an existing site (which stack?) or a new project?
>
> Best, [名字]

**替换点**：**"5 个成败点"这段是跟 95% 竞品的差异，任何 AI 类单都要保留。** 报 $200 起。

---

## 🚫 先别投的这些单（避开）

- $5–50 低质小活（把你价位标签打低）
- 要求 Telegram/WhatsApp 联系
- 0 历史、0 付款验证、预算离谱高但要求低
- 让你先垫钱买域名/素材
- 多付款让你退差额

## ✅ 投前 30 秒检查

- [ ] 付款已验证？预算合理？发帖 <24h？（三否一即弃）
- [ ] 首行点名了客户需求
- [ ] 有 1 句 CopyCraft 证据 + Attach portfolio
- [ ] 有具体做法 + 明确时间/价格
- [ ] 有 1 个聪明反问
- [ ] 无套话、无裸链接、无 AI 腔、无错别字

## 💰 定价快参考

| 阶段 | 落地页 | React 小活 | 时薪 |
|---|---|---|---|
| 首单(0好评) | $150–300 | $50–150 | $18–25 |
| 1–3好评 | $300–600 | $150–300 | $25–35 |
| 3–8好评 JSS90% | $400–1000 | $200–400 | $35–55 |

**底线：首单也不接 <$100。** 报价 = 等效时薪 × 1.11 × 工时。
