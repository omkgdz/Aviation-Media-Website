# 🎯 快速启动：让您的网站上线

## ⏱️ 预计时间：10 分钟

## 📋 第一步：部署到 Vercel（5 分钟）

1. **打开 Vercel**
   浏览器访问: https://vercel.com

2. **登录**
   点击 "Sign Up" → 使用 GitHub 登录

3. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择: `omkgdz/Aviation-Media-Website`
   - 如果没看到，点击 "Install GitHub App"

4. **配置并部署**
   - Framework: Vite ✓
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - 点击 "Deploy"

5. **获得链接**
   等待 1-2 分钟，获得: `your-project.vercel.app`

---

## ✏️ 第二步：更新内容（5 分钟）

### 方法 A: 在 Vercel 中编辑（推荐）
1. 打开 https://vercel.com/dashboard
2. 点击您的项目
3. 点击 "Edit" → "Edit with Vercel"
4. 进入 `src/data/` 文件夹
5. 点击文件 → 编辑图标
6. 修改内容 → Commit
7. ✅ 自动重新部署！

### 方法 B: 在 GitHub 中编辑
1. 打开 https://github.com/omkgdz/Aviation-Media-Website
2. 进入 `src/data/`
3. 点击文件 → 编辑图标
4. 修改内容 → Commit changes
5. ✅ Vercel 自动更新！

---

## 🎨 第三步：添加图片

1. 在项目中找到或创建 `public/images/` 文件夹
2. 上传您的航空照片
3. 在数据文件中更新图片路径

示例（在 `src/data/members.ts` 中）:
```typescript
avatar: '/images/members/my-photo.jpg'
```

---

## 🔧 需要修改的文件位置

```
src/data/
├── members.ts      # 团队成员信息
├── photos.ts       # 图片库数据
├── reports.ts      # 航展报道
└── spottingLogs.ts # Spotting 日志
```

---

## 🌐 自定义域名（可选）

想要用您自己的域名？

1. Vercel → 项目 → Settings → Domains
2. 添加您的域名（如: `anding-spotting.com`）
3. 按提示配置 DNS 记录
4. 等待生效（几分钟到48小时）

---

## 🎉 完成！

按照以上步骤，您将在 10 分钟内：
- ✅ 网站上线运行
- ✅ 可以随时更新内容
- ✅ 图片可添加
- ✅ 自动部署更新

有任何问题随时问我！ 🚀
