import { LightningElement, api } from 'lwc';
import getRecordsObjectsB from '@salesforce/apex/PersonalRelatedListBCController.getRecordsObjectsB';
import getRecordsObjectsC from '@salesforce/apex/PersonalRelatedListBCController.getRecordsObjectsC';
import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';

 const columns = [
    { label: 'ObjectRelatedName', fieldName: 'oRname' },
    { label: 'Name', fieldName: 'name' },
    { label: 'NameRelated', fieldName: 'nameR' }
];

export default class PersonalRelatedListBC extends LightningElement 
{
   data = [];
   columns = columns;
   loadMoreStatus;
   @api totalNumberOfRows;

    connectedCallback()
    {
        var array = [];
        getRecordsObjectsB() 
        .then(result => { 
            var aux = [];
            result.forEach(element => {
                var obj = {
                    'oRname' : 'ObjectB',
                    'name' : element.Name,
                    'nameR' : element.ObjectA__r.Name
                };
                aux.push(obj);
            });
            this.data = [...aux];
            // console.log('aux' + aux);
            // this.array = [...aux];
         }) 
        .catch(error => { 
            console.log(JSON.stringify(error));
         })

         var array2 = [];
        getRecordsObjectsC() 
        .then(result => { 
            var aux2 = [];
            result.forEach(element => {
                var obj = {
                    'oRname' : 'ObjectC',
                    'name' : element.Name,
                    'nameR' : element.ObjectB__r.Name
                };
                aux2.push(obj);
            });
            this.data = this.data.concat(aux2);
         }) 
        .catch(error => { 
            console.log(JSON.stringify(error));
         })

    }

    loadMoreData(event) {
        //Display a spinner to signal that data is being loaded
        event.target.isLoading = true;
        //Display "Loading" when more data is being loaded
        this.loadMoreStatus = 'Loading';
        fetchData(50).then((data) => {
            if (data.length >= this.totalNumberOfRows) {
                event.target.enableInfiniteLoading = false;
                this.loadMoreStatus = 'No more data to load';
            } else {
                const currentData = this.data;
                //Appends new data to the end of the table
                const newData = currentData.concat(data);
                this.data = newData;
                this.loadMoreStatus = '';
            }
            event.target.isLoading = false;
        });
    }

    
}
