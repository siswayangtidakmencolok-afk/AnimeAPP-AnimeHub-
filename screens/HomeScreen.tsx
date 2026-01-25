import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

export default function HomeScreen({ navigation }: any) {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/top/anime')
      .then(res => res.json())
      .then(json => setAnime(json.data));
  }, []);

  return (
    <FlatList
      data={anime}
      keyExtractor={(item: any) => item.mal_id.toString()}
      renderItem={({ item }: any) => (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', item)}>
          <Text style={{ padding: 10 }}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
