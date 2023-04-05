import { pageChanger } from "../contentUpdater.js";
import table from "./table.js";

//Enrolled Subjects Big Screen...
function enrolledBScreen() {
  let page = `
  <section class="enrolledSubject-section">
    <header>
      <h2>Subjects Enrolled/Assessed</h2>
    </header>
    <div class="wrapper">
      <div class="selector">
        <div class="group-inputs">
          <label for="">
            School Year
            <select id="year" class="input-box year-sem">

            </select>
          </label>
          <label for="">
            Semester
            <select id="sem" class="input-box year-sem">
        
            </select>
          </label>
        </div>
        <div class="btn">
          <button class="proceed-btn">Proceed</button>
        </div>
      </div>
      <div class="stud-info">
        <h4>Student#: <span>AY2022-03061</span></h4>
        <h4>Name: <span>Jayag, Mark Edison</span></h4>
        <h4>Course: <span>BSIT</span></h4>
        <h4>Year Level: <span>1</span></h4>
        <h4>Enrollment Status: <span>Enrolled</span></h4>
      </div>
      <div id="enrolledTableContainer">
      </div>
    </div>
  </section>`;

  pageChanger(page);

  table.options();
  table.enrolledTableBScreen();
}

//Enrolled Subjects Small Screen...
function enrolledSScreen() {
  let page = `<section class="enrolledSubject-section">
    <header>
      <h2>Subjects Enrolled/Assessed</h2>
    </header>

    <div class="wrapper">
      <div class="selector">
        <div class="group-inputs">
          <label for="">
            School Year
            <select id="year" class="input-box year-sem">
              
            </select>
          </label>
          <label for="">
            Semester
            <select id="sem" class="input-box year-sem">
              
            </select>
          </label>
        </div>

        <div class="btn">
          <button class="proceed-btn">Proceed</button>
        </div>
      </div>
      <div class="stud-info">
        <h4><span>Student No:</span><span>AY2022-03061</span></h4>
        <h4><span>Name:</span><span>Jayag, Mark Edison</span></h4>
        <h4><span>Course:</span><span>BSIT</span></h4>
        <h4><span>Year Level:</span><span>1</span></h4>
        <h4><span>Enrollment Status:</span><span>Enrolled</span></h4>
      </div>
      <div id="enrolledTableContainer">
      </div>
    </div>
  </section>`;

  pageChanger(page);

  table.options();
  table.enrolledTableSScreen();
}

export default { enrolledBScreen, enrolledSScreen };
