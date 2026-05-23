# 🚀 上传到 GitHub - 完整指南

## 当前状态
✅ Git 仓库已初始化
✅ 代码已提交
⚠️ 需要身份验证才能推送到 GitHub

## 方法一: 使用 GitHub Token（推荐）

### 步骤 1: 创建 GitHub Personal Access Token
1. 访问: https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 设置:
   - Note: "AnDing Spotting Upload"
   - Expiration: 选择 30 days 或自定义
   - Scopes: 勾选 ✅ repo (Full control of private repositories)
4. 点击 "Generate token"
5. ⚠️ 重要: 立即复制并保存 token，它只会显示一次！

### 步骤 2: 使用 Token 推送代码

在终端中运行（将 YOUR_TOKEN 替换为刚才创建的 token）:

```bash
cd "/Users/omkgdz/Documents/trae_projects/Spotting Media Website"
git remote set-url origin https://YOUR_TOKEN@github.com/omkgdz/Aviation-Media-Website.git
git push -u origin main
```

或者设置 Git 凭据:

```bash
git remote set-url origin https://github.com/omkgdz/Aviation-Media-Website.git
git config credential.helper store
git push -u origin main
# 输入用户名: omkgdz
# 输入密码: YOUR_TOKEN (不是GitHub密码！)
```

## 方法二: 使用 SSH 密钥

### 步骤 1: 检查是否有 SSH 密钥
```bash
ls ~/.ssh/id_rsa.pub
```

如果没有，生成一个新密钥:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### 步骤 2: 添加 SSH 密钥到 GitHub
1. 复制公钥: `cat ~/.ssh/id_rsa.pub`
2. 访问: https://github.com/settings/keys
3. 点击 "New SSH key"
4. 粘贴公钥并保存

### 步骤 3: 使用 SSH 推送
```bash
cd "/Users/omkgdz/Documents/trae_projects/Spotting Media Website"
git remote set-url origin git@github.com:omkgdz/Aviation-Media-Website.git
git push -u origin main
```

## 方法三: 手动创建仓库（无需终端操作）

如果您不想使用命令行，可以:

1. 访问 https://github.com/new
2. 创建仓库 `Aviation-Media-Website`
3. 下载项目 ZIP 文件并手动上传

但这个方法不推荐，因为会丢失 Git 历史。

## 快速检查清单

在运行推送命令前，请确认:

- [ ] 已在 GitHub 创建仓库 `Aviation-Media-Website`
- [ ] 选择了正确的身份验证方式（Token 或 SSH）
- [ ] 仓库名称拼写正确: Aviation-Media-Website

## 下一步

推送成功后，您可以:
- 🌐 在 https://github.com/omkgdz/Aviation-Media-Website 查看代码
- 📱 使用 GitHub Pages 部署网站
- 👥 邀请协作者

## 技术支持

如果遇到错误:
- "Authentication failed": Token 或密码错误
- "Repository not found": 仓库未创建或名称错误
- "Permission denied": Token 没有 repo 权限
