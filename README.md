# 100dayswebdev

For the udemy course

## notes

Day 1: Basic html file
Day 2: Get Visual Studio Code, HTML elements
Day 3: Some CSS
Day 4:
Day 5:

## Random Stuff to remember

- it's command-/ to comment/uncomment a line
- for things liek padding with 4 values, it's cloclwise from the top (top, right, bottom, left) - if only 2, it's top/bottom left/right
- 4th value in RGB() is transparency
- Semantic elements are definitely a bit more fun than just naming a ton of divs but oh god dammit, youc an't just abritrarily create them. Looks like there's a fixed set of known ones that includes header, footer and main. What else?
- Weird one - firefox didn't wan tot show the favicon until i put a ? at the end of the url. Dunno what's up with that.
- li:first-of-type
- li:nth-of-type(8)

### Subjects

#### Selectors & Combinators

- Terminology: Selectors - type, ID, group (multipel types) or class
- Combinators: Combinations of selectors
  | Descendent | ex: li p | (space, not comma - comma makes a group)
  | child | ex: li > p |
  - oh, hwy, > means DIRECT CHILD

Still figuring this out

#### Inline & Block

- Inline elements
  a, button, img, span
  (Hadn't considered the button is inline)
  Margin top & bottom gets ignored inlne, padding can be, but padding won't move things

- display property - inline or block or inline-block - inline block means it's inline, but margin etc works as expected.

#### Margin Collapse

If vertical margins disagree, they don't stack, they default to the larger on.

#### Curiosu element

- box-sizing
- object-fit (cover)
- Flex-basis (Set to 100% to make all columns the same size, no matter how many colums. Samr result from flex: 1)
- outline (instead of background for seeign elements)
- tranform: translate(x,y) instead of position in some cases
- attribute selector by putiing in []
  can regex-is so [grid-*] gets all the grid-foo
- min(), max(), and clamp()
- min & max take 2 values and use the min or max, so you can mix units (905, 1000px)
- clamp (often used for font) is bounded between min and max

  - line-height
    use a button when it's clickable, not a div
  - minmax() - prevent overflow in grid
  - (grid-template-columns: repeat(autofit, minmax(500, 1fr))) -> grid-template-columns: repeat(autofit, minmax(min(500, 100%), 1fr))
  - grid-auto-flow
  - grid-auto-columns
  - place-items
  - grid-colum and grid-row as 1/2 stacks things?
  - @media
  - flex-grow: 1 (row is 100% wide )
  - flex-basis: x% (widht of cells)
  - writing-mode - flip text
  - gap - automa rgining - work sin flex, grid?
  - scroll-behavior: smooth (set ti in html and links to anchors will scroll)
  - overflow-x: get you a scroll bar
  - scroll-snap-align: xor y, mandatory (or proximity) makes scrolling snap then set scroll-snap-type as center or similar on the scrolle dobject

- overflow: auto + resize: both makes elements drag to make bigger, can dovertical or horizontal
- display: webkit-box and other spex for a text preview (with overflow:hidden)
- webkit-background-clip: text (clips the text), use webkit-text-fill-color: transparent to have it turn the letter sinto the background color/image, such as a gradient.
- pointer-events: none makes something unslectable, which can eb useful for animation
- @keyframes
- animation
- container queries vs media queries

  - container-type: size or inline-size

#### sizes

- rem - root element of # of pixels for font size (usually 16 pixels) - it's base 16 so the math might be fiddly
- em - don't use unles syou know to? (withs) (size for the font in use, so bigger for an H1)
- ch (witdth of a characetr of the font, based on a 0, usefuyl to keep under 75 (which is high) or fewer characters per line])
- em or rem for padding/margin

font-size: rem
width: % in combination with a max-width, ch
height: question urself "do i rly need to set height" if yes -> use a min-height
padding/margin: rem or em, kevin often uses em for padding of buttons
media queries: em

px only for little things like shadows, borders etc.
-fr fraction, useful for even columns
-vx

-FORMS- GET (request content) vs POST (Submit content)

- oh, hey, document.querySelector uses the same syntax as css, so it can get classes with a . (.classname) or IDs with # (#idname)
- normally this gets the first match. querySelectorAll gets all of them.

## Questions

- should I have a branch for each machine just to avoid doing that little song and dance?

## Resources

✅ [Frontend Mentor:](https://www.frontendmentor.io)
✅ [Style Stage:](https://stylestage.dev)
✅ [CSS Battle:](https://cssbattle.dev/)
✅ [CodeWars:](https://www.codewars.com/)
✅ [Frontend Practice:](https://www.frontendpractice.com/)
✅ [First Timers Only:](https://www.firsttimersonly.com/)
[More about the position property =>](https://academind.com/tutorials/the-position-property/)

[Flexbox - Flex Container =>](https://academind.com/tutorials/flexbox-basics-container/)

[Flexbox - Flex Items =>](https://academind.com/tutorials/flexbox-flex-items/)

[Comparing Flexbox and the Grid =>](https://academind.com/tutorials/css-grid-vs-flexbox/)
[SVG icons](https://heroicons.dev)
[more SVG icons](https://heroicons.com)
