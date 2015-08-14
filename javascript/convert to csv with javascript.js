
/* read it's important */
/* put your id instead of "gen_csv", "datatable2" and "csvx" from your button, table and <a> tag. */


        $("#gen_csv").on('click', function (event) {
            //Get table
            var table = $("#datatable2")[0];
            //Get number of rows/columns
            var rowLength = table.rows.length;
            var colLength = table.rows[0].cells.length;

            //Declare string to fill with table data
            var tableString = "";

            //Get column headers
            for (var i = 0; i < colLength; i++) {
                tableString += table.rows[0].cells[i].innerText.split(",").join("") + ",";
            }
            tableString = tableString.substring(0, tableString.length - 1);
            tableString += "\r\n";

            //Get row data
            for (var j = 1; j < rowLength; j++) {
                for (var k = 0; k < colLength; k++) {
                    tableString += table.rows[j].cells[k].innerText.split(",").join("") + ",";
                }
                tableString += "\r\n";
            }
            tableString = tableString.replace(/<br>/g,'');
            //Save file
            if (navigator.appName == "Microsoft Internet Explorer") {
                //Optional: If you run into delimiter issues (where the commas are not interpreted and all data is one cell), then use this line to manually specify the delimeter
                tableString = 'sep=,\r\n' + tableString;

                myFrame.document.open("text/html", "replace");
                myFrame.document.write(tableString);
                myFrame.document.close();
                myFrame.focus();
                myFrame.document.execCommand('SaveAs', true, 'Reg_Team_<?php echo date("Y-m-d")?>.csv');
            } else {
                csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(tableString);
                $('#csvx').attr({
                    'href': csvData,
                    'target': '_blank',
                    'download': 'Reg_Team_<?php echo date("Y-m-d")?>.csv'
                });
                $('#csvx')[0].click();
            }
        });