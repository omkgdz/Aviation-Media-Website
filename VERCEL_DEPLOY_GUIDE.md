# 🌐 Vercel 部署指南

## 完整部署步骤

### 步骤 1: 访问 Vercel 并登录

1. 打开浏览器访问: **https://vercel.com**
2. 点击 "Sign Up" 或 "Log In"
3. **推荐**: 使用 GitHub 账号登录（这样可以直接导入您的仓库）
4. 授权 Vercel 访问您的 GitHub 账户

### 步骤 2: 创建新项目

1. 登录后，点击 **"Add New..."** 按钮
2. 选择 **"Project"**
3. 在 "Import Git Repository" 部分，找到并点击您的仓库:
   - `omkgdz/Aviation-Media-Website`
   - 如果没有显示，点击 "Install GitHub App" 安装 Vercel 应用到您的 GitHub 账户

### 步骤 3: 配置项目设置

在项目配置页面，设置以下内容:

```
Framework Preset:      Vite (应该已自动选择)
Build Command:         npm run build
Output Directory:      dist
Install Command:      npm install
```

**重要配置**:
- ✅ 勾选 "Include source files" (这样可以在 Vercel 中查看和编辑代码)
- Environment Variables: 留空（暂时不需要）

### 步骤 4: 部署

1. 点击 **"Deploy"** 按钮
2. Vercel 将开始构建和部署
3. 等待 1-2 分钟...
4. 🎉 部署成功！

### 步骤 5: 访问您的网站

部署完成后，您将获得一个免费的域名:
- 例如: `anding-spotting.vercel.app`

在浏览器中打开这个链接，您就能看到您的网站了！

---

## 📝 如何更新内容

### 方法 1: 通过 Vercel 编辑器（最简单）

1. 访问 https://vercel.com/dashboard
2. 点击您的项目 `Aviation-Media-Website`
3. 点击 **"Edit"** 按钮
4. 找到要编辑的文件（位于 `src/data/` 文件夹）:
   - `members.ts` - 团队成员信息
   - `photos.ts` - 图片库
   - `reports.ts` - 航展报道
   - `spottingLogs.ts` - Spotting 日志
5. 点击文件，点击编辑图标 ✏️
6. 修改内容
7. 点击 **"Commit"** 按钮
8. Vercel 会自动重新部署！

**优点**: 
- 不需要安装任何软件
- 随时随地可以编辑
- 自动部署

### 方法 2: 通过 GitHub 编辑器

1. 访问: https://github.com/omkgdz/Aviation-Media-Website
2. 进入 `src/data/` 文件夹
3. 点击要编辑的文件
4. 点击编辑图标 ✏️
5. 修改内容
6. 在页面底部填写提交信息
7. 点击 **"Commit changes"**
8. Vercel 自动检测到更新并重新部署！

### 方法 3: 本地编辑后推送

1. 在本地克隆仓库:
   ```bash
   git clone https://github.com/omkgdz/Aviation-Media-Website.git
   cd Aviation-Media-Website
   ```

2. 安装依赖:
   ```bash
   npm install
   ```

3. 运行开发服务器:
   ```bash
   npm run dev
   ```

4. 编辑文件
5. 提交并推送:
   ```bash
   git add .
   git commit -m "更新内容"
   git push
   ```

6. Vercel 自动重新部署！

---

## 🎨 添加图片

将图片文件添加到仓库:

1. 在 GitHub 或 Vercel 中打开项目
2. 进入 `public/images/` 目录
3. 点击 **"Add file"** → **"Upload files"**
4. 拖拽或选择您的图片文件
5. 提交更改

然后更新数据文件中的图片路径，例如:
```typescript
avatar: '/images/members/my-photo.jpg'
```

---

## 🔄 自动部署工作流

每次您推送代码到 GitHub 的 `main` 分支:

```
GitHub Push 
    ↓
Vercel 检测到更新
    ↓
自动拉取最新代码
    ↓
运行 npm install
    ↓
运行 npm run build
    ↓
部署新版本
    ↓
网站更新完成！
```

整个过程完全自动化！

---

## 🌟 自定义域名（可选）

如果您有自己的域名:

1. 在 Vercel 项目设置中，点击 **"Domains"**
2. 输入您的域名（例如: `www.anding-spotting.com`）
3. 点击 **Add**
4. Vercel 会显示需要在域名注册商处配置的 DNS 记录
5. 登录您的域名注册商网站，添加相应的 DNS 记录
6. 等待 DNS 传播（通常几分钟到48小时）
7. ✅ 配置完成！您的网站现在可以通过自定义域名访问了

---

## ❓ 常见问题

### Q: 部署失败了怎么办？

检查:
- Build Command 是否正确（应该是 `npm run build`）
- Output Directory 是否正确（应该是 `dist`）
- 查看 Vercel 的构建日志，找出错误原因

### Q: 如何回滚到之前的版本？

1. 在 Vercel Dashboard 中，点击项目
2. 点击 **"Deployments"** 标签
3. 找到要回滚的版本
4. 点击右侧的 **"..."** 按钮
5. 选择 **"Promote to Production"**

### Q: 可以添加协作者吗？

在 Vercel 项目设置中，点击 **"Members"**，可以邀请团队成员一起管理项目。

---

## 🚀 完成后的清单

- ✅ GitHub 仓库已创建
- ✅ 代码已推送到 GitHub  
- ⏳ 部署到 Vercel（按照本指南）
- ⏳ 自定义域名（可选）

按照以上步骤，您就能拥有自己的航空媒体网站了！

需要帮助吗？我可以提供更详细的指导！ 💪
