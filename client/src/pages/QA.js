import { Link } from "react-router-dom";

export default function QA() {
  return (
    <div className="contentwrap">
      <div className="topHolder">
        <h1>Q&A</h1>
      </div>
      <div className="stuff">
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Is FBLA a big time commitment?
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body">
                It depends on how involved you get, the amount of projects you do, and the amount of time you put into competitive events. However, we do encourage you to get involved!
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  My question isn't answered, how do I reach out?
                </button>
              </h5>
            </div>

            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="card-body">
                If there's any question not answered please <Link to="/contact">contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}