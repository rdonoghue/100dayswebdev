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

#### Selectors & Combinators

- Terminology: Selectors - type, ID, group (multipel types) or class
- Combinators: Combinations of selectors
  | Descendent | ex: li p | (space, not comma - comma makes a group)
  | child | ex: li > p |

Still figuring this out

#### Inline & Block

- Inline elements
  a, button, img, span
  (Hadn't considered the button is inline)
  Margin top & bottom gets ignored inlne, padding can be, but padding won't move things

- display property - inline or block or inline-block - inline block means it's inline, but margin etc works as expected.

#### Margin Collapse

If vertical margins disagree, they don't stack, they default to the larger on.
