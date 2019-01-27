import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground
} from "react-native";

export default class HomeScreen extends React.Component {
  componentWillMount() {
    this.image = (
      <ImageBackground
        source={require("./Picture1.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.title}>D.U.High</Text>
      </ImageBackground>
    );
  }
  render() {
    return (
      <View style={styles.overlay}>
        {this.image}
        <TouchableOpacity
          style={{ alignItems: "center", bottom: 28 }}
          onPress={() => this.props.navigation.navigate("FacialExpression")}
        >
          <View style={styles.button}>
            <Text style={styles.text}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 32
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 25
  },
  backgroundImage: {
    height: "85%"
  },
  overlay: {
    backgroundColor: "#010a00",
    width: "100%",
    height: "100%",
    alignContent: "center"
  },
  button: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 2,
    paddingVertical: 12,
    width: "60%"
  }
});
