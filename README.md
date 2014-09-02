Carl Sednaoui
=============

Hi there!

This is my personal site, which is hosted on [GitHub Pages](https://pages.github.com/). I was looking for something simple, fast, flexible and affordable and, after spending a ton of time comparing different solutions, I finally landing on this implementation. Feel free to fork this repo to run your own implementation.

## Structure and Build Process
- Static site hosted on GitHub pages
- Two branches
    - `Master` holds all the build processes
    - `GH-Pages` is used to deploy
    - _Note:_ If you're looking to implement this, you'll need to create your `GH-Pages` branch by running `git checkout --orphan gh-pages`
- Everything is written in `Jade` and `Stylus`
- There's a `Gulp` task that builds the site and dumps all the files inside the `public` folder
- Use `npm run deploy` to move all the content of `public` into the `GH-Pages` branch
