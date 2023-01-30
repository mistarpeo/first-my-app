import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = (props) => {
  console.log("props of Header", props)
  return <Text>{props.title}</Text>;
}

const MyProfile = (props) => {
  return <Profile name={props.name}  profileSize={50} uri="https://th.bing.com/th?id=OIP.mjrO_Xbwku1Pi4A7IXPVbQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>;
}

const Division = () => {
  return <Text>Division</Text>;
}

const FriendSection = () => {
  return <Text>FriendSection</Text>;
}

const FriendList = (props) => {
  return (
      <View>
        <Profile name="나은" profileSize={30} uri="https://th.bing.com/th?id=OIP.ERaYuf2XnbmXQaSPSrGuvAAAAA&w=273&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>
        <Profile name="나은" profileSize={30} uri="https://th.bing.com/th?id=OIP.QAguHkjw9SdB159anMwqeAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>
      </View>
  );
}

const Profile = (props) => {
  return (
    <View style={{flexDirection:"row"}}>
      <Image 
        source={{
          uri:props.uri,
        }}
        style={{
          width:props.profileSize,
          height:props.profileSizer,
        }}
      />
      <Text>{props.name}</Text>
    </View>
  )
}

// class Profile extends React.Component {
//   render() {
//     return (
//       <View style={{flexDirection:"row"}}>
//         <Image 
//           source={{
//             uri: this.props.uri,
//           }}
//           style={{
//             width: this.props.profileSize,
//             height: this.props.profileSizer,
//           }}
//         />
//         <Text>{this.props.name}</Text>
//       </View>
//     );
//   }
// }


export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구야 놀자" />
      <MyProfile name="조성근"/>
      <Division />
      <FriendSection />
      <FriendList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
