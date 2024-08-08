// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// const MultiColorProgressBar = ({ points }) => {
//   const maxPoints = 800;
//   const progress = points / maxPoints;

//   const getSegmentColors = () => {
//     if (points <= 300) {
//       return ['#D2691E', '#D2691E', '#D3D3D3'];
//     } else if (points <= 500) {
//       return ['#D2691E', '#D2691E', '#C0C0C0', '#D3D3D3'];
//     } else if (points <= 800) {
//       return ['#D2691E', '#D2691E', '#C0C0C0', '#FFD700', '#D3D3D3'];
//     }
//     return ['#D2691E', '#C0C0C0', '#FFD700'];
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.labelsContainer}>
//         <Text style={styles.label}>0</Text>
//         <Text style={styles.label}>300</Text>
//         <Text style={styles.label}>500</Text>
//         <Text style={styles.label}>800</Text>
//       </View>
//       <View style={styles.progressBarContainer}>
//         <LinearGradient
//           colors={getSegmentColors()}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0 }}
//           style={[styles.progressBar, { width: `${progress * 100}%` }]}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     // padding: 20,
//   },
//   levelsText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   labelsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: 300,
//     marginVertical: 10,
//   },
//   label: {
//     fontSize: 12,
//   },
//   progressBarContainer: {
//     width: 300,
//     height: 10,
//     backgroundColor: '#D3D3D3',
//     borderRadius: 5,
//     overflow: 'hidden',
//   },
//   progressBar: {
//     height: '100%',
//   },
//   pointsText: {
//     marginTop: 10,
//     fontSize: 14,
//   },
// });
// export default MultiColorProgressBar;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { textVariants } from '~/theme/textVariants';

const MultiColorProgressBar = ({ points }) => {
  const maxPoints = 800;
  const progress = points / maxPoints;

  const gradientColors = [
    'rgba(154, 66, 47, 1)',
    'rgba(154, 66, 47, 1)',
    'rgba(199, 231, 255, 1)',
    'rgba(199, 231, 255, 1)',
    'rgba(254, 198, 64, 1)',
    'rgba(254, 198, 64, 1)',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.labelsContainer}>
        <Text style={textVariants.Xsmall}>0</Text>
        <Text style={textVariants.Xsmall}>300</Text>
        <Text style={textVariants.Xsmall}>500</Text>
        <Text style={textVariants.Xsmall}>800</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.progressBar, { width: `${progress * 100}%` }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 15,
  },
  label: {
    fontSize: 12,
  },
  progressBarContainer: {
    width: '100%',
    height: 12,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
  pointsText: {
    marginTop: 10,
    fontSize: 14,
  },
});

export default MultiColorProgressBar;
