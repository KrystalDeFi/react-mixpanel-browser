import { type Config } from 'mixpanel-browser';
import { type ProviderProps } from 'react';
import { type MixpanelContext } from './mixpanelContext.js';
export interface MixpanelProviderProps extends Omit<ProviderProps<MixpanelContext>, 'value'> {
    config?: Partial<Config>;
    name?: string;
    token?: string;
}
export declare function MixpanelProvider({ children, config: _config, name: _name, token, }: MixpanelProviderProps): import("react/jsx-runtime").JSX.Element;
