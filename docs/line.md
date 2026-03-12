# 鸟服线路使用建议
:::warning
线路不要泄漏，自己好好使用就行了，以免账号被杀
:::

## 主线路
基于Cloudflare。对大陆连接情况因地区而异。挂梯的话全球都可以，通常建议挂梯使用

## 机场线路
机场线路基于内网线路，减少多层套娃转发，直达杜甫路由器，但需要合作机场支持。  
详情可查看[合作机场](/airport)

## 裸IP线路
裸IP线路，可被用来反向代理或者如苏州等屏蔽域名的地方直连使用  
下面是鸟服一键反向代理脚本，复制在服务器上回车即可执行，推荐使用debian11或ubuntu22.04以上系统执行
```bash
sudo bash -c "$(curl -fsSL https://raw.githubusercontent.com/kuefone/forwardlyrebirdemby/main/fdlyrebird.sh)"
```

## 白名单线路
白名单线路是大陆优化线路，可被用来白名单用户直连，但会被限速100Mbps  
非白名单使用被机器人扫到会被封禁账号

### 江苏等墙中墙地区无法使用白名单线路？
原因是墙中墙地区是只允许白名单域名，这个需要到国内运营商备案，鸟一个小小emby肯定没有这个能量的，不过可以将白名单线路的域名解析成ip，然后使用ip直连，这样就可以绕过域名限制  
打开这个网站 https://tool.chinaz.com/dns/
![LyrebirdEmby](/images/whitelinedns.png "dns解析")
![LyrebirdEmby](/images/whitelineip.png "ip解析")
复制好解析的IP后，用这个ip代替白名单的线路即可，端口保持不变  

:::warning
这个ip地址是会变动的，大概一周一次，当你连不上这个线路的时候，可以重试上面的步骤。没办法，这是墙中墙地区的劣势  
解析出来的ip不要泄漏给别人，白名单线路没有CDN等保护，十分脆弱请爱护它  
:::