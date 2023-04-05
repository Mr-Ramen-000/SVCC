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
  $.getJSON("../json/student_subjects.json", function (e) {
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
      $.each(availableYear, function (n, a) {
        e +=
          a === year
            ? `\n              <option value="${a}" selected>\n                ${a}\n              </option>;`
            : `\n              <option value="${a}">\n                ${a}\n              </option>;`;
      }),
        (listOptionsYear = e),
        $(".enrolledSubject-section #year").html(listOptionsYear),
        $.each(availableSem, function (e, a) {
          n +=
            a === sem
              ? `\n                <option value="${a}" selected>\n                  ${a}\n                </option>;`
              : `\n                <option value="${a}">\n                  ${a}\n                </option>;`;
        }),
        (listOptionsSem = n),
        $(".enrolledSubject-section #sem").html(listOptionsSem);
    }
    if (e.Year[year][sem]) {
      let n = "",
        a = "";
      $.each(e.Year[year][sem], function (s, t) {
        (n += rowBScreen(t, e.ShowGrade)),
          (a += rowSScreen(t, e.ShowGrade)),
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
        (enrolledRowsSScreen = a);
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
      $.each(data.Year[year][sem], function (a, s) {
        (e += rowBScreen(s)), (n += rowSScreen(s));
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
    $.each(availableYear, function (n, a) {
      (e +=
        a === year
          ? `\n            <option value="${a}" selected>\n              ${a}\n            </option>;`
          : `\n            <option value="${a}">\n              ${a}\n            </option>;`),
        (listOptionsYear = e);
    });
    let n = "";
    $.each(availableSem, function (e, a) {
      (n +=
        a === sem
          ? `\n              <option value="${a}" selected>\n                ${a}\n              </option>;`
          : `\n              <option value="${a}">\n                ${a}\n              </option>;`),
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
function rowBScreen(e) {
  return `\n  <tr>\n      <td>${e.No}</td>\n      <td>${e.Sec}</td>\n      <td>${e.SubjIndex}</td>\n      <td>${e.Code}</td>\n      <td>${e.Description}</td>\n      <td>${e.Units}</td>\n      <td>${e.Cat}</td>\n      <td>${e.Lecdays}</td>\n      <td>${e.From}</td>\n      <td>${e.To}</td>\n      <td>${e.Room}</td>\n      <td>${e.Faculty}</td>\n    </tr>`;
}
function rowSScreen(e) {
  return `\n  <div class="row">\n    <p><span>No:</span><span>${e.No}</span></p>\n    <p><span>Sec.</span><span>${e.Sec}</span></p>\n    <p><span>Subj Index</span><span>${e.SubjIndex}</span></p>\n    <p><span>Subj Code</span><span>${e.Code}</span></p>\n    <p><span>Description:</span><span>${e.Description}</span></p>\n    <p><span>Units:</span><span>${e.Units}</span></p>\n    <p><span>Cat.</span><span>${e.Cat}</span></p>\n    <p><span>Lecdays:</span><span>${e.Lecdays}</span></p>\n    <p><span>From:</span><span>${e.From}</span></p>\n    <p><span>To:</span><span>${e.To}</span></p>\n    <p><span>Room:</span><span>${e.Room}</span></p>\n    <p><span>Faculty:</span><span>${e.Faculty}</span></p>\n  </div>\n  `;
}
export default {
  enrolledBScreen: enrolledBScreen,
  enrolledSScreen: enrolledSScreen,
};
