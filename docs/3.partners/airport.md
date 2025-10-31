# ✈️ 合作机场使用指南 {#airport}

为了获得最佳的Emby专线体验，我们推荐使用与琴鸟深度整合的合作伙伴——**LyrebirdCloud**。本指南将引导您了解其特性、购买套餐并获取宝贵的Emby注册码。

:::danger 线路使用须知
为保障所有成员的连接稳定与安全，本页提到的部分专属线路地址 **仅供您个人使用**。**严禁** 以任何形式公开分享或泄露。
:::

---

## 🛰️ 简介 (LyrebirdCloud) {#what-is-lyrebirdcloud}

`LyrebirdCloud` 是一家与琴鸟Emby半联合运营的中转机场，旨在为鸟服用户提供高性价比的稳定线路。由于深度合作，我们能确保其服务稳定，无跑路风险。

<div style="display: flex; gap: 1rem; justify-content: center; margin: 2rem 0;">
  <a href="https://dash.lyrebird.cloud" target="_blank" class="VPButton brand">前往官网</a>
  <a href="https://t.me/LyrebirdCloudBot" target="_blank" class="VPButton alt">联系机器人</a>
</div>

---

## ✨ 核心亮点 (为什么选我们？) {#core-features}

<a id="why-choose-this"></a>
`LyrebirdCloud` 是一家品质优秀、良心的机场，**即使您不是 Emby 用户，它也是个好选择**。

### 🧭 动态倍率 (全体用户福利) {#dynamic-rate}
机场所有节点均采用“动态倍率”，在非高峰时段使用，流量消耗更少：
* **`04:00 - 11:00`** → **`0.4x`**
* **`11:00 - 15:00`** → **`0.6x`**
* **`15:00 - 21:00`** → **`0.8x`**
* **`21:00 - 04:00`** → **`1.0x`**

### 💎 琴鸟专属福利 (Emby 用户独享) {#emby-bonus}
如果您**同时是需要一个 Emby 观影用户**，那 `LyrebirdCloud` 就是您的**最佳选择**：

* **🚀 Emby 专属VIP线路**
    * 机场提供**“Emby 专属高速线路”**。这条线路**不与本体线路（如主线路）“抢道”**，琴鸟机场用户专属VIP线路，**避免晚高峰卡顿**。

* **💸 流量无忧 (0.01x 倍率)**
    * 这是琴鸟用户**独享**的“超级福利”。激活后（**需手动设置分流**，教程见下文），您观看琴鸟 Emby 所消耗的所有流量，都将按照 **`0.01`** 的超低倍率计算。
    * 换句话说：**您看 `100GB` 的 4K Remux，实际只扣 `1GB` 流量**，几乎等于“无限流量”！

* **💰 流量鸟币互转**
    * 机场流量可按比例兑换为 Emby 鸟币。
    * **动态调节**：兑换比例**动态调节**，通常**月初最高**，**月末最低**。
    * **兑换条件**：您的机场订阅**剩余时间**必须**大于**本月的**剩余天数**。

* **🎟️ 附赠 Emby 注册码**
    * 购买**年度套餐**，附赠一枚宝贵的 `LyrebirdEmby` 注册码。

---

## 🚀 “0.01x 倍率”激活教程 (必看) {#how-to-use-001x}

:::info 核心原理：手动分流
`LyrebirdCloud` 的 **Clash 订阅** 提供了 `0.01🎬` 这个**策略组（节点）**，但**没有内置** Emby 的分流规则。

您**必须手动**添加一条规则，告诉客户端：“当访问 Emby 时，请走 `0.01🎬` 节点”。
:::

:::warning 软件操作须知 (必读)
请注意！不同代理软件的**功能命名可能不一样**（比如 `Clash` 叫“规则 (Rules)”，`v2rayN` 叫“路由 (Routing)”，其他软件可能叫“分流”或“策略 (Policy)”）。
    
在操作前，最好先查查**您所使用的软件**里，对应的功能到底叫什么名字。
:::

### 📝 设置指南 (Shadowrocket 示例) {#shadowrocket-guide}

#### 操作步骤
    
1.  **获取订阅**：在 `LyrebirdCloud` 官网复制您的 **Clash 订阅链接**（**不要**用 `V2ray` 或 `SSR` 的普通链接），并将其导入到 `Shadowrocket` 中。
2.  **获取域名**：私聊 **Emby 账号机器人** [**`@Lyrebird_bot`**](https://t.me/Lyrebird_bot)，在菜单中找到并复制您的“**✈️线路地址**”（例如 `emby.example.com`）。
3.  **添加规则**：
    * 打开 `Shadowrocket` → 进入 **配置 (Config)** → 点击 **规则 (Rules)**
    * 点击 **+ 添加新规则 (Add Rule)**
    * **类型 (Type)**: `DOMAIN-SUFFIX` (或 `DOMAIN`)
    * **域名 (Domain)**: `emby.example.com` (粘贴您刚复制的地址)
    * **策略 (Policy)**: 选择 `0.01🎬` (琴鸟机场提供的专属节点)
    * **置顶规则**：将您刚添加的这条规则**拖到规则列表的最顶部**（确保它最先生效）。
4.  **选择模式**：
    * 返回 `Shadowrocket` 首页，将“全局路由 (Global Routing)”设置为 **`配置 (Config)`** 或 **`规则 (Rule)`** 模式。
5.  **完成！**
    
<a id="proxy-clients-reference"></a>
### 📲 推荐的代理客户端 (工具) {#proxy-clients-reference}
    
以下是社区（截至 2025 年 10 月）验证过、能完美支持“规则分流”的主流客户端：
    
::: details [+] 💻 Windows 客户端
| 客户端名称 | 备注 |
| :--- | :--- |
| [**`Clash Verge Rev`**](https://github.com/clash-verge-rev/clash-verge-rev/releases) | **首选**，更新频繁，功能强大。 |
| `Clash for Windows` | 停更了又不是不能用。 |
| [`v2rayN`](https://github.com/2dust/v2rayN-Core/releases) | 管理节点方便，稳定可靠。 |
:::
    
::: details [+] 🍎 Apple (iOS / macOS) 客户端
| 客户端名称 | 备注 |
| :--- | :--- |
| [**`Shadowrocket (小火箭)`**](https://apps.apple.com/us/app/shadowrocket/id932747118) | **iOS 首选**，无脑简单教程和懒人配置多。 |
| [`Loon`](https://apps.apple.com/us/app/loon/id1373567447) / [`QuantumultX`](https://apps.apple.com/us/app/quantumult-x/id1443988620) | 脚本兼容性好，使用相对有门槛。 |
| [`sing-box`](https://apps.apple.com/us/app/sing-box/id6451272673) | 近年来很多人都推荐。 |
| [`Surge`](https://nssurge.com/) | 贵，但是功能最完善和稳定。 |
:::
    
::: details [+] 📱 Android 客户端 (手机 / 电视盒子)
| 客户端名称 | 备注 |
| :--- | :--- |
| [**`Clash Meta for Android`**](https://github.com/MetaCubeX/ClashMetaForAndroid/releases) | **安卓首选**，老东西功能最全。 |
| [`FlClashx`](https://github.com/Fclash/Fclash) | 安卓的小火箭协议支持的面。 |
| [`v2rayNG`](https://github.com/2dust/v2rayNG/releases) | 简单易用易上手的老物件。 |
| [`sing-box`](https://github.com/SagerNet/sing-box-for-android/releases) | 近年来热门客户端。 |
:::
    
---
### 💡 机场小技巧 (订阅更新失败？) {#airport-tips}
    
:::tip 💡 祭出“哥的三板斧大法”
如果您在客户端里点击“更新订阅”失败或超时，别慌。
祭出哥的三板斧！！！
    
1.  **“重启大法”**：伟大无需多言。
2.  **“重导大法”**：**删除**客户端里的旧订阅链接，**重新粘贴**一次新链接，然后**更新**。
3.  **“换源大法”**：**关闭 Wi-Fi**，或用**手机 4G/5G 流量**来更新订阅，还不行就试试**偷邻居家网**，99% 的玄学问题都能解决。
:::

:::danger 哥的忠告
要是还不行，直接快进到骂厂主，对得起我们吗？RNM 退钱！
:::
---

## 💰 套餐价格与 Emby 注册码 {#pricing-and-code}

<a id="pricing-and-notice"></a>

:::danger 购买前请务必阅读！ {#buy-notice-1}
* **无退款政策**：所有套餐一经售出，**概不退款**。请在购买前仔细考虑。
* **地区限制**：由于网络政策原因，**新疆地区用户无法使用**。
:::

* **月度套餐**：**`12元`** / `200GB` 流量
* **年度套餐**：**`119元`** / `200GB` 流量 (每月1号自动重置)
* **可用优惠**：暂无任何优惠码。

:::warning 注册码赠送规则 (必读)
* 目前 **仅年度套餐** 附赠一枚宝贵的 `LyrebirdEmby` 注册码。
* **月度套餐不包含注册码**。
* **独立性说明**：您的 **Emby账号** 与 **机场订阅** 是相互独立的。机场订阅到期不会影响您的Emby账号使用。只要您确保Emby账号内鸟币充足用于保号，即可永久使用。机场年费套餐仅仅是赠送您一张入场门票。
:::

<a id="how-to-get-code"></a>
### 🔑 如何获取Emby注册码 (详细步骤) {#how-to-get-code}

购买 **年度套餐** 后，请按照以下步骤操作，即可轻松获取您的Emby入场券。

1.  **第一步：与机器人对话并绑定**
    * 私聊机场机器人 [**`@LyrebirdCloudBot`**](https://t.me/LyrebirdCloudBot)。
    * 在对话框中发送指令：`/bind <您的机场订阅链接>`
        > 将 `<您的机场订阅链接>` 替换为您从官网复制的真实链接。
    
    ![绑定机场订阅链接](/images/jc1.png "绑定机场订阅")

2.  **第二步：创建注册码**
    * 绑定成功后，继续在机器人对话框中发送指令：`/create`
    * 机器人会立即为您生成一枚全新的Emby注册码。

    ![机器人指令展示，包含/create命令](/images/jc2.png "机器人指令")