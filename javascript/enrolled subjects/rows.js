//Enrolled row for Big Screens...
function rowBScreen(data) {
  return `
  <tr>
      <td>${data.No}</td>
      <td>${data.Sec}</td>
      <td>${data.SubjIndex}</td>
      <td>${data.Code}</td>
      <td>${data.Description}</td>
      <td>${data.Units}</td>
      <td>${data.Cat}</td>
      <td>${data.Lecdays}</td>
      <td>${data.From}</td>
      <td>${data.To}</td>
      <td>${data.Room}</td>
      <td>${data.Faculty}</td>
    </tr>`;
}

//Enrolled row for Small Screens...
function rowSScreen(data) {
  return `
  <div class="row">
    <p><span>No:</span><span>${data.No}</span></p>
    <p><span>Sec.</span><span>${data.Sec}</span></p>
    <p><span>Subj Index</span><span>${data.SubjIndex}</span></p>
    <p><span>Subj Code</span><span>${data.Code}</span></p>
    <p><span>Description:</span><span>${data.Description}</span></p>
    <p><span>Units:</span><span>${data.Units}</span></p>
    <p><span>Cat.</span><span>${data.Cat}</span></p>
    <p><span>Lecdays:</span><span>${data.Lecdays}</span></p>
    <p><span>From:</span><span>${data.From}</span></p>
    <p><span>To:</span><span>${data.To}</span></p>
    <p><span>Room:</span><span>${data.Room}</span></p>
    <p><span>Faculty:</span><span>${data.Faculty}</span></p>
  </div>
  `;
}
export default {
  rowBScreen,
  rowSScreen,
};
