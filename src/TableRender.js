import React, { Component } from 'react'
import './App.css'
class TableRender extends Component {
    constructor() {
        super();
    
        this.state = {
          data : [
            {id : 1, status : "Shipped"},
            {id : 2, status : "Not Shipped"},
          ],
          expandedRow: null,
        };
      }

   handleRowClick(rowId) {
        const currentExpandedRow = this.state.expandedRow;
        this.setState({ expandedRow: (rowId === currentExpandedRow) ? null : rowId })
    }

    renderItem(item) {
        const clickCallback = () => this.handleRowClick(item.id);

        const itemRows = [
          <tr key={"row-data-" + item.id}>
            <td onClick={clickCallback} key={"row-data-" + item.id}>{item.id}</td>
           </tr>
         ];
    
        if (this.state.expandedRow === item.id) {
          itemRows.push(
            <tr>
                <td>
                  <div> {item.status} </div>
                </td>
            </tr>
          );
        }
    
        return itemRows;    
    }
    render() {
        let allItemRows = [];
        this.state.data.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
        });
        return (
			     <table>{allItemRows}</table>
        );
    }
}
export default TableRender