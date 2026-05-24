# ☁️ Cloudflare Pages 部署指南

Cloudflare Pages 提供永久免费托管，非常适合您的航空媒体网站！

---

## 🚀 部署步骤

### 步骤 1: 访问 Cloudflare 并登录

1. 打开: https://pages.cloudflare.com
2. 点击 "Sign In"（使用 Cloudflare 账号登录）
3. 如果没有账号，先注册一个免费账号

### 步骤 2: 创建新项目

1. 在 Cloudflare Pages 仪表板中，点击 **"Create a project"**
2. 点击 **"Connect to Git"**
3. 选择您的代码托管平台: **GitHub**
4. 授权 Cloudflare 访问您的 GitHub 仓库

### 步骤 3: 选择仓库

在仓库列表中找到并选择:
- **Repository**: `omkgdz/Aviation-Media-Website`
- 点击 **"Begin setup"**

### 步骤 4: 配置构建设置

```
Project name:     Aviation-Media-Website (自动填充)

Build settings:
├── Framework preset:    Vite
├── Build command:       npm run build
├── Build output directory:  dist

Environment variables (可选):
└── NODE_VERSION:        20
```

**重要配置**:
- ✅ 确保 Framework preset 选择 **Vite**
- ✅ Build output directory 为 **dist**

点击 **"Save and Deploy"**

### 步骤 5: 等待部署完成

⏱️ 等待 1-3 分钟，Cloudflare 会自动：
1. 克隆仓库
2. 安装依赖
3. 构建项目
4. 部署到全球 CDN

### 🎉 部署成功！

您将获得一个免费的 Cloudflare Pages 域名，例如:
**`anding-spotting.pages.dev`**

---

## ✏️ 更新内容流程

每次您推送到 GitHub 的 `main` 分支：

```
GitHub Push 
    ↓
Cloudflare 自动检测
    ↓
自动构建
    ↓
部署到全球 CDN
    ↓
网站更新完成！
```

### 三种更新方式

**方式 1: GitHub 在线编辑**
1. 打开 https://github.com/omkgdz/Aviation-Media-Website
2. 进入 `src/data/` 文件夹
3. 点击文件 → 编辑图标
4. 修改内容 → Commit
5. ✅ Cloudflare 自动部署！

**方式 2: Vercel 风格在线编辑（可选）**
Cloudflare Pages 没有内置编辑器，但您可以使用 GitHub 的在线编辑功能。

**方式 3: 本地开发**
```bash
git clone https://github.com/omkgdz/Aviation-Media-Website.git
cd Aviation-Media-Website
npm install
npm run dev
# 编辑文件...
git push
```

---

## 🌐 自定义域名（免费）

1. 在 Cloudflare Pages 项目中，点击 **"Custom Domains"**
2. 点击 **"Set up a custom domain"**
3. 输入您的域名（如: `anding-spotting.com`）
4. 按照指示配置 DNS 记录
5. ✅ Cloudflare 自动提供免费 SSL 证书！

---

## 💰 Cloudflare Pages 定价

| 方案 | 价格 | 带宽 | 特点 |
|------|------|------|------|
| **Free** | $0 | 100GB/月 | 全球 CDN, SSL, 自动部署 |
| Pro | $20/月 | 无限 | 更多功能 |

对于您的航空媒体网站，**免费方案完全足够**！

---

## ⚡ Cloudflare Pages 优势

✅ 永久免费托管  
✅ 全球 300+ CDN 节点  
✅ 自动 HTTPS  
✅ DDoS 防护  
✅ 自定义域名支持  
✅ 自动部署（从 GitHub）  
✅ 零配置 SSL 证书  
✅ 预览部署（Pull Request 预览）

---

## 📝 编辑内容的文件位置

```
src/data/
├── members.ts      ← 团队成员
├── photos.ts       ← 图片库
├── reports.ts      ← 航展报道
└── spottingLogs.ts ← Spotting日志
```

---

## 🖼️ 添加图片

1. 在 GitHub 中进入 `public/images/` 文件夹
2. 点击 **"Add file"** → **"Upload files"**
3. 上传您的航空照片
4. 在数据文件中更新路径

---

## ❓ 常见问题

### Q: 部署失败了怎么办？

检查:
- Build command 是否为 `npm run build`
- Output directory 是否为 `dist`
- 查看构建日志（在 Cloudflare Pages 项目中）

### Q: 如何查看构建日志？

在 Cloudflare Pages 项目 → "Deployments" → 点击最近的部署 → "View build logs"

### Q: 需要配置环境变量吗？

目前不需要，项目使用默认配置即可运行。

---

## 🚀 开始部署

现在打开 https://pages.cloudflare.com 开始部署吧！

如果需要帮助，随时告诉我！ 💪
