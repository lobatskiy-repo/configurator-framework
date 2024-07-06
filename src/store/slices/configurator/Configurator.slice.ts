import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Configuration } from "@threekit/rest-api";

interface ConfiguratorStateI {
  assetId: string | null;
  isBuilding: boolean;
  isProcessing: boolean;
  configuration: Record<string, Configuration>;
}

const initialState: ConfiguratorStateI = {
  assetId: null,
  isBuilding: true,
  isProcessing: false,
  configuration: {},
};

const configuratorSlice = createSlice({
  name: "configurator",
  initialState,
  reducers: {
    changeStatusBuilding: (state, action: PayloadAction<boolean>) => {
      state.isBuilding = action.payload;
    },

    changeStatusProcessing: (state, action: PayloadAction<boolean>) => {
      state.isProcessing = action.payload;
    },
    changeValueConfiguration: (
      state,
      action: PayloadAction<{
        key: string;
        value: Configuration;
      }>
    ) => {
      const { key, value } = action.payload;
      state.configuration = {
        ...state.configuration,
        [key]: { ...value },
      };
    },
    removeValuesConfigurationByKeys: (
      state,
      action: PayloadAction<string[]>
    ) => {
      action.payload.forEach((key) => {
        delete state.configuration[key];
      });
    },

    changeAssetId: (state, action: PayloadAction<string>) => {
      state.assetId = action.payload;
    },
  },
});

export const {
  changeStatusBuilding,
  changeValueConfiguration,
  removeValuesConfigurationByKeys,
  changeAssetId,
  changeStatusProcessing,
} = configuratorSlice.actions;
export default configuratorSlice.reducer;
