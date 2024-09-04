// import { useGetReposQuery } from '../api/githubReposApi';


const DescriptionRepo = ({ activeRepoData }) => {

  // const { data } = useGetReposQuery();

  // const getRepo = (data) => {
  //   const activeName = data.items.filter((item) => item.id === activeId);
  //   return activeName;
  // }

  return (
    <div>
      <h2>{activeRepoData.name}</h2>
      <p>{activeRepoData.language}</p>
      <p>{activeRepoData.stars}</p>
      {/* <p>{activeRepoData.license}</p> */}
    </div>
  )
};

export default DescriptionRepo;
