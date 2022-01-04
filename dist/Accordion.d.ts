import { default as React } from 'react';
import { OrientationRuleOptions } from '@nodestrap/basic';
import { TogglerActiveProps } from '@nodestrap/indicator';
import { defaultOrientationRuleOptions, OrientationName, OrientationVariant, ListStyle, ListVariant, ListItemProps, ListSeparatorItem, ListProps, List } from '@nodestrap/list';
export { defaultOrientationRuleOptions };
export declare const usesAccordionItemLayout: (options?: OrientationRuleOptions | undefined) => import("@cssfn/cssfn").StyleCollection;
export declare const usesAccordionItemVariants: () => import("@cssfn/cssfn").StyleCollection;
export declare const usesAccordionItemStates: () => import("@cssfn/cssfn").StyleCollection;
export declare const useAccordionItemSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{}>, cssDecls: import("@cssfn/css-config").Decls<{}>, cssVals: import("@cssfn/css-config").Vals<{}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface AccordionItemProps<TElement extends HTMLElement = HTMLElement> extends ListItemProps<TElement>, TogglerActiveProps {
    label?: string | React.ReactNode;
    lazy?: boolean;
}
export declare function AccordionItem<TElement extends HTMLElement = HTMLElement>(props: AccordionItemProps<TElement>): JSX.Element;
export declare namespace AccordionItem {
    var prototype: any;
}
export type { AccordionItemProps as ItemProps };
export { AccordionItem as Item };
export { ListSeparatorItem, ListSeparatorItem as AccordionSeparatorItem, ListSeparatorItem as SeparatorItem };
export type { OrientationName, OrientationVariant };
export type { ListStyle, ListVariant };
export type { ListProps, ListProps as AccordionProps };
export { List as default, List as Accordion };
