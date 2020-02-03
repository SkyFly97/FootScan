import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Класичний розмір', 'Європейський розмір', 'US Men', 'US Women', 'UK', 'Довжина стопи(см)', 'Довжина устілки(см)' ],
      tableData: [
        ['35', '36 EUR', '-', '5', '3.5', '21.7', '22.2'],
        ['35.5', '36 2/3 EUR', '-', '5.5', '4', '22.2', '22.5'],
        ['36', '36 1/3 EUR', '5', '6', '4.5', '22.9', '23'],
        ['36.5', '38 EUR', '5.5', '6.5', '5', '23.3', '23.4'],
      


      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 3, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 100, backgroundColor: '#f1f8ff' },
  text: { margin: 1 }
});