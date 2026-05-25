# 照片存储方案指南

## 已完成的配置

✅ **已配置 Cloudflare R2 存储**
✅ **已更新所有组件使用新的图片路径**
✅ **已创建上传脚本**

---

## 当前配置

### 生产环境
- **R2 Bucket**: `andingspotting-photos`
- **CDN URL**: `https://pub-0869994e37154e358387e8b8397f1273.r2.dev`
- **存储容量**: 免费 10GB
- **请求限额**: 1000万次/月

### 开发环境
- 使用本地 `public/images/` 目录

---

## 上传照片到 R2

### 方法1: 使用脚本 (推荐)

```bash
# 设置环境变量
export R2_ACCESS_KEY_ID=<your-access-key>
export R2_SECRET_ACCESS_KEY=<your-secret-key>
export R2_ACCOUNT_ID=<your-account-id>

# 运行上传脚本
bash scripts/upload_to_r2.sh
```

### 方法2: 手动上传

1. 登录 Cloudflare Dashboard
2. 进入 R2 → `andingspotting-photos`
3. 点击 "Upload" → 选择文件

---

## 代码结构

### 配置文件
`src/config/imageConfig.ts` - 统一管理图片基础URL

```typescript
export const IMAGE_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://pub-0869994e37154e358387e8b8397f1273.r2.dev'
  : '/images'

export const getImageUrl = (path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  return `${IMAGE_BASE_URL}${path}`
}
```

### 已更新的组件
- `src/components/HeroSection.tsx`
- `src/components/PhotoCard.tsx`
- `src/components/ReportCard.tsx`
- `src/components/Lightbox.tsx`
- `src/pages/ReportDetailPage.tsx`

---

## 优势

✅ 与 Cloudflare Pages 完美集成  
✅ 免费额度充足 (10GB + 1000万请求/月)  
✅ 全球 CDN 加速  
✅ 零传出费用  
✅ GitHub 仓库体积大幅减小  

---

## 迁移步骤总结

1. ✅ 创建 Cloudflare R2 Bucket
2. ✅ 配置公开访问域名
3. ✅ 创建统一图片配置
4. ✅ 更新所有组件使用 `getImageUrl()`
5. ✅ 上传照片到 R2
6. ✅ 删除本地大照片 (可选)

---

## 未来扩展

如需添加新照片:
1. 放在 `public/images/` 目录
2. 更新 `src/data/photos.ts` 或 `src/data/reports.ts`
3. 运行上传脚本同步到 R2
4. 提交代码即可