// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
composition, mainComposition, imports, 
// layouts:
layout, 
// rules:
variants, rule, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import { 
// hooks:
usePropEnabled, } from '@nodestrap/accessibilities';
// nodestrap components:
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
usesCollapseLayout, usesCollapseVariants, usesCollapseStates, 
// react components:
Collapse, } from '@nodestrap/collapse';
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
    const parentOrientationBlockSelector = `${orientationBlockSelector}>*>&`;
    const parentOrientationInlineSelector = `${orientationInlineSelector}>*>&`;
    return composition([
        imports([
            // layouts:
            usesCollapseLayout({
                orientationBlockSelector: parentOrientationBlockSelector,
                orientationInlineSelector: parentOrientationInlineSelector,
            }),
            usesListItemLayout(options), // already handled the `parentOrientation(Block|Inline)Selector` internally
        ]),
        layout({
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
        variants([
            /* the orientation variants are part of the layout, because without these variants the layout is broken */
            rule(parentOrientationBlockSelector, [
                layout({
                    // overwrites propName = propName{Block}:
                    ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, 'block')),
                }),
            ]),
            rule(parentOrientationInlineSelector, [
                layout({
                    // overwrites propName = propName{Inline}:
                    ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, 'inline')),
                }),
            ]),
        ]),
    ]);
};
export const usesAccordionItemVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => composition([
        layout({
            // overwrites propName = propName{SizeName}:
            ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
        }),
    ]));
    return composition([
        imports([
            // variants:
            usesCollapseVariants(),
            usesListItemVariants(),
            // layouts:
            sizes(),
        ]),
    ]);
};
export const usesAccordionItemStates = () => {
    return composition([
        imports([
            // states:
            usesCollapseStates(),
        ]),
    ]);
};
export const useAccordionItemSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // layouts:
            usesAccordionItemLayout(),
            // variants:
            usesAccordionItemVariants(),
            // states:
            usesAccordionItemStates(),
        ]),
    ]),
]);
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
    /* no config props yet */
    };
}, { prefix: 'accr' });
export function AccordionItem(props) {
    // styles:
    const sheet = useAccordionItemSheet();
    // states:
    const [isActive, setActive] = useTogglerActive(props);
    // rest props:
    const { 
    // accessibilities:
    label, // delete, moved to children
    defaultActive, // delete, already handled by `useTogglerActive`
    active, // delete, already handled by `useTogglerActive`
    onActiveChange, // delete, already handled by `useTogglerActive`
    // children:
    children, ...restProps } = props;
    // handlers:
    const handleToggleActive = () => {
        setActive(!isActive); // toggle active
    };
    // fn props:
    const propEnabled = usePropEnabled(props);
    // jsx:
    return (<>
        <ListItem 
    // other props:
    {...restProps} 
    // semantics:
    semanticTag={props.semanticTag ?? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']} semanticRole={props.semanticRole ?? 'heading'} aria-expanded={props['aria-expanded'] ?? isActive} 
    // accessibilities:
    active={isActive} 
    // behaviors:
    actionCtrl={props.actionCtrl ?? true} 
    // events:
    onClick={(e) => {
            props.onClick?.(e);
            if (!e.defaultPrevented) {
                handleToggleActive();
                e.preventDefault();
            } // if
        }} onKeyDown={(e) => {
            props.onKeyDown?.(e);
            if (!e.defaultPrevented) {
                if ((e.key === ' ') || (e.code === 'Space')) {
                    // prevents pressing space for scrolling page
                    e.preventDefault();
                } // if
            } // if
        }} onKeyUp={(e) => {
            props.onKeyUp?.(e);
            if (!e.defaultPrevented) {
                if ((e.key === ' ') || (e.code === 'Space')) {
                    handleToggleActive();
                    e.preventDefault();
                } // if
            } // if
        }}>
            {label}
        </ListItem>
        <Collapse 
    // variants:
    theme={props.theme} size={props.size} gradient={props.gradient} outlined={props.outlined} mild={props.mild} 
    // accessibilities:
    inheritEnabled={props.inheritEnabled} enabled={propEnabled} inheritActive={props.inheritActive ?? true} // change default value to `true`
     active={isActive} 
    // classes:
    mainClass={props.mainClass ?? sheet.main}>
            {children}
        </Collapse>
    </>);
}
AccordionItem.prototype = ListItem.prototype; // mark as ListItem compatible
export { AccordionItem as Item };
// ListSeparatorItem => AccordionSeparatorItem
export { ListSeparatorItem, ListSeparatorItem as AccordionSeparatorItem, ListSeparatorItem as SeparatorItem };
export { List as default, List as Accordion };
