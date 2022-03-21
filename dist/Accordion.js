// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
import { 
// compositions:
mainComposition, 
// styles:
style, imports, 
// rules:
rule, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
import { 
// hooks:
usesSizeVariant, normalizeOrientationRule, usesOrientationRule, } from '@nodestrap/basic';
import { useTogglerActive, } from '@nodestrap/indicator';
import { 
// hooks:
defaultOrientationRuleOptions, 
// styles:
usesListItemLayout, usesListItemVariants, ListItem, ListSeparatorItem, List, } from '@nodestrap/list';
import { 
// styles:
usesCollapseLayout, usesCollapseVariants, usesCollapseStates, Collapse, } from '@nodestrap/collapse';
// hooks:
// layouts:
export { defaultOrientationRuleOptions };
// styles:
/*
    AccordionItem is just a composite component made of
    ListItem
    and
    *modified* Collapse
*/
export const usesAccordionItemLayout = (options) => {
    // options:
    options = normalizeOrientationRule(options, defaultOrientationRuleOptions);
    const [orientationBlockSelector, orientationInlineSelector] = usesOrientationRule(options);
    const parentOrientationBlockSelector = [`${orientationBlockSelector}>*>&`, `${orientationBlockSelector}>&`];
    const parentOrientationInlineSelector = [`${orientationInlineSelector}>*>&`, `${orientationInlineSelector}>&`];
    return style({
        ...imports([
            // layouts:
            usesCollapseLayout({
                orientationBlockSelector: parentOrientationBlockSelector,
                orientationInlineSelector: parentOrientationInlineSelector,
            }),
            usesListItemLayout(options), // already handled the `parentOrientation(Block|Inline)Selector` internally
        ]),
        ...style({
            // customize:
            ...usesGeneralProps(cssProps),
            ...rule(parentOrientationBlockSelector, {
                // overwrites propName = propName{Block}:
                ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, 'block')),
            }),
            ...rule(parentOrientationInlineSelector, {
                // overwrites propName = propName{Inline}:
                ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, 'inline')),
            }),
        }),
    });
};
export const usesAccordionItemVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }));
    return style({
        ...imports([
            // variants:
            usesCollapseVariants(),
            usesListItemVariants(),
            // layouts:
            sizes(),
        ]),
    });
};
export const usesAccordionItemStates = () => {
    return style({
        ...imports([
            // states:
            usesCollapseStates(),
        ]),
    });
};
export const useAccordionItemSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesAccordionItemLayout(),
        // variants:
        usesAccordionItemVariants(),
        // states:
        usesAccordionItemStates(),
    ])),
], /*sheetId :*/ '3mq5z5qt4v'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
    /* no config props yet */
    };
}, { prefix: 'accr' });
export function AccordionItem(props) {
    // styles:
    const sheet = useAccordionItemSheet();
    // rest props:
    const { 
    // accessibilities:
    label, // delete, moved to children
    defaultActive, // delete, already handled by `useTogglerActive`
    active, // delete, already handled by `useTogglerActive`
    onActiveChange, // delete, already handled by `useTogglerActive`
    // children:
    children, ...restAccordionProps } = props;
    const { 
    // layouts:
    size, 
    // orientation, // already handled on css
    nude, 
    // colors:
    theme, gradient, outlined, mild, 
    // <Indicator> states:
    enabled, inheritEnabled, readOnly, inheritReadOnly, 
    // active,
    inheritActive = true, // change default value to `true`
    // performances:
    lazy, 
    // components:
    collapse = React.createElement(Collapse, null), } = restAccordionProps;
    // states:
    const [isActive, setActive] = useTogglerActive({ ...props, inheritActive });
    // handlers:
    const handleToggleActive = () => {
        setActive(!isActive); // toggle active
    };
    // jsx:
    const defaultCollapseProps = {
        // variants:
        // layouts:
        size: size,
        // orientation : orientation, // already handled on css
        nude: nude,
        // colors:
        theme: theme,
        gradient: gradient,
        outlined: outlined,
        mild: mild,
        // <Indicator> states:
        enabled: enabled,
        inheritEnabled: inheritEnabled,
        readOnly: readOnly,
        inheritReadOnly: inheritReadOnly,
        active: isActive,
        inheritActive: false,
        // performances:
        lazy: lazy,
        // classes:
        mainClass: sheet.main,
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(ListItem, { ...restAccordionProps, 
            // semantics:
            semanticTag: props.semanticTag ?? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], semanticRole: props.semanticRole ?? 'heading', "aria-expanded": props['aria-expanded'] ?? isActive, 
            // accessibilities:
            active: isActive, 
            // behaviors:
            actionCtrl: props.actionCtrl ?? true, 
            // classes:
            classes: [...(props.classes ?? []),
                (isActive ? null : 'last-visible-child'),
            ], 
            // events:
            onClick: (e) => {
                props.onClick?.(e);
                if (!e.defaultPrevented) {
                    handleToggleActive();
                    e.preventDefault();
                } // if
            }, onKeyDown: (e) => {
                props.onKeyDown?.(e);
                if (!e.defaultPrevented) {
                    if ((e.key === ' ') || (e.code === 'Space')) {
                        // prevents pressing space for scrolling page
                        e.preventDefault();
                    } // if
                } // if
            }, onKeyUp: (e) => {
                props.onKeyUp?.(e);
                if (!e.defaultPrevented) {
                    if ((e.key === ' ') || (e.code === 'Space')) {
                        handleToggleActive();
                        e.preventDefault();
                    } // if
                } // if
            } }, label),
        React.cloneElement(React.cloneElement(collapse, defaultCollapseProps, children), collapse.props)));
}
AccordionItem.prototype = ListItem.prototype; // mark as ListItem compatible
export { AccordionItem as Item };
// ListSeparatorItem => AccordionSeparatorItem
export { ListSeparatorItem, ListSeparatorItem as AccordionSeparatorItem, ListSeparatorItem as SeparatorItem };
export function Accordion(props) {
    return React.createElement(List, { ...props });
}
Accordion.prototype = List.prototype; // mark as List compatible
export { Accordion as default };
