import { defineStore } from "pinia";
import { ref } from "vue";

import {
  TonConnectUI,
  toUserFriendlyAddress,
  ConnectedWallet,
  ITonConnect,
} from "@tonconnect/ui";

export const useWalletStore = defineStore("wallet", () => {
  // constants
  const tonConnectUi = ref<TonConnectUI | null>(null);
  const unsubscribe = ref<ReturnType<ITonConnect["onStatusChange"]> | null>(
    null
  );
  const friendlyWalletAddress = ref<string>("");

  // methods
  const init = async (): Promise<void> => {
    setConnect();
    setUiOptions();
    onStatusChange();
  };

  const setConnect = (): void => {
    tonConnectUi.value = new TonConnectUI({
      manifestUrl:
        "https://valeravasilevsky.github.io/bubbles_heroes/tonconnect-manifest.json",
      buttonRootId: "ton-connect",
    });
  };

  const onStatusChange = (): void => {
    if (!tonConnectUi.value) return;

    unsubscribe.value = tonConnectUi.value.onStatusChange(
      (walletInfo: ConnectedWallet | null) => {
        friendlyWalletAddress.value = walletInfo?.account.address
          ? toUserFriendlyAddress(walletInfo.account.address)
          : "";
      }
    );
  };

  const setUiOptions = (): void => {
    if (!tonConnectUi.value) return;

    tonConnectUi.value.uiOptions = {
      uiPreferences: {
        borderRadius: "m",

        colorsSet: {
          DARK: {
            connectButton: {
              background: "#1f1f1f",
              foreground: "#f9f9f9",
            },
          },
        },
      },
    };
  };

  const openModal = (): void => {
    if (!tonConnectUi.value) return;

    tonConnectUi.value.openModal();
  };

  const onDisconnect = (): void => {
    if (!tonConnectUi.value) return;

    tonConnectUi.value.disconnect();
  };

  return {
    init,
    openModal,
    onDisconnect,
  };
});
