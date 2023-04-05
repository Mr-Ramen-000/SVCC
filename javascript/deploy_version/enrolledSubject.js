function enrolledBScreen() {
  pageChanger(
    '\n  <section class="enrolledSubject-section">\n    <header>\n      <h2>Subjects Enrolled/Assessed</h2>\n    </header>\n    <div class="wrapper">\n      <div class="selector">\n        <div class="group-inputs">\n          <label for="">\n            School Year\n            <select id="year" class="input-box year-sem">\n\n            </select>\n          </label>\n          <label for="">\n            Semester\n            <select id="sem" class="input-box year-sem">\n        \n            </select>\n          </label>\n        </div>\n        <div class="btn">\n          <button class="proceed-btn">Proceed</button>\n        </div>\n      </div>\n      <div class="stud-info">\n        <h4>Student#: <span>AY2022-03061</span></h4>\n        <h4>Name: <span>Jayag, Mark Edison</span></h4>\n        <h4>Course: <span>BSIT</span></h4>\n        <h4>Year Level: <span>1</span></h4>\n        <h4>Enrollment Status: <span>Enrolled</span></h4>\n      </div>\n      <div id="enrolledTableContainer">\n      </div>\n    </div>\n  </section>'
  ),
    options(),
    enrolledTableBScreen();
}
function enrolledSScreen() {
  pageChanger(
    '<section class="enrolledSubject-section">\n    <header>\n      <h2>Subjects Enrolled/Assessed</h2>\n    </header>\n\n    <div class="wrapper">\n      <div class="selector">\n        <div class="group-inputs">\n          <label for="">\n            School Year\n            <select id="year" class="input-box year-sem">\n              \n            </select>\n          </label>\n          <label for="">\n            Semester\n            <select id="sem" class="input-box year-sem">\n              \n            </select>\n          </label>\n        </div>\n\n        <div class="btn">\n          <button class="proceed-btn">Proceed</button>\n        </div>\n      </div>\n      <div class="stud-info">\n        <h4><span>Student No:</span><span>AY2022-03061</span></h4>\n        <h4><span>Name:</span><span>Jayag, Mark Edison</span></h4>\n        <h4><span>Course:</span><span>BSIT</span></h4>\n        <h4><span>Year Level:</span><span>1</span></h4>\n        <h4><span>Enrollment Status:</span><span>Enrolled</span></h4>\n      </div>\n      <div id="enrolledTableContainer">\n      </div>\n    </div>\n  </section>'
  ),
    options(),
    enrolledTableSScreen();
}
function pageChanger(e) {
  $(".page-content").html(e);
}
let data,
  year,
  sem,
  availableYear,
  listOptionsYear,
  availableSem,
  listOptionsSem,
  enrolledRowsBScreen = "",
  enrolledRowsSScreen = "";
function getEnrolledData() {
  $.getJSON("json/student_subjects.json", function (e) {
    let n = JSON.parse(sessionStorage.getItem("esInput"));
    if (
      ((data = e),
      (availableYear = Object.keys(e.Year).sort().reverse()),
      (year = n ? n.year : availableYear[0]),
      (availableSem = Object.keys(e.Year[year]).sort().reverse()),
      (sem = n ? n.sem : availableSem[0]),
      availableYear)
    ) {
      let e = "",
        n = "";
      $.each(availableYear, function (n, l) {
        e +=
          l === year
            ? `\n              <option value="${l}" selected>\n                ${l}\n              </option>;`
            : `\n              <option value="${l}">\n                ${l}\n              </option>;`;
      }),
        (listOptionsYear = e),
        $(".enrolledSubject-section #year").html(listOptionsYear),
        $.each(availableSem, function (e, l) {
          n +=
            l === sem
              ? `\n                <option value="${l}" selected>\n                  ${l}\n                </option>;`
              : `\n                <option value="${l}">\n                  ${l}\n                </option>;`;
        }),
        (listOptionsSem = n),
        $(".enrolledSubject-section #sem").html(listOptionsSem);
    }
    if (e.Year[year][sem]) {
      let n = "",
        l = "";
      $.each(e.Year[year][sem], function (o, t) {
        (n += rowBScreen(t, e.ShowGrade)),
          (l += rowSScreen(t, e.ShowGrade)),
          !enrolledRowsBScreen &&
            $(window).width() >= 1025 &&
            $("#enrolledTable").append(rowBScreen(t, e.ShowGrade)),
          !enrolledRowsSScreen &&
            $(window).width() <= 1024 &&
            $(".enrolledSubject-section .rows").append(
              rowSScreen(t, e.ShowGrade)
            );
      }),
        (enrolledRowsBScreen = n),
        (enrolledRowsSScreen = l);
    } else console.log("No Record...");
  });
}
function options() {
  $(document).ready(function () {
    getEnrolledData();
  }),
    listOptionsYear &&
      $(".enrolledSubject-section #year").html(listOptionsYear),
    listOptionsSem && $(".enrolledSubject-section #sem").html(listOptionsSem),
    $(".enrolledSubject-section .proceed-btn").click(() => proceedBTN());
}
function proceedBTN() {
  if (
    year !== $(".enrolledSubject-section #year").val() ||
    sem !== $(".enrolledSubject-section #sem").val()
  ) {
    if (
      ((year = $(".enrolledSubject-section #year").val()),
      (sem = $(".enrolledSubject-section #sem").val()),
      sessionStorage.setItem(
        "esInput",
        JSON.stringify({ year: year, sem: sem })
      ),
      data.Year[year][sem].length)
    ) {
      let e = "",
        n = "";
      $.each(data.Year[year][sem], function (l, o) {
        (e += rowBScreen(o)), (n += rowSScreen(o));
      }),
        (enrolledRowsBScreen = e),
        (enrolledRowsSScreen = n),
        $(window).width() >= 1025 && enrolledTableBScreen(),
        $(window).width() <= 1024 && enrolledTableSScreen();
    } else
      (enrolledRowsBScreen = ""),
        (enrolledRowsSScreen = ""),
        $(window).width() >= 1025 && enrolledTableBScreen(),
        $(window).width() <= 1024 && enrolledTableSScreen(),
        console.log("No Record...");
    let e = "";
    $.each(availableYear, function (n, l) {
      (e +=
        l === year
          ? `\n            <option value="${l}" selected>\n              ${l}\n            </option>;`
          : `\n            <option value="${l}">\n              ${l}\n            </option>;`),
        (listOptionsYear = e);
    });
    let n = "";
    $.each(availableSem, function (e, l) {
      (n +=
        l === sem
          ? `\n              <option value="${l}" selected>\n                ${l}\n              </option>;`
          : `\n              <option value="${l}">\n                ${l}\n              </option>;`),
        (listOptionsSem = n);
    });
  }
}
function enrolledTableBScreen() {
  let e = `\n  <table id="enrolledTable">\n    <tr>\n      <th colspan="12">Student's Subjects</th>\n    </tr>\n    <tr>\n      <th>#</th>\n      <th>Sec.</th>\n      <th>Subj Index</th>\n      <th>Subj Code</th>\n      <th>Description</th>\n      <th>Units</th>\n      <th>Cat.</th>\n      <th>Lecdays</th>\n      <th>From</th>\n      <th>To</th>\n      <th>Room</th>\n      <th>Faculty</th>\n    </tr>\n    ${enrolledRowsBScreen}\n  </table>`;
  enrolledRowsBScreen
    ? ($("#enrolledTableContainer").html(
        '<div class="loading">\n        <div class="loader">\n        </div>\n        <h2>Loading...</h2>\n      </div>'
      ),
      setTimeout(function () {
        $("#enrolledTableContainer").html(e);
      }, 300))
    : $("#enrolledTableContainer").html(e);
}
function enrolledTableSScreen() {
  let e = `\n  <div class="row-wrap">\n    <div class="row header">\n      <h2>Student's Subjects</h2>\n    </div>\n\n    <div class="rows">\n      ${enrolledRowsSScreen}\n    </div>\n  </div>`;
  enrolledRowsBScreen
    ? ($("#enrolledTableContainer").html(
        '<div class="loading">\n        <div class="loader">\n        </div>\n        <h2>Loading...</h2>\n      </div>'
      ),
      setTimeout(function () {
        $("#enrolledTableContainer").html(e);
      }, 300))
    : $("#enrolledTableContainer").html(e);
}

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
  enrolledBScreen: enrolledBScreen,
  enrolledSScreen: enrolledSScreen,
};
