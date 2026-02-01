import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

export default function HomeScreen({ navigation }: any) {
  const [anime, setAnime] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/top/anime')
      .then(res => res.json())
      .then(json => {
        if (Array.isArray(json.data)) {
          setAnime(json.data);
        }
      })
      .catch(err => console.log('API error:', err));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={anime}
        keyExtractor={(item) => item.mal_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', { anime: item })}
          >
            <Text style={{ padding: 10 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
