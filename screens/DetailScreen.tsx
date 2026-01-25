import { View, Text, Image } from 'react-native';

export default function DetailScreen({ route }: any) {
  const anime = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Image
        source={{ uri: anime.images.jpg.image_url }}
        style={{ width: 200, height: 300 }}
      />
      <Text style={{ fontSize: 20, marginTop: 10 }}>
        {anime.title}
      </Text>
      <Text>{anime.synopsis}</Text>
    </View>
  );
}
