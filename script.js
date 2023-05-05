// Retrieve existing data from local storage
var existingData = localStorage.getItem('myData');

// Parse existing data from CSV or JSON format
var data = existingData ? JSON.parse(existingData) : [];

// Add new data to array
data.push({ name: 'John', email: 'john@example.com' });

// Convert array to CSV or JSON format
var csvData = 'Name,Email\n';
for (var i = 0; i < data.length; i++) {
  csvData += data[i].name + ',' + data[i].email + '\n';
}
// OR
var jsonData = JSON.stringify(data);

// Save updated data to local storage
localStorage.setItem('myData', jsonData);

// Create file blob
var blob = new Blob([csvData || jsonData], { type: 'text/csv' || 'application/json' });

// Create download link
var url = URL.createObjectURL(blob);
var link = document.createElement('a');
link.setAttribute('href', url);
link.setAttribute('download', 'myData.csv' || 'myData.json');

// Click download link to initiate download
document.body.appendChild(link);
link.click();
document.body.removeChild(link);