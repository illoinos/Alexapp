import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Movie from "./Movie";

const Movies = () => {
  const movies = [
    {
      name: "Avengers1",
      desc: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by ...",
      img: require("../hicheel/imgs/avengers.jpeg"),
    },
    {
      name: "Iron man",
      desc: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by ...",
      img: require("../hicheel/imgs/avengers.jpg"),
    },
    {
      name: "Thor: Love and Thunder",
      desc: "Thor: Love and Thunder is a 2022 American superhero film based on Marvel Comics featuring the character Thor. ",
      img: require("../hicheel/imgs/thor_love_and_thunder_dc.jpg"),
    },
  ];
  return (
    <ScrollView>
      {/* <ScrollView horizontal pagingEnabled contentContainerStyle={styles.container}>
                {movies.map(movie => <Movie name={movie.name} desc={movie.desc} img={movie.img} />)}
            </ScrollView> */}

      <ScrollView contentContainerStyle={styles.container}>
        {movies.map((movie) => (
          <Movie name={movie.name} desc={movie.desc} img={movie.img} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
