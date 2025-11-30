import React from "react";
import { TextInput, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { COLOR } from "../utils/colors";
import SearchIcon from '../assets/icons/search'


const Search=()=>{
    return(
        <View style={{justifyContent:'center',marginTop:hp('1%')}}>
            <View style={{position:'absolute',left:wp('1%')}}>
                <SearchIcon></SearchIcon>
            </View>
            <TextInput style={{height:hp('4.5%'),borderRadius:5,borderWidth:1,borderColor:COLOR.stepUnfinished,paddingLeft:wp('6%')}}>

            </TextInput>
        </View>
    )
}

export default Search;