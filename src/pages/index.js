import Layout from '../components/layout';
import { skills } from '../profile';

const index = () => (
    <Layout>

        {/** Header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-fluid" src="profile.jpg" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h1>Rayn Ray</h1>
                            <h3>Full stack developer</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                            <a href="/hireme">Hire me</a>

                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/** Second section */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>

                        {
                            skills.map(({ skill, percentage }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: `${percentage}%` }}></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
)

export default index