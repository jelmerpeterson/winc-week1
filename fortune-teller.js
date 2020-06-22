const favoMovie = {
  title: "Harry Potter",
  duration: 90,
  stars: ["harry", "hermalien", "ron"],
};

const tellMovieInfo = () => {
  console.log(
    `My favo movie is ${favoMovie.title}, the duration is ${favoMovie.duration} minutes, and stars ${favoMovie.stars}.`
  );
};

tellMovieInfo();
