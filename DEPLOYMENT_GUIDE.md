# 🚀 Deploy & Content Management Setup Guide

## 部署方案对比

### 选项 1: Vercel + TinaCMS ⭐ 推荐
**优点**: 
- 免费部署
- 自动从 GitHub 拉取更新
- TinaCMS 可以直接在网站上编辑内容
- 无需命令行操作

### 选项 2: Netlify + Netlify CMS
**优点**:
- 免费托管
- 拖拽上传功能
- 内置 CMS

### 选项 3: 传统方式（仅 Vercel）
- 需要手动更新代码

---

## 📋 推荐方案详细步骤

### 第一步：部署到 Vercel

1. **访问 Vercel**
   - 打开: https://vercel.com
   - 使用 GitHub 账号登录（推荐）或邮箱注册

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择 "Import Git Repository"
   - 选择您的仓库: `omkgdz/Aviation-Media-Website`
   - Vercel 会自动检测框架（React + Vite）

3. **配置项目**
   - Framework Preset: Vite (应该已自动选择)
   - Root Directory: `./` (保持默认)
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **部署**
   - 点击 "Deploy"
   - 等待 1-2 分钟
   - 获得一个免费的 `.vercel.app` 域名
   - 例如: `anding-spotting.vercel.app`

---

### 第二步：添加 TinaCMS（内容管理系统）

TinaCMS 允许您在网站上直接编辑内容，无需编写代码。

1. **安装 TinaCMS**
   ```bash
   npm install tinacms @tinacms/cli
   ```

2. **配置 TinaCMS**
   - 创建配置文件
   - 添加内容编辑界面
   - 配置 GitHub 存储

3. **使用方法**
   - 访问您的网站
   - 点击 "Edit Site" 按钮
   - 直接在网站上编辑文本和内容
   - 保存后自动推送到 GitHub
   - Vercel 自动重新部署

---

## 🔄 后续更新内容流程

### 方式 A: 使用 TinaCMS（在网站上直接编辑）
1. 打开您的网站
2. 点击 "Edit Site" 按钮
3. 编辑文字内容
4. 点击保存
5. 网站自动更新

### 方式 B: 编辑 GitHub 文件
1. 访问 https://github.com/omkgdz/Aviation-Media-Website
2. 进入 `src/data/` 文件夹
3. 点击要编辑的文件
4. 点击编辑图标
5. 修改内容并提交
6. 网站自动重新部署

### 方式 C: 本地开发后推送
1. 克隆仓库到本地
2. 编辑文件
3. 推送到 GitHub
4. Vercel 自动部署

---

## 🌐 自定义域名（可选）

如果您想用自己的域名（如 `www.anding-spotting.com`）:

1. 在 Vercel 中添加域名
2. 在您的域名注册商处配置 DNS
3. Vercel 提供免费的 SSL 证书

---

## ⚙️ 自动部署设置

每次您推送到 GitHub 的 `main` 分支，Vercel 会自动：
1. 拉取最新代码
2. 运行构建
3. 部署新版本

无需任何额外配置！

---

## 📱 移动端编辑

TinaCMS 完全支持移动设备，您可以在手机上直接编辑内容。

---

## ❓ 遇到问题？

如果部署失败，检查：
- Build Command 是否正确
- Node.js 版本（需要 18+）
- 所有依赖是否在 package.json 中

---

## 🎯 推荐的完整流程

1. ✅ 已完成：上传到 GitHub
2. ⏳ 下一步：部署到 Vercel（约 10 分钟）
3. ⏳ 可选：添加 TinaCMS（约 20 分钟）
4. ✅ 完成：您的网站已上线！

准备好开始了吗？我可以帮您一步步完成部署！
