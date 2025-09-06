set -x
set -e

# Configure MinIO client alias
mc alias set local http://minio:9000 devminio devminiosecret

# Create bucket if it doesn't exist
mc mb local/stq-docs || true

# Enable versioning
mc version enable local/stq-docs

# Configure CORS
# mc cors set local/stq-docs /cors.xml

# Set anonymous access
mc anonymous set download local/stq-docs

# Verify bucket exists
mc ls local/stq-docs

echo "MinIO init complete."
