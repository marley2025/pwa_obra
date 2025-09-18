FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY pwa_obra/ /usr/share/nginx/html/
