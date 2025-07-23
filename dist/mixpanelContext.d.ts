/// <reference types="react" />
import { type Mixpanel } from 'mixpanel-browser';
export type MixpanelContext = Mixpanel | undefined;
export declare const mixpanelContext: import("react").Context<MixpanelContext>;
