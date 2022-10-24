import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Platform } from 'react-native'
import {ViewPropTypes} from 'deprecated-react-native-prop-types';

import {SliderBox} from 'react-native-image-slider-box';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('./slider/1.png'),
        require('./slider/2.png'),
        require('./slider/3.png'),
        require('./slider/4.png'),
        require('./slider/5.png'),
        require('./slider/6.png'),
        
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={700}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          autoplay
          circleLoop
          resizeMethod={'resize'}
          ImageComponentStyle={{borderRadius: 15, width: '97%', height:'100%' ,marginTop: 5}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    justifyContent: 'center',
  },
});
