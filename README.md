# PlantIQX - Where Minds and Machines Merge

Intelligent Industrial Operations Platform — marketing website and SGL dashboard app.

## Project Structure

```
├── index.html              # Homepage
├── about.html              # About page
├── products.html           # Products page
├── contact.html            # Contact page
├── *.html                  # Other marketing pages
├── assets/                 # Images, icons, SVGs
├── css/                    # Stylesheets
│   ├── style.css           # Main styles
│   ├── responsive.css      # Responsive breakpoints
│   └── modules/            # Modular CSS (navbar, hero, etc.)
├── js/                     # JavaScript files
├── components/             # Reusable header & footer
├── sgl/                    # SGL React Dashboard (pre-built)
│   ├── index.html          # SPA entry point
│   └── assets/             # Bundled JS/CSS
├── nginx/                  # Nginx configuration
│   └── nginx.conf
├── Dockerfile              # Docker image definition
├── docker-compose.yml      # Docker Compose config
├── .dockerignore
└── .gitignore
```

## Local Development

```bash
# Option 1: VS Code Live Server
# Install "Live Server" extension, right-click index.html → Open with Live Server

# Option 2: Python
python -m http.server 8000

# Option 3: Docker
docker compose up --build
# → http://localhost:3000
```

## Docker Build & Run

```bash
# Build the image
docker build -t plantiqx-web .

# Run the container
docker run -d -p 3000:80 --name plantiqx-web plantiqx-web

# Or use Docker Compose
docker compose up -d --build
```

## Deploy with Dokploy (VPS)

### 1. Push to Git

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Setup in Dokploy

1. Open your Dokploy dashboard (`https://your-vps:3000`)
2. Click **Create Project** → name it `plantiqx`
3. Inside the project, click **Create Service** → choose **Application**
4. Select **Git** as source → connect your repository
5. Configure:
   - **Branch**: `main`
   - **Build Type**: `Dockerfile`
   - **Dockerfile Path**: `./Dockerfile`
   - **Port (Expose)**: `80`
6. Under **Domains**, add your domain (e.g., `plantiqx.com`)
   - Dokploy auto-provisions SSL via Let's Encrypt
7. Click **Deploy**

### 3. Update Deployment

After pushing changes to Git:
- Dokploy auto-deploys if webhook is configured, OR
- Click **Deploy** manually in the Dokploy dashboard

## Environment Variables

| Variable | Default | Description          |
|----------|---------|----------------------|
| `PORT`   | `3000`  | Host port mapping    |