# DB driven Blog

```text
┌───────────────────┐           ┌───────────────────┐
│┌─────────────────┐│           │┌─────────────────┐│
││      Posts      ││           ││     Authors     ││
│└─────────────────┘│           │└─────────────────┘│
│┌─────────────────┐│           │┌─────────────────┐│
││ID (INT)         ││    ┌──────┼┤ID (INT)         ││
││Title (VARCHAR)  ││    │      ││Name (VARCHAR)   ││
││Summary (VARCHAR)││    │      ││Email (VARCHAR)  ││
││Body(TEXT)       ││    │      │└─────────────────┘│
││Date (DATETIME)  ││    │      └───────────────────┘
││Author_id (INT)──┼┼────┘
││                 ││
│└─────────────────┘│
└───────────────────┘

```