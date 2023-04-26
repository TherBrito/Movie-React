import React, { useState, useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground, 
  TextInput, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Icon from 'react-native-vector-icons/MaterialIcons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function App() {
  const carouselRef = useRef(null);

  const [lista, setLista] = useState([
    {
        title:"Laranja Mecânica",
        text: "Alex, o personagem principal, é um carismático sociopata cujos interesses incluem música clássica (especialmente Beethoven), cometer estupro, e o que é chamado de ultraviolência. Ele lidera uma pequena gangue de arruaceiros, Pete, Georgie, e Dim, a quem ele chama de seus drugues (da palavra russa друг, amigo, camarada).",
        release: 1971,
        img: 'https://images.justwatch.com/poster/304951771/s718/laranja-mecanica.%7Bformat%7D'
    },
    {
        title:"Orgulho e Preconceito",
        text: "Elizabeth Bennet vive com sua mãe, pai e irmãs no campo, na Inglaterra. Por ser uma das filhas mais velhas, ela enfrenta uma crescente pressão de seus pais para se casar. Quando Elizabeth é apresentada ao belo e rico Darcy, faíscas voam. Embora haja uma química óbvia entre os dois, a natureza excessivamente reservada de Darcy ameaça a relação.",
        release: 2005,
        img: 'https://kbimages1-a.akamaihd.net/7b0e1631-9550-459a-9914-ab53b5fdb82e/1200/1200/False/orgulho-e-preconceito-19.jpg'
    },
    {
        title:"Star Wars- A Ameaça Fantasma",
        text: "Quando a maquiavélica Federação Comercial planeja invadir o pacífico planeta Naboo, o guerreiro Jedi Qui-Gon Jinn e seu aprendiz Obi-Wan Kenobi embarcam em uma aventura para tentar salvar o planeta. Viajam com eles a jovem Rainha Amidala, que é visada pela Federação pois querem forçá-la a assinar um tratado político.",
        release: 1999,
        img: 'https://images.justwatch.com/poster/249956472/s718/star-wars-episodio-i-a-ameaca-fantasma.%7Bformat%7D'
    },
    {
      title:"O Fantasma Da Ópera",
      text: "O Fantasma da Ópera conta a história trágica de um triângulo amoroso passado nos bastidores de uma ópera parisiense. O protagonista, uma entidade mascarada que assombra a local, desenvolve uma paixão obsessiva por Christine, a jovem soprano que ficou órfã e foi acolhida pela trupe..",
      release: 2004,
      img: 'https://br.web.img2.acsta.net/medias/nmedia/18/92/81/00/20218810.jpg'
  },
  {
      title:"O Castelo Animado",
      text: "O filme conta a história de Sophie, uma dona de chapelaria que passa os seus dias trancada na loja e nunca se diverte. Em um dia, enquanto a cidade recebe uma festa, Sophie decide ir visitar a irmã no trabalho, mas, no meio do caminho, é abordada por dois guardas assustadores.",
      release: 2004,
      img: 'https://images.justwatch.com/poster/265223874/s718/o-castelo-animado.%7Bformat%7D'
  },
  {
      title:"Sherlock",
      text: "O personagem “Sherlock Holmes” é um detetive atraído por criminologia, detalhista, com grande capacidade de observação e dedução ao seguir pistas e resolver mistérios abandonados pela polícia como “sem solução”.",
      release: 2010,
      img: 'https://fr.web.img5.acsta.net/pictures/18/11/05/18/04/4981046.jpg'
  },
  {
    title:"V de Vingança",
    text: "Situado em Londres, em uma sociedade distópica num futuro próximo, Evey, uma garota da classe trabalhadora que deve determinar se o seu herói se tornou a grande ameaça contra quem está lutando. V, um carismático defensor da liberdade disposto a se vingar daqueles que o desfiguraram. Stephen Rea vive um detetive que inicia uma busca desesperada para capturar V antes que ele inicie uma revolução.",
    release: 2005,
    img: 'https://m.media-amazon.com/images/I/71RccWOPFKL.jpg',
 },
  {
  title:"Os Caça Fantasmas",
  text: "Peter, Raymond e Egon são professores universitários de parapsicologia da Universidade Columbia de Nova Iorque, que subitamente têm sua verba para pesquisa suspensa e são colocados na rua pelo reitor, que os considera uma farsa. Isto, porque o trio prefere estudar manifestações sobrenaturais e aparições de burros, dentre outras coisas do gênero, que a ciência formal não considera.",
  release: 1984,
  img: 'https://images.justwatch.com/poster/250792612/s718/os-caca-fantasmas.%7Bformat%7D'
  },
  {
    title:"Pulp Fiction",
    text: "Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.",
    release: 1995,
    img: 'https://img.elo7.com.br/product/original/268A58D/big-poster-filme-pulp-fiction-lo001-tamanho-90x60-cm-presente-geek.jpg',
 },
]);
const [background, setBackground] = useState(lista[0].img);
const [activeIndex, setActiveIndex] = useState(0);

const _renderItem = ({ item, index }) => {
  return(
    <View>
      <TouchableOpacity>
        <Image
        source={{uri: item.img}}
        style={styles.carouselImg}
        />
        <Text style={styles.carouselText}>{item.title}</Text>
        <Icon 
        name="play-circle-outline" 
        size={30} color="#FFF" 
        style={styles.carouselIcon} 
        />
      </TouchableOpacity>
    </View>
  );
};
return (
  <ScrollView style={styles.container}>
    <View style={{flex:1, height: screenHeight}}>
       <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>  
         <ImageBackground
         source={{ uri: background}}
         style={styles.imgBg}
         blurRadius={6}
         >

           <View style={styles.viewSearch}>
             <TextInput
               style={styles.input}
               placeholder="Procurar Seus Filmes..."
             />
             <TouchableOpacity style={styles.icon}>
               <Icon name="search" color="#000" size={25} />
             </TouchableOpacity>
           </View>

           <Text 
           style={{color: '#FFF', fontSize: 25, fontWeight: 'bold', 
           marginLeft: 10, marginVertical: 10, }}
           >
             Meus Filmes Favoritos ♥ 
           </Text>
           <View style={styles.slideView}>
              <Carousel
              style={styles.carousel}
              ref={carouselRef}
              data={lista}
              renderItem={_renderItem}
              sliderWidth={screenWidth}
              itemWidth={200}
              inactiveSlideOpacity={0.5}
              onSnapToItem={ (index) => {
                setBackground(lista[index].img);
                setActiveIndex(index);
              }}
              />
            </View>
            <View style={styles.moreInfo}>
              <View style={{marginTop: 10}}>
                <Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
                <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
              </View>
              <TouchableOpacity 
              style={{ marginRight: 15, marginTop: 10 }} 
              onPress={() => alert('OIE PESSOA QUE ESTÁ VENDO ISSO')} 
              >
                <Icon 
                name="queue" 
                color="#131313" 
                size={30} 
                />
              </TouchableOpacity>
            </View>

          </ImageBackground>
        </View>
     </View>
   </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  imgBg:{
    flex:1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: '#000'
  },
  viewSearch:{
    marginTop: 20,
    backgroundColor: '#D3D3D3',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  input:{
    width: '90%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17,
  },
  icon:{
    position: 'absolute',
    right: 20,
    top: 15,
  },
  slideView:{
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carousel:{
    flex:1,
    overflow: 'visible'
  },
  carouselImg:{
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  carouselText:{
    padding: 15,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon:{
    position:'absolute',
    top: 15,
    right: 15,
  },
  moreInfo:{
    backgroundColor: '#D3D3D3',
    width: screenWidth,
    height: screenHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  movieTitle:{
    paddingLeft: 15,
    fontSize: 22,
    color: '#131313',
    marginBottom: 5,
  },
  movieDesc:{
    paddingLeft: 15,
    color: '#131313',
    fontSize: 17,
  }
});