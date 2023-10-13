import Layout from "../components/Layout";
import MovieForm from "../components/MovieForm";

const FormPage = (props) => {
  const { onAddMovie } = props;

  return (
    <Layout title="MovieForm">
      <div className="formbackground-image">
        <MovieForm onAddMovie={onAddMovie} />
      </div>
    </Layout>
  );
};

export default FormPage;
