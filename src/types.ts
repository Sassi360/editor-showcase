import { BubbleMenuPluginProps } from "@tiptap/extension-bubble-menu";

type ShowShowFn = Exclude<Required<BubbleMenuPluginProps>["shouldShow"], null>;
export type ShowShowProps = Parameters<ShowShowFn>["0"];
