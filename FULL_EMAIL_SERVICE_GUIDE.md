# 📧 使用 @adplanespot.org 发送和回复邮件

## 🎯 完整邮箱解决方案

### 方案对比

| 方案 | 价格 | 特点 | 推荐度 |
|------|------|------|--------|
| **Zoho Mail** | 免费(5用户) | 完整邮箱，支持SMTP | ⭐⭐⭐⭐⭐ |
| **Outlook.com** | 免费 | 自定义域名邮箱 | ⭐⭐⭐⭐ |
| **ProtonMail** | $5/月起 | 安全邮箱，隐私保护 | ⭐⭐⭐⭐ |
| **Fastmail** | $3/月起 | 简单易用 | ⭐⭐⭐ |
| **Google Workspace** | $6/月起 | Google生态集成 | ⭐⭐ |

---

## 🚀 方案 1: Zoho Mail（免费且最推荐）

### 功能
- ✅ 免费 5 个邮箱账户
- ✅ 每个账户 5GB 存储
- ✅ 支持 SMTP/IMAP
- ✅ 网页端和移动端APP
- ✅ 可以使用 `@adplanespot.org` 发送和接收
- ✅ 支持自定义签名和品牌

### 设置步骤

#### 步骤 1: 注册 Zoho Mail

1. 访问: https://www.zoho.com/mail
2. 点击 **"Get Started"** → 选择 **"Business Email"**
3. 选择 **"Forever Free Plan"**
4. 输入您的域名: `adplanespot.org`
5. 完成注册

#### 步骤 2: 验证域名

Zoho 会要求在 Cloudflare 中添加 DNS 记录进行验证：

1. 在 Zoho 后台，找到验证信息
2. 在 Cloudflare DNS 设置中添加 TXT 记录
3. 等待验证通过（通常几分钟）

#### 步骤 3: 添加 DNS 记录

在 Cloudflare 中添加以下记录：

**MX 记录（邮件交换）**：
```
Name: @
Content: mx.zoho.com
Priority: 10

Name: @
Content: mx2.zoho.com
Priority: 20

Name: @
Content: mx3.zoho.com
Priority: 50
```

**TXT 记录（SPF 验证）**：
```
Name: @
Content: v=spf1 include:zoho.com ~all
```

**CNAME 记录（DKIM 签名）**：
```
Name: [由 Zoho 提供，格式类似 zm._domainkey]
Content: [由 Zoho 提供]
```

**DMARC 记录（可选但推荐）**：
```
Name: _dmarc
Content: v=DMARC1; p=none; rua=mailto:dmarc@adplanespot.org
```

#### 步骤 4: 创建邮箱账户

在 Zoho 后台创建邮箱：
- `contact@adplanespot.org`
- `info@adplanespot.org`
- 等等...

#### 步骤 5: 配置邮件客户端

**网页版**: https://mail.zoho.com

**邮箱客户端配置（Outlook, Apple Mail, Thunderbird）**:
```
IMAP Server: imap.zoho.com
IMAP Port: 993
IMAP Security: SSL/TLS

SMTP Server: smtp.zoho.com
SMTP Port: 465
SMTP Security: SSL/TLS
Username: your-email@adplanespot.org
Password: 您的 Zoho 密码
```

---

## 📧 方案 2: Outlook.com（免费）

### 功能
- ✅ 免费自定义域名邮箱
- ✅ 15GB 存储
- ✅ 与 Microsoft 365 集成
- ✅ Outlook 客户端同步

### 设置步骤

1. 访问: https://outlook.live.com
2. 创建 Microsoft 账号（使用您的域名）
3. 在 Cloudflare 添加 MX 记录（Outlook 会提供）
4. 完成设置

---

## 🔐 方案 3: ProtonMail（隐私优先）

### 功能
- ✅ 端对端加密
- ✅ 免费 1GB，升级 $5/月
- ✅ Proton Bridge 支持 IMAP/SMTP
- ✅ 匿名化保护

### 设置步骤
1. 访问: https://proton.me/mail
2. 注册 Plus 账户（自定义域名需要 Plus）
3. 添加您的域名
4. 在 Cloudflare 添加 DNS 记录
5. 配置 Proton Bridge

---

## ✉️ 网站联系表单发送配置

设置好域名邮箱后，可以配置网站表单使用 SMTP 发送。

### 方案 A: 使用 EmailJS + Zoho SMTP

1. 注册 EmailJS
2. 配置 Email Services 为 SMTP
3. 使用 Zoho SMTP 信息

### 方案 B: 使用 Resend（开发者友好）

1. 访问: https://resend.com
2. 免费额度：每天 3,000 封
3. 添加域名并验证（在 Cloudflare）
4. 使用 API 发送邮件

### Resend 集成示例

```typescript
// src/components/ContactForm.tsx
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      from: 'contact@adplanespot.org',
      to: 'your-email@adplanespot.org',
      subject: 'New message from ' + formData.get('name'),
      text: `From: ${formData.get('name')} <${formData.get('email')}>\n\n${formData.get('message')}`
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_RESEND_API_KEY',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      setStatus('Message sent!')
      e.target.reset()
    } else {
      setStatus('Failed to send message')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 bg-white/10 rounded-lg text-white"
      />
      
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 bg-white/10 rounded-lg text-white"
      />
      
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={5}
        className="w-full p-3 bg-white/10 rounded-lg text-white"
      />
      
      <button
        type="submit"
        className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/80 transition-colors"
      >
        Send
      </button>
      
      {status && <p className="text-white">{status}</p>}
    </form>
  )
}
```

---

## 🎯 我的推荐方案

**最佳组合**：

1. **Zoho Mail** (免费)
   - 用于接收和发送邮件
   - `contact@adplanespot.org`
   - 网页端和移动APP

2. **Resend** (免费额度)
   - 用于网站联系表单
   - 专业的邮件发送API

---

## 📋 快速开始指南

### 优先做的事情

1. 访问 https://www.zoho.com/mail
2. 注册免费 Business Email
3. 验证域名（在 Cloudflare 添加 TXT/MX 记录）
4. 创建邮箱账户
5. 配置邮件客户端（如 Outlook, Apple Mail）

---

## 🚀 需要我帮您做什么？

1. 指导 Zoho Mail 设置
2. 在网站添加联系表单（使用 Resend）
3. 配置 DNS 记录指南
4. 或者其他需求

**告诉我您的选择！** 💪
