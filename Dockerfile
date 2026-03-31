FROM nginx:1.27-alpine

# Install curl for health check
RUN apk add --no-cache curl

# Remove default nginx config and html
RUN rm -rf /etc/nginx/conf.d/default.conf /usr/share/nginx/html/*

# Copy custom nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy website files
COPY index.html /usr/share/nginx/html/
COPY about.html /usr/share/nginx/html/
COPY asset-management.html /usr/share/nginx/html/
COPY assetdashboard.html /usr/share/nginx/html/
COPY career.html /usr/share/nginx/html/
COPY condition-monitoring.html /usr/share/nginx/html/
COPY contact.html /usr/share/nginx/html/
COPY energy-management.html /usr/share/nginx/html/
COPY news-detail.html /usr/share/nginx/html/
COPY news.html /usr/share/nginx/html/
COPY predictive-maintenance.html /usr/share/nginx/html/
COPY products.html /usr/share/nginx/html/
COPY security.html /usr/share/nginx/html/
COPY surveillance.html /usr/share/nginx/html/
COPY utilities-monitoring.html /usr/share/nginx/html/
COPY vision-ai.html /usr/share/nginx/html/

# Copy asset directories
COPY assets/ /usr/share/nginx/html/assets/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY components/ /usr/share/nginx/html/components/

# Copy SGL app
COPY sgl/ /usr/share/nginx/html/sgl/

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
