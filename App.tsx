import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import * as SQLite from 'expo-sqlite';
import Constants from 'expo-constants';
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";



const db = SQLite.openDatabase('TablRozmir.db')
 
export default class ExampleOne extends Component {
  constructor(props) {

	
	
	FileSystem.downloadAsync(
    	Asset.fromModule(require('./assets/db/TablRozmir.db')).uri,
		`${FileSystem.documentDirectory}SQLite/TablRozmir.db`
	); 
     
    super(props);
    this.state = {
    ClassicSize: '', 
    EUSize: '',
    USMen: '',
    USWomen: '',
    UK: '',
    InsoleSize: '',
  };
  
  db.transaction((tx) => {
    this.setState({ClassicSize: '', EUSize: '', USMen: '', USWomen: '', UK: '', InsoleSize: '',});
    tx.executeSql('SELECT * FROM FootScan where FootSize=?', ['26'], (tx, result) => {
      const len = result.rows.length;
      	if(len > 0) {
            const row = result.rows.item(0);
            this.setState({ClassicSize: row.ClassicSize, EUSize: row.EUSize, USMen: row.USMen, USWomen: row.USWomen, UK: row.UK, InsoleSize: row.InsoleSize,});
        }
    }, 
    );
  });
}  
           

     
  render() {
    return (
		<View style={styles.container}>
       <Text>Foot Scan</Text>
       <Text>{'Класичний розмір - ' + this.state.ClassicSize}</Text>
       <Text>{'Європейський розмір - ' + this.state.EUSize}</Text>
       <Text>{'Американський чоловічий - ' + this.state.USMen}</Text>
       <Text>{'Американський жіночий - ' + this.state.USWomen}</Text>
       <Text>{'Англійський - ' + this.state.UK}</Text>
       <Text>{'Розмір устілки - ' + this.state.InsoleSize}</Text>
      </View>
 
    );
  }
  }

 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 100, backgroundColor: '#f1f8ff' },
  text: { margin: 1 }
});



 /*tableHead: ['Класичний розмір', 'Європейський розмір', 'US Men', 'US Women', 'UK', 'Довжина стопи(см)', 'Довжина устілки(см)' ],
      tableData: [
        ['35', '36 EUR', '-', '5', '3.5', '21.7', '22.2'],
        ['35.5', '36 2/3 EUR', '-', '5.5', '4', '22.2', '22.5'],
        ['36', '37 1/3 EUR', '5', '6', '4.5', '22.9', '23'],
        ['36.5', '38 EUR', '5.5', '6.5', '5', '23.3', '23.5'],
        ['37', '38 2/3 EUR', '6', '7', '5.5', '23.8', '24'],
        ['38', '39 1/3 EUR', '6.5', '7.5', '6', '24.2', '24.5'],
        ['38.5', '40 EUR', '7', '8', '6.5', '24.6', '25'],
        ['39', '40 2/3 EUR', '7.5', '8.5', '7', '25', '25.5'],
        ['40', '41 1/3 EUR', '8', '9', '7.5', '25.5', '26'],
        ['40.5', '42 EUR', '8.5', '9.5', '8', '26', '26.5'],
        ['41', '42 2/3 EUR', '9', '10', '8.5', '26.3', '27'],
        ['42', '43 1/3 EUR', '9.5', '10.5', '9', '26.7', '27.5'],
        ['42.5', '44 EUR', '10.5', '11', '9.5', '27.1', '28'],
        ['43', '44 2/3 EUR', '10.5', '11.5', '10', '27.6', '28.5'],
        ['44', '45 1/3 EUR', '11', '12', '10.5', '28', '29'],
        ['44.5', '46 EUR', '11.5', '12.5', '11', '28.4', '29.5'],
        ['45', '46 2/3 EUR', '12', '13', '11.5', '28.8', '30'],
        ['46', '47 1/3 EUR', '12.5', '13.5', '12', '29.3', '30.5'],
        ['46.5', '48 EUR', '13', '14', '12.5', '29.7', '31'],
        ['47', '48 2/3 EUR', '13.5', '14.5', '13', '30.1', '31.5'],
        ['48', '49 1/3 EUR', '14', '15', '13.5', '30.5', '32'],
       
      ]
    }
  }
 */