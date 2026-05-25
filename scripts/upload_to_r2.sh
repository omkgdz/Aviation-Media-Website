#!/bin/bash

echo "=== AnDing Spotting - Cloudflare R2 Upload Script ==="
echo ""

if [ -z "$R2_ACCESS_KEY_ID" ] || [ -z "$R2_SECRET_ACCESS_KEY" ] || [ -z "$R2_ACCOUNT_ID" ]; then
  echo "ERROR: Please set environment variables first:"
  echo "export R2_ACCESS_KEY_ID=<your-access-key>"
  echo "export R2_SECRET_ACCESS_KEY=<your-secret-key>"
  echo "export R2_ACCOUNT_ID=<your-account-id>"
  exit 1
fi

BUCKET_NAME="andingspotting-photos"
LOCAL_DIR="public/images"

echo "Checking if rclone is installed..."
if ! command -v rclone &> /dev/null; then
  echo "Installing rclone..."
  brew install rclone
fi

echo ""
echo "Configuring R2 remote..."
rclone config create r2 cloudflare \
  access_key_id="$R2_ACCESS_KEY_ID" \
  secret_access_key="$R2_SECRET_ACCESS_KEY" \
  endpoint="https://$R2_ACCOUNT_ID.r2.cloudflarestorage.com"

echo ""
echo "Uploading photos to R2..."
rclone sync "$LOCAL_DIR" r2:"$BUCKET_NAME"/ \
  --progress \
  --no-check-certificate

echo ""
echo "=== Upload Complete! ==="
echo "Your photos are now hosted at: https://pub-0869994e37154e358387e8b8397f1273.r2.dev/"
echo ""
echo "Don't forget to update src/config/imageConfig.ts with the correct R2 URL"