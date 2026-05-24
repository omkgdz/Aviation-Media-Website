# 📧 为 adplanespot.org 添加邮件服务

## 方案对比

| 方案 | 成本 | 特点 | 推荐度 |
|------|------|------|--------|
| **Cloudflare Email Routing** | 免费 | 邮件转发，无限别名 | ⭐⭐⭐⭐⭐ |
| **EmailJS** | 免费额度 | 网站表单发送邮件 | ⭐⭐⭐⭐ |
| **Formspree** | 免费额度 | 表单提交到邮箱 | ⭐⭐⭐⭐ |
| **Resend** | 免费额度 | 开发者邮件API | ⭐⭐⭐ |

---

## 🚀 方案 1: Cloudflare Email Routing（推荐）

### 功能
- ✅ 免费邮件转发
- ✅ 无限邮箱别名
- ✅ 例如: `contact@adplanespot.org` → 您的个人邮箱
- ✅ 无需代码，DNS 配置即可

### 设置步骤

#### 步骤 1: 登录 Cloudflare
1. 访问: https://dash.cloudflare.com
2. 选择您的域名: `adplanespot.org`

#### 步骤 2: 启用 Email Routing
1. 左侧菜单点击 **"Email"** → **"Email Routing"**
2. 点击 **"Enable Email Routing"**
3. Cloudflare 会自动添加必要的 DNS 记录

#### 步骤 3: 添加邮件转发规则
1. 点击 **"Routing rules"** 标签
2. 点击 **"Create address"**
3. 设置转发规则:

```
邮件地址: contact@adplanespot.org
转发到: your-personal-email@gmail.com
```

#### 步骤 4: 验证邮箱
1. Cloudflare 会发送验证邮件到您的个人邮箱
2. 点击验证链接
3. ✅ 完成！

### 常用邮箱别名建议

```
contact@adplanespot.org      → 联系我们
info@adplanespot.org         → 一般咨询
media@adplanespot.org        → 媒体合作
support@adplanespot.org      → 技术支持
hello@adplanespot.org        → 欢迎邮件
```

---

## ✉️ 方案 2: 添加联系表单（EmailJS）

如果您想在网站上添加联系表单，让访客直接发送邮件给您。

### 步骤 1: 注册 EmailJS

1. 访问: https://www.emailjs.com
2. 注册免费账号
3. 免费额度: 200 封邮件/月

### 步骤 2: 配置邮件服务

1. **添加邮件服务**
   - Dashboard → "Email Services" → "Add New Service"
   - 选择您的邮箱提供商（Gmail, Outlook 等）
   - 授权连接

2. **创建邮件模板**
   - "Email Templates" → "Create New Template"
   - 模板示例:
   ```
   Subject: New message from {{from_name}}
   
   You have a new message:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Message: {{message}}
   ```

3. **获取 API 密钥**
   - "Integration" → 复制您的:
     - Service ID
     - Template ID
     - Public Key

### 步骤 3: 在网站中集成

安装 EmailJS SDK:
```bash
npm install @emailjs/browser
```

创建联系表单组件:

```typescript
// src/components/ContactForm.tsx
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const form = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'YOUR_SERVICE_ID',     // 替换为您的 Service ID
      'YOUR_TEMPLATE_ID',    // 替换为您的 Template ID
      form.current,
      'YOUR_PUBLIC_KEY'      // 替换为您的 Public Key
    )
    .then((result) => {
      setStatus('Message sent successfully!')
      form.current.reset()
    }, (error) => {
      setStatus('Failed to send message. Please try again.')
    })
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <div>
        <label className="block text-white mb-2">Name</label>
        <input
          type="text"
          name="from_name"
          required
          className="w-full p-3 bg-white/10 rounded-lg text-white"
        />
      </div>
      
      <div>
        <label className="block text-white mb-2">Email</label>
        <input
          type="email"
          name="from_email"
          required
          className="w-full p-3 bg-white/10 rounded-lg text-white"
        />
      </div>
      
      <div>
        <label className="block text-white mb-2">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full p-3 bg-white/10 rounded-lg text-white"
        />
      </div>
      
      <button
        type="submit"
        className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/80 transition-colors"
      >
        Send Message
      </button>
      
      {status && (
        <p className="text-white mt-4">{status}</p>
      )}
    </form>
  )
}
```

---

## 🎯 方案 3: Formspree（更简单）

无需后端，直接在 HTML 表单中使用。

### 步骤 1: 注册 Formspree

1. 访问: https://formspree.io
2. 注册账号
3. 创建新表单
4. 获取表单端点: `https://formspree.io/f/YOUR_FORM_ID`

### 步骤 2: 在网站中使用

```typescript
// src/components/SimpleContactForm.tsx
import { useState } from 'react'

export default function SimpleContactForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      setStatus('Message sent!')
      e.target.reset()
    } else {
      setStatus('Error sending message')
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
        className="px-6 py-3 bg-secondary text-white rounded-lg"
      >
        Send
      </button>
      
      {status && <p className="text-white">{status}</p>}
    </form>
  )
}
```

---

## 🌟 推荐组合方案

**最佳实践**:

1. **Cloudflare Email Routing** (免费)
   - 用于接收邮件
   - 设置 `contact@adplanespot.org` 转发到您的个人邮箱

2. **EmailJS 或 Formspree** (免费额度)
   - 用于网站联系表单
   - 访客可以直接在网站上发送消息

---

## 📋 快速开始

### 只需要邮件转发？
→ 使用 **Cloudflare Email Routing**（5分钟设置）

### 需要网站联系表单？
→ 使用 **EmailJS** 或 **Formspree**（10分钟设置）

### 两者都要？
→ 先设置 Email Routing，再添加联系表单

---

## 🔧 需要我帮您实现哪个方案？

我可以帮您：
1. 指导 Cloudflare Email Routing 设置
2. 在网站中添加联系表单组件
3. 集成 EmailJS 或 Formspree

请告诉我您的选择！ 🚀
