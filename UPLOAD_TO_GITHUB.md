# 创建 GitHub 仓库并上传代码

## 步骤 1: 在 GitHub 上创建新仓库

1. 访问 [https://github.com/new](https://github.com/new)
2. 在 "Repository name" 字段中输入: `anding-spotting`
3. 在 "Description" 字段中输入: `Professional Aviation Photography & Media Website`
4. 选择 "Public" (公开) 或 "Private" (私有)
5. ⚠️ **重要**: 不要勾选以下选项:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. 点击 "Create repository" 按钮

## 步骤 2: 连接本地仓库到 GitHub

创建仓库后，GitHub 会显示快速设置页面。请复制页面上的命令，或者使用下面的命令:

```bash
# 添加远程仓库地址（将 YOUR_USERNAME 替换为您的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/anding-spotting.git

# 重命名分支为 main
git branch -M main

# 推送代码到 GitHub
git push -u origin main
```

## 步骤 3: 验证上传成功

推送成功后，您可以在 GitHub 仓库页面看到所有文件。

## 后续开发

以后每次更新代码时，使用以下命令:

```bash
git add .
git commit -m "Your commit message"
git push
```

## 克隆到其他电脑

如果要在其他电脑上继续开发:

```bash
git clone https://github.com/YOUR_USERNAME/anding-spotting.git
cd anding-spotting
npm install
npm run dev
```
