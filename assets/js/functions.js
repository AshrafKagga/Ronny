function getSingleRecord(url, id, target, functionCall) {
    fetch(url)
      .then(response => response.json())
      .then(function (data) {
        var selected = data[target].find(item => item.id == id); // Access target directly
        if (selected) {
          functionCall(selected); // Call the function with the selected item
        } else {
          console.error('No item with this id');
        }
      })
      .catch(error => console.error('Error:', error));
  }
  function getRecords(url, functionCall) {
    fetch(url)
      .then(response => response.json())
      .then(function (data) {
        if (data) {
          functionCall(data); // Call the function with the selected item
        } else {
          console.error('No item with this id');
        }
      })
      .catch(error => console.error('Error:', error));
  }