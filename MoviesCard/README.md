📁 Project Structure
src/
│
├── App.jsx
├── components/
│     ├── MovieList.jsx
│     ├── MovieCard.jsx
│     └── MovieDesc.jsx
└── index.js
🧩 Component Flow
1. App.jsx → MovieList

App is the main parent.

Passes the movies array to MovieList.

2. MovieList → MovieCard

Loops through the movie data.

Passes each movie object to MovieCard.

3. MovieCard → MovieDesc

Contains a local toggle (useState) for showing the description.

Passes only description (movie.desc) to MovieDesc.

🧠 Props Flow Summary
From	To	Prop	Purpose
App	MovieList	movies	Send full movie list
MovieList	MovieCard	movie	Send individual movie details
MovieCard	MovieDesc	desc	Show movie description
✨ Features

Displays list of movie

Each movie card has:
--------------------
   |=>Title
   |=>Rating
   |=>Genre
   |=>View More toggle

Clean modular component structure
Beginner-friendly React example