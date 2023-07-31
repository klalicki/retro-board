# React Retro Board

Currently live (deployed via GitHub Actions on GitHub Pages) at [https://kristoff.dev/retro-board/](https://kristoff.dev/retro-board/)

## About the Project

This project is a kanban board, set up for use in an Agile retro. It currently has the following features:

- Add/remove cards from columns
- Edit text on cards
- Move cards between columns
- Upvote/downvote counters on each card.
- Light/dark mode
- Horizontal or vertical layout.
- Save/load board contents from local storage

### Feature Roadmap:

As I continue to work on this project, I plan to implement the following features:

- TypeScript
- ability to save multiple (named) boards to local storage
- More mobile-friendly design
- Ability to add/remove columns
- Ability to change column colors
- Backend with ability to edit/view the same board from multiple computers
- Drag and drop to move cards

## Tech

This project is built with React, using the Context API for state lifting and management.

## How to Use

In the project directory, run the following commands to install the project and start a development server.

```
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
