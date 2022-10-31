import React,{Component} from "react";
import{
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableHighlight,
  Text
  
}from 'react-native'
 class Damu extends Component{
  render(){
    return(
      <View>
        <Text style={styles.gru}> login,   (if   already{this.props.gru}</Text>
      </View>
    )
    
  }
 }

export default class challu extends Component{

  constructor(){
    super();
    this.state={
      maintext:'click on register button'
    }
  }
  updatetext(){
    this.setState({maintext:'LOADING....'})
  }
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={require ('./images/imu.jpg')}
        style={styles.backgroundimage}>
          <Image source={require('./images/rugu.png')}
          style={styles.logo}>

          </Image>
          <TextInput style={styles.inputview}
          placeholder='NAME'
          placeholderTextColor='white'>

          </TextInput>
          <TextInput style={styles.inputview}
          placeholder='E-MAIL ID'
          placeholderTextColor={'white'}>

          </TextInput>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <TextInput style={{height:'60%',width:'20%',fontSize:12,borderWidth:2,borderColor:'white',marginTop:20,padding:20}}
            placeholder='+91'
            placeholderTextColor={'white'}>

            </TextInput>
            <TextInput style={{height:'60%',width:'35%',fontSize:12,borderWidth:2,borderColor:'white',marginTop:20,padding:20,marginLeft:20}}
            placeholder='MOB:NO'
            placeholderTextColor={'white'}>

            </TextInput>
          </View>

          <TextInput style={styles.inputview}
          placeholder='PASSWORD'
          placeholderTextColor={'white'}>

          </TextInput>
          <TouchableHighlight style={styles.buttonview}
          onPress={()=> this.updatetext()}>
            <Text style={styles.buttontext}>REGISTER

            </Text>

          </TouchableHighlight>
          <Text style={styles.textshow}>{this.state.maintext}

          </Text>
          <Damu gru='   registered)'>

          </Damu>
          <TouchableHighlight style={styles.buttontutu}>
            <Text style={styles.bututext}>LOGIN</Text>
            
          </TouchableHighlight>
        </ImageBackground>
        
        
         </View>
         

         

    )
  }
}
const styles= StyleSheet.create({

  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'red',
    
    
    
  
  },
  backgroundimage:{
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    
  },
  logo:{
    height:'20%',
    width:'40%'
  },
  inputview:{
    height:'8%',
    width:'60%',
    borderWidth:2,
    fontSize:12,
    marginTop:20,
    borderColor:'white',
    padding:20
  },
  buttonview:{
    height:'5%',
    width:'40%',
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    borderRadius:8

  },
  buttontext:{
    fontWeight:'bold',
    borderRadius:10,
    color:'white'
  },
  textshow:{
    fontWeight:'bold',
    color:'white',
    marginTop:10,
    fontSize:8
  },
  gru:{
    color:'yellow',
    fontWeight:'bold',
    marginTop:20
  },
  buttontutu:{
    height:'3%',
    width:'20%',
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
    borderRadius:8
  },
  bututext:{
    fontWeight:'bold',
    color:'white',
    fontSize:8
  }

})
