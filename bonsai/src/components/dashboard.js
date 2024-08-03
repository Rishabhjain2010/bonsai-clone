import "../styles/design.css"


function Dashboard() {
  return (

    <div className="App">
      <div className="imgbg"></div>
      <div className="first">
        <div className="mainbox">
          <div className="left">
            <div className="dribbble">
              <h4>In partnership with</h4> <img src="/assets/dribbble.JPG" alt="" height="35px" />
            </div>
            <h1>The business software for design agencies</h1>
            <p>
              Bonsai takes the stress out of running your agency. Run projects,
              win clients, get paid, and track your revenue. Start a free trial
              via the link below to get a 30% discount.
            </p>
            <button>Get 30% off</button>
          </div>

          <div className="right">
            <img src="/assets/image.JPG" alt="" width="430" height="600" />
          </div>
        </div>
      </div>

      <div className="second">
        <h1>Bonsai for Design agencies</h1>
        <img src="https://cdn.prod.website-files.com/637e5892fb4b6db88a62cc0a/66aa4b98cc4eba312364ad9f_Bonsai%20for%20Design%20agencies-p-1600.png" alt="" width="1060"/>
      </div>

      <div className="third">
        <div className="tasks">
          <img src="/assets/tasks.svg" alt="" />
          <div className="col">
            <h1>Tasks</h1>
            <p>Assign, estimate, and track tasks across projects.</p>
          </div>
        </div>

        <div className="time">
          <img src="/assets/time tracking.svg" alt="" />
          <div className="col">
            <h1>Time Tracking</h1>
            <p>See where time is spent with the tracker and timesheets.</p>
          </div>
        </div>

        <div className="budget">
          <img src="/assets/budget tracking.svg" alt="" />
          <div className="col">
            <h1>budget Tracking</h1>
            <p>Keep projects profitable and stay within budget.</p>
          </div>
        </div>

        <div className="invoices">
          <img src="/assets/invoices.svg" alt="" />
          <div className="col">
            <h1>Invoices</h1>
            <p>Get paid faster with integrated billing and online payments.</p>
          </div>
        </div>

        <div className="resourcing">
          <img src="/assets/resourcing.svg" alt="" />
          <div className="col">
            <h1>Resourcing</h1>
            <p>Plan work schedules on capacity and ongoing commitments.</p>
          </div>
        </div>

        <div className="reports">
          <img src="/assets/reports.svg" alt="" />
          <div className="col">
            <h1>Reports</h1>
            <p>Dive into each project's performance with real-time data.</p>
          </div>
        </div>
      </div>

      <div className="fourth">
        <div className="willian">
          <div className="willimg">
            <img src="/assets/wilian.jpeg" alt="" width="415px" />
          </div>
          <div className="willtext">
            <p>
              Bonsai's is essential to our thriving team of 32+. Its blend of
              simplicity and data-driven insights continues to be invaluable as
              we scale and grow.
            </p>
            <p>Wilian</p>
            <p>Zabal Media</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
