//Report Card row for Big Screens...
function rowBScreen(data, is_cardShow) {
  let cardShow = `
      <td>${data.Pre}</td>
      <td>${data.Mid}</td>
      <td>${data.Fin}</td>
      <td>${data.SemGrade}</td>
      <td>${data.GradePts}</td>
      <td>${data.Remarks}</td>
  `;

  return `
  <tr>
      <td>${data.No}</td>
      <td>${data.Sec}</td>
      <td>${data.Code}</td>
      <td>${data.Description}</td>
      <td>${data.Units}</td>
      <td>${data.Faculty}</td>
      ${is_cardShow ? cardShow : "<td colspan='6'>On-line not enabled</td>"}
  </tr>`;
}

//Report Card row for Small Screens...
function rowSScreen(data, is_cardShow) {
  let cardShow = `
    <p><span>Pre.</span><span>${data.Pre}</span></p>
    <p><span>Mid:</span><span>${data.Mid}</span></p>
    <p><span>Fin.</span><span>${data.Fin}</span></p>
    <p><span>semester Grade:</span><span>${data.SemGrade}</span></p>
    <p><span>Grade Pts.</span><span>${data.GradePts}</span></p>
    <p><span>Remarks:</span><span>${data.Remarks}</span></p>
    `;
  return `
  <div class="row">
    <p><span>No:</span><span>${data.No}</span></p>
    <p><span>Sec.</span><span>${data.Sec}</span></p>
    <p><span>Code:</span><span>${data.Code}</span></p>
    <p><span>Description:</span><span>${data.Description}</span></p>
    <p><span>Units:</span><span>${data.Units}</span></p>
    <p><span>Faculty:</span><span>${data.Faculty}</span></p>
    ${
      is_cardShow
        ? cardShow
        : `
      <p><span>Pre.</span><span>On-line not enabled</span></p>
      <p><span>Mid:</span><span>On-line not enabled</span></p>
      <p><span>Fin.</span><span>On-line not enabled</span></p>
      <p><span>semester Grade:</span><span>On-line not enabled</span></p>
      <p><span>Grade Pts.</span><span>On-line not enabled</span></p>
      <p><span>Remarks:</span><span>On-line not enabled</span></p>
    `
    }
  </div>
  `;
}
export default {
  rowBScreen,
  rowSScreen,
};
