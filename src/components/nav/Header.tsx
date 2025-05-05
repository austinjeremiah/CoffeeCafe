import { ConnectWalletButton } from '../../features/wallet/ConnectWalletButton';

export function Header() {
  return (
    <header className="w-full px-2 pb-2 pt-3 sm:px-6 lg:px-12">
      <div className="flex justify-end">
        <ConnectWalletButton />
      </div>
    </header>
  );
}
