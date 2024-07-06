import { RootState } from "../../../";

export const getIsBuilding = (state: RootState) =>
  state.configurator.isBuilding;

export const getIsProcessing = (state: RootState) =>
  state.configurator.isProcessing;

export const getConfiguration = (state: RootState) =>
  state.configurator.configuration;

export const getAssetId = (state: RootState) => state.configurator.assetId;
