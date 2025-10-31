# 🖥️ 客户端白名单与黑名单 {#clients}

:::danger 核心规则：用错 = 封号
为了服务器安全并防止滥用，琴鸟(Lyrebird) **禁止使用所有官方 Emby 客户端**、**网页浏览器** 及 **违规第三方客户端** 播放。

**使用“黑名单”内的客户端登录，您的账号会
被系统自动封禁，恕不另行通知。**
:::

---

## 🚫 客户端“黑名单” (Banned Clients) {#q-banned-clients}

**“黑名单”包括但不限于：**

* **`网页浏览器`** (Chrome, Safari, Edge 等)
* **`Emby 官方 App`** (iOS, Android, Apple TV, Android TV 版)
* **`Emby "小秘" 系列`** (所有基于官方 App 魔改的、UI 一模一样的版本)
* **`爆米花 (Popcorn)`**
* **`Kodi`** (因其默认开启媒体库扫描)
* **`网易爆米花`**
* **`Infuse-Library媒体库模式`**
* 其他任何 **无法关闭“媒体库模式”** 或 **默认开启全库扫描** 的播放器。

:::warning 为什么？
官方客户端、网页版以及“小秘”等，极易被用于非法扫描和滥用。而 `Kodi`、`爆米花` 这类播放器默认的全库扫描会瞬间拖垮服务器。
:::

---

## ✅ 推荐客户端“白名单” (Approved Clients) {#q-client-list}

**您必须使用以下“白名单”内的第三方客户端。** 它们经过社区验证（截至 2025 年 10 月），体验优秀，且能完美兼容琴鸟的服务器设置。

:::tip 💡 老鸟的忠告
**不要想着越级打怪，花点钱体验更好，豹子头零冲当我放屁。**
:::

::: details [+] 💻 Windows 客户端推荐
| 客户端名称 | 费用 | 备注 |
| :--- | :--- | :--- |
| **`小幻影视`** | 收费 | **Win端首推**。功能强大，开发者更新勤奋不睡觉的。 |
| **`Hills Live`** | **免费** | 可能不进行后续开发哦。 |
| **`Femor`** | **免费** | HKA的腐竹就是开发者，轻量级，启动快。同时支持安卓手机。 |
:::

::: details [+] 📱 Android 客户端推荐 (手机 / 电视盒子)
| 客户端名称 | 费用 | 平台 | 备注 |
| :--- | :--- | :--- | :--- |
| **`Yamby`** | **免费** | 手机 / TV | **安卓端首选**，界面简洁，更新活跃。 |
| **`Afusekt`** | 收费 | 手机 / TV | 功能强大价格也是。 |
| **`Hills`** | 收费 | 手机 | `Hills Live` 的安卓版本，安卓真神。 |
| **`Femor`** | **免费** | 手机 | 轻量级。同时支持 Windows。 |
:::

::: details [+] 🍎 Apple 客户端推荐 (iOS / tvOS / macOS)
| 客户端名称 | 费用 | 平台 | 备注 |
| :--- | :--- | :--- | :--- |
| **`Infuse`** | 收费 | iOS, tvOS, macOS | **Apple 生态最强播放器**，完美支持 DV/Atmos。 |
| **`Senplayer`** | 收费 | iOS, tvOS, macOS | 体验优秀，多账号使用比上面那个好用很多价格也不贵。 |
| **`Lenna`** | **免费** | iOS, tvOS, macOS | 免费且好用的 Apple 生态客户端，真用爱发电。 |
| **`yybx / iemc`** | 收fed | iOS, tvOS, macOS | 小而美播放器。 |
:::

---

## 🛠️ 代理客户端 (非播放器) {#proxy-clients}

:::warning 友情提示
以下**不是播放器**！它们是**网络代理工具**，用于配合 [**[合作机场]**](/3.partners/airport) 实现 `0.01x` 倍率或优化线路。
:::

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