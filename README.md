# Michał Kukla - digital garden

This is my digital garden, where I write about things I learn, things I find interesting, and things I want to remember. It's a place for me to think out loud, and to share my thoughts with the world.

## How to use Wiki Links in Obsidian?

I use [wikilinks by stereobooster](https://astro-digital-garden.stereobooster.com/recipes/wikilinks/) to integrate Obsidian.

I don't have to worry about the way Obsidian stores the links, because I can use the same links in my markdown files.

I just need to create symbolic links to my `blog` and `projects` directories inside `src/content`:
```bash
ln -s ~/path/to/your/obsidian/vault/blog src/content/blog
ln -s ~/path/to/your/obsidian/vault/projects src/content/projects
```

I need to remember to create notes using slugs, e.g. instead of `[[My Note]]` I should use `[[my-note|My Note]]`.

Links in Obsidian should be created using `shortest possible` method (check out Settings->Files and Links) and unique.

If I want to link to a tag I should use `[[#tag|Tag]]`.

I keep images in the same directory as the note, and I use relative paths to link them.

### Images

To embed images in markdown files, use [this](https://docs.astro.build/en/guides/images/#images-in-markdown-files) approach. 

It works both in Obsidian and in Astro.

## Deploy on Firebase

```bash
npm run build && npx firebase use michalkukla && npx firebase deploy --only hosting
```

## Theme: Dante - Astro & Tailwind CSS Theme by justgoodui.com

This theme is based on the [Dante](https://github.com/JustGoodUI/dante-astro-theme) theme by [Just Good Themes](https://justgoodthemes.com/).

## License

Code is licensed under the [GPL-3.0](https://github.com/JustGoodUI/dante-astro-theme/blob/main/LICENSE) license.
All texts and images, if not stated otherwise, are licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).
