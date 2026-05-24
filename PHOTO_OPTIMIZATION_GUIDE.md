# 照片优化与存储方案

## 方案A: Git LFS (GitHub Large File Storage) - 最简单！

Git LFS专门设计用于在Git仓库中存储大文件，是最简单的方案！

### 设置步骤
1. 安装 Git LFS
   ```bash
   brew install git-lfs
   # 或从 https://git-lfs.github.com/ 下载
   ```

2. 在仓库中启用 Git LFS
   ```bash
   git lfs install
   git lfs track "*.jpg"
   git lfs track "*.png"
   git lfs track "public/images/**"
   ```

3. 提交并推送
   ```bash
   git add .gitattributes
   git commit -m "Enable Git LFS for images"
   git push
   ```

### Git LFS免费额度
- GitHub免费用户：1GB存储 + 1GB带宽/月
- 如果不够，可以升级或使用其他方案

---

## 方案B: 优化现有照片（立即见效）

当前照片太大了（很多10MB+），让我们压缩一下！

### 使用ImageMagick压缩
```bash
# 安装ImageMagick
brew install imagemagick

# 批量压缩照片 - 降低质量到85%（几乎看不出差别）
cd public/images
mkdir -p optimized
find . -name "*.jpg" -exec convert {} -quality 85 -resize 2000x1500\> optimized/{} \;

# 测试对比大小
ls -lh
ls -lh optimized/
```

### 使用Squoosh（Web工具，更简单）
访问 https://squoosh.app/
- 可以批量优化图片
- 支持压缩到WebP格式（比JPG小很多）

### 优化效果预期
- 当前: 203MB
- 优化后: 约 60-80MB (压缩60-70%)

---

## 方案C: 完整方案组合（推荐）

1. **短期**: 使用Git LFS + 压缩现有照片
2. **中期**: 迁移到Cloudflare R2

---

## 当前照片大小统计
```
Total: 203MB
- RIAT24: 96MB
- Langkawi2025: 107MB
```

建议先从方案B和A开始，简单有效！
