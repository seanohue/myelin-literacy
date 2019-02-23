# myelin-literacy

A bundle for adding readable (and eventually writable) items to your Ranvier game.

Currently includes

## Readable Behavior

Add this to an item to begin using the readable behavior:

```yaml
behaviors:
  readable:
    divName: 'chapter'
    indexName: 'Table of Contents'
    readAction: "You open the book to the chapter titled <b>'%where'</b>.\n\nYou begin reading:"
    content:
      One: "Once upon a time..."
      Final: "The end!"
```

Note that `%where` will be replaced with the name of the  'chapter' (or whatever name you use to divvy up the sections of the readable item). Besides the content, all config options have a somewhat boring default but at least your item will not seem broken.

The content is a map of div names to their readable content. To read the first chapter in the above example, a player would type `read <itemname> one`. Typing `read <itemname>` would show them the text "Table of Contents" followed by a list of chapters, "One, Final".

## Read Command

This bundle also includes the player-facing command `read`, for reading a readable item. It also includes the helpfile for `read`.