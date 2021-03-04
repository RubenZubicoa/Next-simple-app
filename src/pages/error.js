import Layout from "../components/layout"

const _error = ({statusCode}) => {
    return (
        <Layout>
            <h1 className="text-center">{statusCode}</h1>
            <p className="text-center">Could not load your page</p>
        </Layout>
    )
}

export default _error;