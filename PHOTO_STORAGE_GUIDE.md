# 照片存储方案指南

## 问题现状
- 当前照片: 20张，203MB
- GitHub: 只有5GB容量限制
- 单张照片平均: 10MB+

---

## 推荐方案：Cloudflare R2（⭐ 最佳）

### 优势
- ✅ 与Cloudflare Pages完美集成
- ✅ 免费: 10GB存储 + 1000万次/月请求
- ✅ 全球CDN加速
- ✅ 零传出费用

### 设置步骤

#### 1. 创建R2存储桶
1. 登录 Cloudflare Dashboard
2. 左侧菜单 → R2
3. 点击 "Create bucket"
4. 命名为 `andingspotting-photos` 或其他
5. 选择就近的地理位置（e.g., Western North America）

#### 2. 配置公开访问（可选但推荐）
1. 在Bucket页面 → "Settings" → "R2.dev subdomain"
2. 启用 "Allow access"
3. 记录下子域名：`<bucket-name>.<random>.r2.dev`

#### 3. 上传照片
方式A: 使用Cloudflare Dashboard（手动上传）
- 在Bucket页面 → "Upload" → 拖拽或选择文件

方式B: 使用Rclone（推荐大量上传）
```bash
# 配置R2
rclone config create r2 cloudflare \
  access_key_id=<your-access-key> \
  secret_access_key=<your-secret-key> \
  endpoint=https://<account-id>.r2.cloudflarestorage.com

# 上传
rclone sync public/images r2:<bucket-name>/
```

#### 4. 更新代码
修改 `src/data/photos.ts` 和 `src/data/reports.ts`，把所有图片路径从：
```typescript
url: '/images/reports/riat24/A7-MAB.jpg'
```

改为：
```typescript
url: 'https://<your-r2-domain>/reports/riat24/A7-MAB.jpg'
```

### 5. （可选）配置自定义域名
在Bucket设置 → "Custom Domains"，添加：
- `photos.adplanespot.org`
- 自动配置SSL和CDN

---

## 备选方案

### 方案2: Cloudinary
1. 注册 Cloudinary 免费账户（25GB）
2. 上传照片
3. 获取URL并更新代码

### 方案3: AWS S3
1. 创建S3存储桶
2. 配置静态网站托管
3. 配置CloudFront CDN（可选）

---

## 当前照片清单
- **RIAT24**: 11张，约96MB
- **Langkawi2025**: 9张，约107MB

**总计**: 203MB

建议先测试一下R2方案，体验更好！
