# Turborepo Deploy Demo

Demonstrates how to deploy apps from a Turborepo monorepo using GitHub Actions.

## 📁 Project Structure

```
turborepo-deploy/
├── apps/
│   ├── web/          # Frontend app (depends on shared)
│   ├── api/          # Backend API (depends on shared)
│   └── admin/        # Admin dashboard (depends on shared)
├── packages/
│   └── shared/       # Shared utilities
├── turbo.json        # Turborepo config
├── package.json      # Root package.json
└── pnpm-workspace.yaml
```

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run all apps in dev mode
pnpm dev

# Build all apps
pnpm build

# Deploy all apps
pnpm deploy
```

## ⚡ Key Command: Affected Detection

```bash
# Deploy only affected apps since main branch
turbo run deploy --filter=...[origin/main]
```

## 🧪 Demo: Test Affected Detection

1. **Change only `apps/web/src/index.js`**
   - Only `@demo/web` will be deployed

2. **Change `packages/shared/src/index.js`**
   - ALL apps (web, api, admin) will be deployed (they depend on shared)

3. **Change only `apps/api/src/index.js`**
   - Only `@demo/api` will be deployed

## 🔍 How It Works

1. `--filter=...[origin/main]` - Detects which packages changed since main
2. `...` - Includes dependencies of changed packages
3. Turbo runs `deploy` task only on affected packages

## 📊 Useful Commands

```bash
# See what would be affected
turbo run build --filter=...[origin/main] --dry-run

# Deploy specific app
turbo run deploy --filter=@demo/web

# Deploy app and its dependencies
turbo run deploy --filter=@demo/web...

# Deploy affected since last commit
turbo run deploy --filter=...[HEAD^1]
```

## 🔗 GitHub Actions

The `.github/workflows/deploy.yml` workflow:

- Triggers on push to `main`
- Uses `--filter=...[origin/main]` to deploy only affected apps
- Supports matrix deployment per app (optional)

## Workflow

See `.github/workflows/deploy.yml` for:

- **deploy-affected**: Deploy only what changed
- **deploy-matrix**: Matrix strategy per app
