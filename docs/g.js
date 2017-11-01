function drawChart() {
  const URL = 'https://docs.google.com/spreadsheets/d/1pZWL5-mXY-7LPCkFHaEwgorcwZ2sQ-Q7PSKP2Qcg-c4/edit?usp=sharing';
  var query = new google.visualization.Query(URL);
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  var data = response.getDataTable();
  var chart = new google.visualization.Timeline(document.getElementById('columnchart'));
  chart.draw(data, null);
}

