import { default as React } from 'react';
import type { SingleOrArray } from '@cssfn/types';
import type { ElementProps } from '@nodestrap/element';
import { OrientationRuleOptions } from '@nodestrap/basic';
import { TogglerActiveProps } from '@nodestrap/indicator';
import { defaultOrientationRuleOptions, OrientationName, OrientationVariant, ListStyle, ListVariant, ListItemProps, ListSeparatorItem, ListProps } from '@nodestrap/list';
export { defaultOrientationRuleOptions };
export declare const usesAccordionItemLayout: (options?: OrientationRuleOptions | undefined) => import("@cssfn/cssfn").Rule;
export declare const usesAccordionItemVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesAccordionItemStates: () => import("@cssfn/cssfn").Rule;
export declare const useAccordionItemSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{}>, cssDecls: import("@cssfn/css-config").Decls<{}>, cssVals: import("@cssfn/css-config").Vals<{}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface AccordionItemProps<TElement extends HTMLElement = HTMLElement> extends ListItemProps<TElement>, TogglerActiveProps {
    label?: string | React.ReactNode;
    lazy?: boolean;
    collapse?: React.ReactComponentElement<any, ElementProps>;
}
export declare function AccordionItem<TElement extends HTMLElement = HTMLElement>(props: AccordionItemProps<TElement>): JSX.Element;
export declare namespace AccordionItem {
    var prototype: any;
}
export type { AccordionItemProps as ItemProps };
export { AccordionItem as Item };
export { ListSeparatorItem, ListSeparatorItem as AccordionSeparatorItem, ListSeparatorItem as SeparatorItem };
export declare type ListStyleMod = Exclude<ListStyle, 'tab' | 'bullet'>;
export interface AccordionProps<TElement extends HTMLElement = HTMLElement> extends Omit<ListProps<TElement>, 'listStyle'> {
    listStyle?: SingleOrArray<ListStyleMod>;
}
export declare function Accordion<TElement extends HTMLElement = HTMLElement>(props: AccordionProps<TElement>): JSX.Element;
export declare namespace Accordion {
    var prototype: any;
}
export { Accordion as default };
export type { OrientationName, OrientationVariant };
export type { ListStyle, ListVariant };
