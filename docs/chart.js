google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var container = document.getElementById('example2.1');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Vertical' });
  dataTable.addColumn({ type: 'string', id: 'Name' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });

  var data = "Event Engagement|View from Seat & Section Map|2017-10-20|2017-11-30";


  dataTable.addRows([
    data.split('|').map((item, index) => {
      if (index > 1) {
        return new Date(item);
      } else {
        return item;
      }
    }),
    // [
    // 	'Event Engagement',
    //   'View from Seat & Section Map',
    //   new Date('2017-10-20'),
    //   new Date('2017-11-30')
    // ],
    [
'Event Engagement',
'Entry - Outage Recovery vis Caching',
      new Date('2017-10-01'),
      new Date('2017-11-30')
    ],
    [
'Event Engagement',
'Entry - Android Pay/Passbook',
      new Date('2018-02-01'),
      new Date('2018-03-31')
    ],
    [
'Event Engagement',
'Entry - Save Ticket UX',
      new Date('2018-03-01'),
      new Date('2018-03-31')
    ],
    [
'Event Engagement',
'Entry - MAS Stability',
      new Date('2018-04-01'),
      new Date('2018-06-30')
    ],
    [
'Event Engagement',
'HP - Series Mobile Ticket',
      new Date('2018-01-02'),
      new Date('2018-01-31')
    ],
    [
'Fan Seller',
'CCP Posting by Order',
      new Date('2017-08-01'),
      new Date('2017-11-01')
    ],
    [
'Fan Seller',
'Posting Pricing Guide',
      new Date('2018-03-01'),
      new Date('2018-05-31')
    ],
    [
'Fan Seller',
'Sell Landing Page',
      new Date('2018-03-01'),
      new Date('2018-05-31')
    ],
    [
'Fan Seller',
'Share Listing',
      new Date('2018-02-01'),
      new Date('2018-03-31')
    ],
    [
'Fan Seller',
'NFL - Posting by Barcode',
      new Date('2018-01-02'),
      new Date('2018-03-31')
    ],
    [
'Fan Seller',
'NFL - Listing Management',
      new Date('2017-11-17'),
      new Date('2018-01-31')
    ],
    [
'Fan Seller',
'NFL - Barcode Verify Abuse Prevention',
      new Date('2018-01-02'),
      new Date('2018-03-31')
    ],
    [
'Ticket Management',
'HP - Series Transfer',
      new Date('2018-01-02'),
      new Date('2018-02-16')
    ],
    [
'Ticket Management',
'Anonymous Transfer',
      new Date('2018-05-01'),
      new Date('2018-07-31')
    ],
    [
'Ticket Management',
'Refund UX Update',
      new Date('2017-11-01'),
      new Date('2017-12-31')
    ],
    [
'Ticket Management',
'Change Delivery Optimization',
      new Date('2017-12-01'),
      new Date('2018-03-31')
    ],
    [
'Ticket Management',
'NFL - Branded Transfer',
      new Date('2018-01-02'),
      new Date('2018-03-30')
    ],
  ]);
  chart.draw(dataTable);
}
