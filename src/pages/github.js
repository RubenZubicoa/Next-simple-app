import Layout from "../components/layout"
import Error from '../pages/error';

const github = ({user, status}) => {

    if(status){
        return <Error statusCode={status}/>
    }

    return (
        <Layout footer={false} dark={true}>
            <div className="container row">
                <div className="col-md-5 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.login}</h1>
                        <img src={user.avatar_url} />
                        <a href={user.html_url} target="_blank" className="btn btn-outline-secondary my-2">Go to github</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/RubenZubicoa')
    const data = await res.json();

    const status = res.status > 200 ? res.status : false;
    return {
        props: {
            user: data,
            status: status,
        }
    }
}

export default github