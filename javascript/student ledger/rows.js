//Student Ledger row for Big Screens...
function transRowBScreen(data) {
  return `<tr>
        <td>${data.No}</td>
        <td>${
          jQuery.type(data.Description) === "array"
            ? `${data.Description[0]}<br>${data.Description[1]}`
            : data.Description
        }</td>
        <td>${
          jQuery.type(data["Date/Time"]) === "array"
            ? `${data["Date/Time"][0]}<br>${data["Date/Time"][1]}`
            : data["Date/Time"]
        }</td>
        <td>${data.Debit}</td>
        <td>${data.Credit}</td>
        <td>${data.Balance}</td>
      </tr>`;
}

function permitRowBScreen(data) {
  return `
    <tr>
      <td>${data.Exam}</td>
      <td>${data.RequiredAmount}</td>
      <td>${data.Balance}</td>
      <td ${data.ExamPermit === "Yes" ? "class='yes'" : ""}>${data.ExamPermit}
      </td>
    </tr>
  `;
}

//Student Ledger row for Small Screens...
function transRowSScreen(data) {
  return `
  <div class="row">
    <p><span>No:</span><span>${data.No}</span></p>
    <p><span>Description:</span><span>${
      jQuery.type(data.Description) === "array"
        ? `${data.Description[0]}<br>${data.Description[1]}`
        : data.Description
    }</span></p>
    <p><span>Date/Time:</span>${data["Date/Time"]}</span></p>
    <p><span>Debit:</span><span>${data.Debit}</span></p>
    <p><span>Credit:</span><span>${data.Credit}</span></p>
    <p><span>Balance:</span><span>${data.Balance}</span></p>
  </div>`;
}

function permitRowSScreen(data) {
  return `
    <div class="row">
      <p><span>Exam:</span><span>${data.Exam}</span></p>
      <p><span>Required Amount:</span><span>${data.RequiredAmount}</span></p>
      <p><span>Balance:</span><span>${data.Balance}</span></p>
      <p><span>Exam Permit:</span><span ${
        data.ExamPermit === "Yes" ? "class='yes'" : ""
      }${data.ExamPermit}>${data.ExamPermit}</span></p>
    </div>
  `;
}

export default {
  transRowBScreen,
  permitRowBScreen,
  transRowSScreen,
  permitRowSScreen,
};
