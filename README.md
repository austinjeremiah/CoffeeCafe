### Setup

#### Configure

You need a `projectId` from the WalletConnect Cloud to run the Hyperlane Warp Route UI. Sign up to [WalletConnect Cloud](https://cloud.walletconnect.com) to create a new project.

#### Build

```sh
# Install dependencies
yarn

# Build Next project
yarn build
```

### Run

You can add `.env.local` file next to `.env.example` where you set `projectId` copied from WalletConnect Cloud.

```sh
# Start the Next dev server
yarn dev
# Or with a custom projectId
NEXT_PUBLIC_WALLET_CONNECT_ID=<projectId> yarn dev
```

### Test

```sh
# Lint check code
yarn lint

# Check code types
yarn typecheck
```

### Format

```sh
# Format code using Prettier
yarn prettier
```

### Clean / Reset

```sh
# Delete build artifacts to start fresh 
yarn clean
```

## Deployment

yarn 
yarn build 
yarn dev to run in local host :)

The easiest hosting solution for this Next.JS app is to create a project on Vercel.

## Learn more

