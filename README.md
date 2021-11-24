# &lt;Accordion&gt;&lt;/Accordion&gt;
Represents a series of toggleable collapsing content.

## Preview

```jsx
<Accordion' theme='primary' size='lg' gradient={true} outlined={true}>
    <AccordionItem label='Intro'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </AccordionItem>
    
    <AccordionItem label='Installation' active={getActive} onActiveChange={(newActive) => setActive(newActive)}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </AccordionItem>
    
    <ListItem theme='danger' label='Usage'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </ListItem>
    
    // ...
</Accordion>
```
Rendered to:
```html
<ul class="c1 thPrimary szLg gradient outlined">
    <li>/* ... */</li>
    <li>/* ... */</li>
    <li>/* ... */</li>
</ul>
```

## Features
* Includes all features in [`<List />`](https://www.npmjs.com/package/@nodestrap/list).
* Controllable & uncontrollable toggle active.
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/accordion
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]
