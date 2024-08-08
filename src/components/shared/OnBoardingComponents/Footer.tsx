import { Text, View } from 'react-native';
interface FooterIProps {
  height: number;
  goToNextSlide: () => void;
  slides?: Array;
  currentSlideIndex?: number;
}
export const Footer: React.FC<FooterIProps> = (props) => {
  const { height, slides, currentSlideIndex, goToNextSlide } = props;
  const COLORS = { primary: '#ccc', white: '#fff' };

  return (
    <View
      style={{
        height: height * 0.25,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}
    >
      {/* Indicator container */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}
      >
        {/* Render indicator */}
        {slides?.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: COLORS.white,
                width: 25,
              },
            ]}
          />
        ))}
      </View>

      {/* Render buttons */}
      <View style={{ marginBottom: 20 }}>
        {currentSlideIndex == slides.length - 1 ? (
          <View style={{ height: 50 }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.replace('Login')}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                GET STARTED
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.btn,
                {
                  borderColor: COLORS.white,
                  borderWidth: 1,
                  backgroundColor: 'transparent',
                },
              ]}
              onPress={skip}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: COLORS.white,
                }}
              >
                SKIP
              </Text>
            </TouchableOpacity>
            <View style={{ width: 15 }} />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={goToNextSlide}
              style={styles.btn}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                }}
              >
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    // color: COLORS.white,
    fontSize: 22,
    // marginTop: 10,
    // maxWidth: '70%',
    // textAlign: 'center',
    // lineHeight: 23,

    // fontSize: 17,
    marginTop: 30,
    maxWidth: width - 200,
    textAlign: 'center',
    lineHeight: 23,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    // backgroundColor: 'grey',
    padding: 0,
  },
  title: {
    fontWeight: 'bold',
    marginTop: '20%',
    textAlign: 'center',
    fontSize: 26,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containBox: {
    position: 'absolute',
    width: '100%',
    height: height - width,
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#3535b0',
  },
});
